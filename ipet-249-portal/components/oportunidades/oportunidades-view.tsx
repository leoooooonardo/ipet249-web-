"use client"

import { useMemo, useState } from "react"
import { Building2, CalendarClock, ExternalLink, CalendarX2, CheckCircle2 } from "lucide-react"
import { useSeleccion } from "@/components/providers/seleccion-provider"
import {
  OPORTUNIDADES,
  TIPOS_OPORTUNIDAD,
  tipoOportunidadInfo,
  formatearCierre,
  diasRestantes,
  type TipoOportunidad,
  type Oportunidad,
} from "@/lib/data/oportunidades"

export function OportunidadesView({ tiposVisibles }: { tiposVisibles?: TipoOportunidad[] }) {
  const { visiblePara } = useSeleccion()
  const [tiposActivos, setTiposActivos] = useState<Set<TipoOportunidad>>(new Set())

  const tiposMostrar = useMemo(
    () => TIPOS_OPORTUNIDAD.filter((t) => !tiposVisibles || tiposVisibles.includes(t.value)),
    [tiposVisibles],
  )

  const toggle = (t: TipoOportunidad) => {
    setTiposActivos((prev) => {
      const next = new Set(prev)
      next.has(t) ? next.delete(t) : next.add(t)
      return next
    })
  }

  const filtradas = useMemo(() => {
    return OPORTUNIDADES.filter((o) => !tiposVisibles || tiposVisibles.includes(o.tipo))
      .filter((o) => visiblePara({ roles: o.roles, anios: o.anios }))
      .filter((o) => tiposActivos.size === 0 || tiposActivos.has(o.tipo))
      .sort((a, b) => (a.cierre ?? "9999").localeCompare(b.cierre ?? "9999"))
  }, [visiblePara, tiposActivos, tiposVisibles])

  return (
    <section className="section-padding" style={{ backgroundColor: "var(--bg-white)" }}>
      <div className="mx-auto max-w-6xl space-y-8">
        {!tiposVisibles && (
          <div>
            <p className="text-xs font-mono uppercase mb-3" style={{ color: "var(--text-muted)" }}>
              Filtrar por tipo
            </p>
            <div className="flex flex-wrap gap-2">
              {tiposMostrar.map((t) => {
                const activo = tiposActivos.has(t.value)
                return (
                  <button
                    key={t.value}
                    onClick={() => toggle(t.value)}
                    aria-pressed={activo}
                    className="text-sm font-medium px-3 py-1.5 rounded-full border transition-all"
                    style={{
                      backgroundColor: activo ? t.color : t.bg,
                      color: activo ? "#FFFFFF" : t.color,
                      borderColor: activo ? t.color : "transparent",
                    }}
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
        )}

        {filtradas.length === 0 ? (
          <div
            className="flex flex-col items-center text-center gap-3 py-16 rounded-lg"
            style={{ backgroundColor: "var(--bg-light)" }}
          >
            <CalendarX2 className="w-10 h-10" style={{ color: "var(--text-muted)" }} aria-hidden="true" />
            <p className="font-semibold" style={{ color: "var(--text-primary)" }}>
              No hay oportunidades para esta combinación
            </p>
            <p className="text-sm max-w-sm" style={{ color: "var(--text-secondary)" }}>
              Cambiá el rol o el año desde el menú superior, o quitá filtros de tipo.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-4">
            {filtradas.map((o) => (
              <OportunidadCard key={o.id} oportunidad={o} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

function OportunidadCard({ oportunidad }: { oportunidad: Oportunidad }) {
  const info = tipoOportunidadInfo(oportunidad.tipo)
  const dias = oportunidad.cierre ? diasRestantes(oportunidad.cierre) : null
  const urgente = dias !== null && dias >= 0 && dias <= 10
  const cerrado = dias !== null && dias < 0

  return (
    <article
      className="flex flex-col gap-3 p-5 rounded-lg"
      style={{ backgroundColor: "var(--surface-light)", border: "1px solid var(--border-color)" }}
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className="text-[11px] font-mono uppercase px-2 py-0.5 rounded"
          style={{ backgroundColor: info.bg, color: info.color }}
        >
          {info.label.replace(/s$/, "")}
        </span>
        {dias !== null && (
          <span
            className="text-[11px] font-mono px-2 py-0.5 rounded whitespace-nowrap"
            style={{
              backgroundColor: cerrado
                ? "rgba(154, 154, 154, 0.15)"
                : urgente
                  ? "rgba(161, 58, 46, 0.1)"
                  : "var(--bg-light)",
              color: cerrado ? "var(--text-muted)" : urgente ? "var(--red-oxide)" : "var(--text-secondary)",
            }}
          >
            {cerrado ? "Cerrada" : urgente ? `Cierra en ${dias} días` : `Abierta`}
          </span>
        )}
      </div>

      <h3 className="font-bold leading-snug" style={{ color: "var(--text-primary)" }}>
        {oportunidad.titulo}
      </h3>

      <span className="inline-flex items-center gap-1.5 text-xs" style={{ color: "var(--text-muted)" }}>
        <Building2 className="w-3.5 h-3.5" aria-hidden="true" />
        {oportunidad.organizacion}
      </span>

      <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        {oportunidad.descripcion}
      </p>

      {oportunidad.requisitos && oportunidad.requisitos.length > 0 && (
        <ul className="space-y-1">
          {oportunidad.requisitos.map((r) => (
            <li key={r} className="flex items-start gap-1.5 text-xs" style={{ color: "var(--text-secondary)" }}>
              <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: "var(--gold-primary)" }} aria-hidden="true" />
              {r}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto flex items-center justify-between gap-3 pt-2">
        {oportunidad.cierre && (
          <span className="inline-flex items-center gap-1.5 text-xs font-mono" style={{ color: "var(--text-muted)" }}>
            <CalendarClock className="w-3.5 h-3.5" aria-hidden="true" />
            {formatearCierre(oportunidad.cierre)}
          </span>
        )}
        {oportunidad.link && (
          <a
            href={oportunidad.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-semibold"
            style={{ color: "var(--gold-primary)" }}
          >
            Postular
            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  )
}
