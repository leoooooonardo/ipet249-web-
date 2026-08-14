"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { Mail, ChevronRight, Users } from "lucide-react"
import { useSeleccion } from "@/components/providers/seleccion-provider"
import { EQUIPO, CARGOS, iniciales, labelCargo, type CargoEquipo, type MiembroEquipo } from "@/lib/data/equipo"

export function EquipoView() {
  const { visiblePara } = useSeleccion()
  const [cargoActivo, setCargoActivo] = useState<CargoEquipo | "todos">("todos")

  const visibles = useMemo(
    () => EQUIPO.filter((m) => visiblePara({ roles: m.roles, anios: [] })),
    [visiblePara],
  )

  const filtrados = useMemo(
    () => visibles.filter((m) => cargoActivo === "todos" || m.cargo === cargoActivo),
    [visibles, cargoActivo],
  )

  return (
    <section className="section-padding" style={{ backgroundColor: "var(--bg-white)" }}>
      <div className="mx-auto max-w-6xl space-y-8">
        {/* Filtros por cargo */}
        <div className="flex flex-wrap gap-2">
          <FiltroCargo activo={cargoActivo === "todos"} onClick={() => setCargoActivo("todos")}>
            Todos ({visibles.length})
          </FiltroCargo>
          {CARGOS.map((c) => {
            const cantidad = visibles.filter((m) => m.cargo === c.value).length
            return (
              <FiltroCargo key={c.value} activo={cargoActivo === c.value} onClick={() => setCargoActivo(c.value)}>
                {c.plural} ({cantidad})
              </FiltroCargo>
            )
          })}
        </div>

        {filtrados.length === 0 ? (
          <div
            className="flex flex-col items-center text-center gap-3 py-16 rounded-lg"
            style={{ backgroundColor: "var(--bg-light)" }}
          >
            <Users className="w-10 h-10" style={{ color: "var(--text-muted)" }} aria-hidden="true" />
            <p className="font-semibold" style={{ color: "var(--text-primary)" }}>
              No hay perfiles para esta combinación
            </p>
            <p className="text-sm max-w-sm" style={{ color: "var(--text-secondary)" }}>
              Cambiá el rol desde el menú superior o elegí otro cargo.
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtrados.map((m) => (
              <MiembroCard key={m.slug} miembro={m} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

function FiltroCargo({
  activo,
  onClick,
  children,
}: {
  activo: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      onClick={onClick}
      aria-pressed={activo}
      className="text-sm font-medium px-3 py-1.5 rounded-full border transition-all"
      style={{
        backgroundColor: activo ? "var(--gold-primary)" : "var(--bg-light)",
        color: activo ? "#FFFFFF" : "var(--text-secondary)",
        borderColor: activo ? "var(--gold-primary)" : "var(--border-color)",
      }}
    >
      {children}
    </button>
  )
}

export function Avatar({ nombre, size = 56 }: { nombre: string; size?: number }) {
  return (
    <div
      className="flex items-center justify-center rounded-full font-bold flex-shrink-0"
      style={{
        width: size,
        height: size,
        backgroundColor: "rgba(212, 167, 44, 0.15)",
        color: "var(--gold-primary)",
        fontSize: size * 0.36,
        border: "1px solid var(--border-color)",
      }}
      aria-hidden="true"
    >
      {iniciales(nombre)}
    </div>
  )
}

function MiembroCard({ miembro }: { miembro: MiembroEquipo }) {
  return (
    <Link
      href={`/institucional/equipo/${miembro.slug}`}
      className="group flex flex-col gap-4 p-5 rounded-lg transition-all hover:shadow-md"
      style={{ backgroundColor: "var(--surface-light)", border: "1px solid var(--border-color)" }}
    >
      <div className="flex items-center gap-4">
        <Avatar nombre={miembro.nombre} />
        <div className="min-w-0">
          <span
            className="text-[11px] font-mono uppercase px-2 py-0.5 rounded"
            style={{ backgroundColor: "rgba(161, 58, 46, 0.1)", color: "var(--red-oxide)" }}
          >
            {labelCargo(miembro.cargo)}
          </span>
          <h3 className="font-bold mt-1.5 leading-snug" style={{ color: "var(--text-primary)" }}>
            {miembro.nombre}
          </h3>
        </div>
      </div>
      <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        {miembro.puesto}
        {miembro.especialidad && miembro.especialidad !== "General" ? ` · ${miembro.especialidad}` : ""}
      </p>
      <div className="mt-auto flex items-center justify-between pt-2">
        {miembro.email ? (
          <span className="inline-flex items-center gap-1 text-xs font-mono" style={{ color: "var(--text-muted)" }}>
            <Mail className="w-3.5 h-3.5" aria-hidden="true" />
            Contacto
          </span>
        ) : (
          <span />
        )}
        <span
          className="inline-flex items-center gap-1 text-sm font-semibold transition-transform group-hover:translate-x-0.5"
          style={{ color: "var(--gold-primary)" }}
        >
          Ver perfil
          <ChevronRight className="w-4 h-4" aria-hidden="true" />
        </span>
      </div>
    </Link>
  )
}
