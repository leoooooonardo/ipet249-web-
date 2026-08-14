"use client"

import { useState } from "react"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { useAuth } from "@/components/providers/auth-provider"
import { ROLES } from "@/lib/data/roles"
import type { Categoria, Rol } from "@/lib/types"
import { Lock, Plus, Pencil, Trash2, X, FileText, LogIn } from "lucide-react"

interface Borrador {
  id: string
  titulo: string
  categoria: Categoria
  fecha: string
  roles: Rol[]
  estado: "publicado" | "borrador"
}

const CATEGORIAS: { value: Categoria; label: string }[] = [
  { value: "institucional", label: "Institucional" },
  { value: "academico", label: "Académico" },
  { value: "admisiones", label: "Admisiones" },
  { value: "vida-escolar", label: "Vida escolar" },
  { value: "oportunidades", label: "Oportunidades" },
  { value: "comunidad", label: "Comunidad" },
]

const SEED: Borrador[] = [
  { id: "1", titulo: "Inscripciones 2026 abiertas", categoria: "admisiones", fecha: "2026-02-01", roles: ["aspirante", "familia"], estado: "publicado" },
  { id: "2", titulo: "Calendario de mesas de examen", categoria: "academico", fecha: "2026-02-20", roles: ["alumno", "familia", "profesor"], estado: "publicado" },
  { id: "3", titulo: "Convocatoria olimpiadas de informática", categoria: "oportunidades", fecha: "2026-03-10", roles: ["alumno", "profesor"], estado: "borrador" },
]

const emptyForm = (): Omit<Borrador, "id"> => ({
  titulo: "",
  categoria: "institucional",
  fecha: "",
  roles: [],
  estado: "borrador",
})

export default function PanelPage() {
  const { usuario, puedeAdministrar } = useAuth()
  const [items, setItems] = useState<Borrador[]>(SEED)
  const [editando, setEditando] = useState<string | null>(null)
  const [creando, setCreando] = useState(false)
  const [form, setForm] = useState<Omit<Borrador, "id">>(emptyForm())

  // ---- Control de acceso (prototipo) ----
  if (!puedeAdministrar) {
    return (
      <main>
        <PageHero
          etiqueta="Panel de gestión"
          titulo="Acceso restringido"
          migas={[{ label: "Inicio", href: "/" }, { label: "Panel" }]}
        />
        <section className="mx-auto max-w-6xl px-4 md:px-8 py-16">
          <div
            className="mx-auto max-w-md rounded-xl border p-8 text-center"
            style={{ borderColor: "var(--border-color)", backgroundColor: "var(--bg-white)" }}
          >
            <span
              className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full"
              style={{ backgroundColor: "var(--bg-light)", color: "var(--red-oxide)" }}
            >
              <Lock className="w-6 h-6" aria-hidden="true" />
            </span>
            <h2 className="text-xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
              {usuario ? "Tu rol no tiene permisos" : "Necesitás iniciar sesión"}
            </h2>
            <p className="mb-6 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              {usuario
                ? "El panel de carga está disponible solo para directivos, profesores y preceptores."
                : "Ingresá con una cuenta administrativa para gestionar los contenidos del sitio."}
            </p>
            <Link
              href="/ingresar"
              className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold text-white transition-colors"
              style={{ backgroundColor: "var(--red-oxide)" }}
            >
              <LogIn className="w-4 h-4" aria-hidden="true" />
              Ir a ingresar
            </Link>
          </div>
        </section>
      </main>
    )
  }

  // ---- Acciones ----
  function abrirNuevo() {
    setForm(emptyForm())
    setCreando(true)
    setEditando(null)
  }

  function abrirEdicion(item: Borrador) {
    const { id, ...rest } = item
    setForm(rest)
    setEditando(id)
    setCreando(false)
  }

  function cerrarForm() {
    setCreando(false)
    setEditando(null)
  }

  function toggleRol(rol: Rol) {
    setForm((f) => ({
      ...f,
      roles: f.roles.includes(rol) ? f.roles.filter((r) => r !== rol) : [...f.roles, rol],
    }))
  }

  function guardar(e: React.FormEvent) {
    e.preventDefault()
    if (editando) {
      setItems((prev) => prev.map((it) => (it.id === editando ? { ...form, id: editando } : it)))
    } else {
      setItems((prev) => [{ ...form, id: crypto.randomUUID() }, ...prev])
    }
    cerrarForm()
  }

  function eliminar(id: string) {
    setItems((prev) => prev.filter((it) => it.id !== id))
    if (editando === id) cerrarForm()
  }

  const inputStyle = {
    borderColor: "var(--border-color)",
    backgroundColor: "var(--bg-white)",
    color: "var(--text-primary)",
  } as const

  const mostrandoForm = creando || editando !== null

  return (
    <main>
      <PageHero
        etiqueta="Panel de gestión"
        titulo="Carga y edición de contenidos"
        descripcion={`Sesión: ${usuario?.nombre} · Prototipo de demostración (los cambios no se guardan al recargar).`}
        migas={[{ label: "Inicio", href: "/" }, { label: "Panel" }]}
      />

      <section className="mx-auto max-w-6xl px-4 md:px-8 py-10 md:py-14">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>
            Contenidos ({items.length})
          </h2>
          <button
            onClick={abrirNuevo}
            className="inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-sm font-semibold text-white transition-colors"
            style={{ backgroundColor: "var(--red-oxide)" }}
          >
            <Plus className="w-4 h-4" aria-hidden="true" />
            Nuevo contenido
          </button>
        </div>

        {/* Formulario de alta / edición */}
        {mostrandoForm && (
          <form
            onSubmit={guardar}
            className="mb-8 rounded-xl border p-6"
            style={{ borderColor: "var(--gold-primary)", backgroundColor: "var(--bg-light)" }}
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-base font-bold" style={{ color: "var(--text-primary)" }}>
                {editando ? "Editar contenido" : "Nuevo contenido"}
              </h3>
              <button
                type="button"
                onClick={cerrarForm}
                className="rounded p-1 transition-colors"
                style={{ color: "var(--text-muted)" }}
                aria-label="Cerrar formulario"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="block md:col-span-2">
                <span className="block text-sm font-medium mb-1.5" style={{ color: "var(--text-secondary)" }}>
                  Título
                </span>
                <input
                  type="text"
                  value={form.titulo}
                  onChange={(e) => setForm((f) => ({ ...f, titulo: e.target.value }))}
                  className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2"
                  style={inputStyle}
                  required
                />
              </label>

              <label className="block">
                <span className="block text-sm font-medium mb-1.5" style={{ color: "var(--text-secondary)" }}>
                  Categoría
                </span>
                <select
                  value={form.categoria}
                  onChange={(e) => setForm((f) => ({ ...f, categoria: e.target.value as Categoria }))}
                  className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2"
                  style={inputStyle}
                >
                  {CATEGORIAS.map((c) => (
                    <option key={c.value} value={c.value}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="block text-sm font-medium mb-1.5" style={{ color: "var(--text-secondary)" }}>
                  Fecha
                </span>
                <input
                  type="date"
                  value={form.fecha}
                  onChange={(e) => setForm((f) => ({ ...f, fecha: e.target.value }))}
                  className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2"
                  style={inputStyle}
                />
              </label>

              <fieldset className="md:col-span-2">
                <legend className="text-sm font-medium mb-2" style={{ color: "var(--text-secondary)" }}>
                  Visible para (dejar vacío = todos)
                </legend>
                <div className="flex flex-wrap gap-2">
                  {ROLES.map((r) => {
                    const activo = form.roles.includes(r.value)
                    return (
                      <button
                        type="button"
                        key={r.value}
                        onClick={() => toggleRol(r.value)}
                        className="rounded-full border px-3 py-1 text-xs font-medium transition-colors"
                        style={{
                          borderColor: activo ? "var(--gold-primary)" : "var(--border-color)",
                          backgroundColor: activo ? "var(--gold-primary)" : "var(--bg-white)",
                          color: activo ? "#1A1A1A" : "var(--text-secondary)",
                        }}
                        aria-pressed={activo}
                      >
                        {r.label}
                      </button>
                    )
                  })}
                </div>
              </fieldset>

              <label className="flex items-center gap-2 md:col-span-2">
                <input
                  type="checkbox"
                  checked={form.estado === "publicado"}
                  onChange={(e) => setForm((f) => ({ ...f, estado: e.target.checked ? "publicado" : "borrador" }))}
                />
                <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  Publicar (visible en el sitio)
                </span>
              </label>
            </div>

            <div className="mt-6 flex gap-3">
              <button
                type="submit"
                className="rounded-md px-4 py-2 text-sm font-semibold text-white transition-colors"
                style={{ backgroundColor: "var(--red-oxide)" }}
              >
                {editando ? "Guardar cambios" : "Crear contenido"}
              </button>
              <button
                type="button"
                onClick={cerrarForm}
                className="rounded-md border px-4 py-2 text-sm font-semibold transition-colors"
                style={{ borderColor: "var(--border-color)", color: "var(--text-secondary)" }}
              >
                Cancelar
              </button>
            </div>
          </form>
        )}

        {/* Lista de contenidos */}
        <ul className="flex flex-col divide-y rounded-xl border" style={{ borderColor: "var(--border-color)" }}>
          {items.length === 0 && (
            <li className="px-4 py-10 text-center text-sm" style={{ color: "var(--text-muted)" }}>
              No hay contenidos. Creá el primero con “Nuevo contenido”.
            </li>
          )}
          {items.map((item) => (
            <li key={item.id} className="flex items-center gap-4 px-4 py-4" style={{ backgroundColor: "var(--bg-white)" }}>
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                style={{ backgroundColor: "var(--bg-light)", color: "var(--gold-primary)" }}
              >
                <FileText className="w-5 h-5" aria-hidden="true" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="flex flex-wrap items-center gap-2 text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                  <span className="truncate">{item.titulo}</span>
                  <span
                    className="rounded px-1.5 py-0.5 text-[10px] font-mono uppercase"
                    style={{
                      backgroundColor: item.estado === "publicado" ? "#E7F1E9" : "var(--bg-light)",
                      color: item.estado === "publicado" ? "#2F6B3C" : "var(--text-muted)",
                    }}
                  >
                    {item.estado}
                  </span>
                </p>
                <p className="mt-0.5 text-xs font-mono" style={{ color: "var(--text-muted)" }}>
                  {CATEGORIAS.find((c) => c.value === item.categoria)?.label}
                  {item.fecha && ` · ${item.fecha}`}
                  {item.roles.length > 0 && ` · ${item.roles.length} rol(es)`}
                </p>
              </div>
              <div className="flex shrink-0 gap-1">
                <button
                  onClick={() => abrirEdicion(item)}
                  className="rounded-md border p-2 transition-colors"
                  style={{ borderColor: "var(--border-color)", color: "var(--text-secondary)" }}
                  aria-label={`Editar ${item.titulo}`}
                >
                  <Pencil className="w-4 h-4" aria-hidden="true" />
                </button>
                <button
                  onClick={() => eliminar(item.id)}
                  className="rounded-md border p-2 transition-colors"
                  style={{ borderColor: "var(--border-color)", color: "var(--red-oxide)" }}
                  aria-label={`Eliminar ${item.titulo}`}
                >
                  <Trash2 className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
