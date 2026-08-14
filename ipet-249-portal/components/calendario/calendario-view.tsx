"use client"

import { useMemo, useState } from "react"
import { MapPin, KeyRound, CalendarX2 } from "lucide-react"
import { useSeleccion } from "@/components/providers/seleccion-provider"
import { labelRol, labelAnio } from "@/lib/data/roles"
import {
  EVENTOS,
  TIPOS_EVENTO,
  tipoInfo,
  formatearRango,
  nombreMes,
} from "@/lib/data/calendario"
import type { TipoEvento, EventoCalendario } from "@/lib/types"

export function CalendarioView() {
  const { rol, anio, visiblePara } = useSeleccion()
  const [tiposActivos, setTiposActivos] = useState<Set<TipoEvento>>(new Set())

  const toggleTipo = (t: TipoEvento) => {
    setTiposActivos((prev) => {
      const next = new Set(prev)
      next.has(t) ? next.delete(t) : next.add(t)
      return next
    })
  }

  const eventosFiltrados = useMemo(() => {
    return EVENTOS.filter((e) => visiblePara(e))
      .filter((e) => tiposActivos.size === 0 || tiposActivos.has(e.tipo))
      .sort((a, b) => a.fecha.localeCompare(b.fecha))
  }, [visiblePara, tiposActivos])

  // Agrupar por mes-año conservando orden cronológico
  const porMes = useMemo(() => {
    const grupos: { clave: string; etiqueta: string; eventos: EventoCalendario[] }[] = []
    for (const ev of eventosFiltrados) {
      const [y, m] = ev.fecha.split("-")
      const clave = `${y}-${m}`
      const etiqueta = `${nombreMes(ev.fecha)} ${y}`
      let grupo = grupos.find((g) => g.clave === clave)
      if (!grupo) {
        grupo = { clave, etiqueta, eventos: [] }
        grupos.push(grupo)
      }
      grupo.eventos.push(ev)
    }
    return grupos
  }, [eventosFiltrados])

  return (
    <section className="section-padding" style={{ backgroundColor: "var(--bg-white)" }}>
      <div className="mx-auto max-w-6xl space-y-8">
        {/* Contexto de selección */}
        <div
          className="flex flex-wrap items-center gap-2 text-sm rounded-lg px-4 py-3"
          style={{ backgroundColor: "var(--bg-light)", color: "var(--text-secondary)" }}
        >
          <span className="font-mono text-xs uppercase" style={{ color: "var(--text-muted)" }}>
            Mostrando para
          </span>
          <span
            className="px-2 py-0.5 rounded-md font-semibold"
            style={{ backgroundColor: "rgba(212, 167, 44, 0.15)", color: "var(--gold-primary)" }}
          >
            {labelRol(rol)}
          </span>
          <span
            className="px-2 py-0.5 rounded-md font-semibold"
            style={{ backgroundColor: "rgba(161, 58, 46, 0.1)", color: "var(--red-oxide)" }}
          >
            {labelAnio(anio)}
          </span>
          <span className="text-xs">— cambialo desde el selector del menú superior.</span>
        </div>

        {/* Filtros por tipo */}
        <div>
          <p className="text-xs font-mono uppercase mb-3" style={{ color: "var(--text-muted)" }}>
            Filtrar por tipo
          </p>
          <div className="flex flex-wrap gap-2">
            {TIPOS_EVENTO.map((t) => {
              const activo = tiposActivos.has(t.value)
              return (
                <button
                  key={t.value}
                  onClick={() => toggleTipo(t.value)}
                  className="text-sm font-medium px-3 py-1.5 rounded-full border transition-all"
                  style={{
                    backgroundColor: activo ? t.color : t.bg,
                    color: activo ? "#FFFFFF" : t.color,
                    borderColor: activo ? t.color : "transparent",
                  }}
                  aria-pressed={activo}
                >
                  {t.label}
                </button>
              )
            })}
            {tiposActivos.size > 0 && (
              <button
                onClick={() => setTiposActivos(new Set())}
                className="text-sm font-medium px-3 py-1.5 rounded-full underline"
                style={{ color: "var(--text-secondary)" }}
              >
                Limpiar
              </button>
            )}
          </div>
        </div>

        {/* Listado agrupado por mes */}
        {porMes.length === 0 ? (
          <div
            className="flex flex-col items-center text-center gap-3 py-16 rounded-lg"
            style={{ backgroundColor: "var(--bg-light)" }}
          >
            <CalendarX2 className="w-10 h-10" style={{ color: "var(--text-muted)" }} aria-hidden="true" />
            <p className="font-semibold" style={{ color: "var(--text-primary)" }}>
              No hay fechas para esta combinación
            </p>
            <p className="text-sm max-w-sm" style={{ color: "var(--text-secondary)" }}>
              Probá cambiar el rol, el año o quitar filtros de tipo para ver más eventos.
            </p>
          </div>
        ) : (
          <div className="space-y-10">
            {porMes.map((grupo) => (
              <div key={grupo.clave}>
                <h2
                  className="text-sm font-mono uppercase tracking-wide mb-4 pb-2 border-b"
                  style={{ color: "var(--gold-primary)", borderColor: "var(--border-color)" }}
                >
                  {grupo.etiqueta}
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {grupo.eventos.map((ev) => (
                    <EventoCard key={ev.id} evento={ev} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

function EventoCard({ evento }: { evento: EventoCalendario }) {
  const info = tipoInfo(evento.tipo)
  return (
    <article
      className="flex gap-4 p-5 rounded-lg"
      style={{ backgroundColor: "var(--surface-light)", borderWidth: "1px", borderColor: "var(--border-color)" }}
    >
      {/* Marcador de color por tipo */}
      <div className="w-1 rounded-full flex-shrink-0" style={{ backgroundColor: info.color }} aria-hidden="true" />
      <div className="flex-1 space-y-2">
        <div className="flex items-start justify-between gap-3">
          <span
            className="text-[11px] font-mono uppercase px-2 py-0.5 rounded"
            style={{ backgroundColor: info.bg, color: info.color }}
          >
            {info.label}
          </span>
          <span className="text-xs font-mono text-right" style={{ color: "var(--text-secondary)" }}>
            {formatearRango(evento.fecha, evento.fechaFin)}
          </span>
        </div>
        <h3 className="font-bold leading-snug" style={{ color: "var(--text-primary)" }}>
          {evento.titulo}
        </h3>
        {evento.descripcion && (
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            {evento.descripcion}
          </p>
        )}
        <div className="flex flex-wrap gap-x-4 gap-y-1 pt-1">
          {evento.ubicacion && (
            <span className="inline-flex items-center gap-1 text-xs" style={{ color: "var(--text-muted)" }}>
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              {evento.ubicacion}
            </span>
          )}
          {evento.codigoClassroom && (
            <span className="inline-flex items-center gap-1 text-xs font-mono" style={{ color: "var(--red-oxide)" }}>
              <KeyRound className="w-3.5 h-3.5" aria-hidden="true" />
              {evento.codigoClassroom}
            </span>
          )}
        </div>
      </div>
    </article>
  )
}
