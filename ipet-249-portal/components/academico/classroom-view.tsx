"use client"

import { useMemo, useState } from "react"
import { KeyRound, Copy, Check, CalendarClock, CalendarX2 } from "lucide-react"
import { useSeleccion } from "@/components/providers/seleccion-provider"
import { labelRol, labelAnio } from "@/lib/data/roles"
import { CLASSROOMS, formatearFechaCorta, type CursoClassroom } from "@/lib/data/classroom"

export function ClassroomView() {
  const { rol, anio, visiblePara } = useSeleccion()

  const filtrados = useMemo(
    () =>
      CLASSROOMS.filter((c) => visiblePara({ roles: c.roles, anios: c.anios })).sort((a, b) => {
        const fa = a.proximoExamen?.fecha ?? "9999"
        const fb = b.proximoExamen?.fecha ?? "9999"
        return fa.localeCompare(fb)
      }),
    [visiblePara],
  )

  return (
    <section className="section-padding" style={{ backgroundColor: "var(--bg-white)" }}>
      <div className="mx-auto max-w-6xl space-y-8">
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
          <span className="text-xs">— los códigos habilitan el ingreso a las mesas de examen.</span>
        </div>

        {filtrados.length === 0 ? (
          <div
            className="flex flex-col items-center text-center gap-3 py-16 rounded-lg"
            style={{ backgroundColor: "var(--bg-light)" }}
          >
            <CalendarX2 className="w-10 h-10" style={{ color: "var(--text-muted)" }} aria-hidden="true" />
            <p className="font-semibold" style={{ color: "var(--text-primary)" }}>
              No hay clases para esta combinación
            </p>
            <p className="text-sm max-w-sm" style={{ color: "var(--text-secondary)" }}>
              Cambiá el rol o el año desde el menú superior para ver los códigos disponibles.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-4">
            {filtrados.map((c) => (
              <ClassroomCard key={c.id} curso={c} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

function ClassroomCard({ curso }: { curso: CursoClassroom }) {
  const [copiado, setCopiado] = useState(false)

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(curso.codigo)
      setCopiado(true)
      setTimeout(() => setCopiado(false), 1800)
    } catch {
      // Silencioso: el usuario puede copiar manualmente.
    }
  }

  return (
    <article
      className="p-5 rounded-lg space-y-4"
      style={{ backgroundColor: "var(--surface-light)", border: "1px solid var(--border-color)" }}
    >
      <div>
        {curso.especialidad && (
          <span
            className="text-[11px] font-mono uppercase px-2 py-0.5 rounded"
            style={{ backgroundColor: "rgba(161, 58, 46, 0.1)", color: "var(--red-oxide)" }}
          >
            {curso.especialidad}
          </span>
        )}
        <h3 className="font-bold mt-1.5 leading-snug" style={{ color: "var(--text-primary)" }}>
          {curso.materia}
        </h3>
        <p className="text-sm mt-0.5" style={{ color: "var(--text-secondary)" }}>
          Prof. {curso.profesor}
        </p>
      </div>

      {curso.proximoExamen && (
        <div
          className="flex items-center gap-2 text-sm rounded-md px-3 py-2"
          style={{ backgroundColor: "var(--bg-light)", color: "var(--text-secondary)" }}
        >
          <CalendarClock className="w-4 h-4 flex-shrink-0" style={{ color: "var(--red-oxide)" }} aria-hidden="true" />
          <span>
            <span className="font-semibold" style={{ color: "var(--text-primary)" }}>
              {curso.proximoExamen.titulo}
            </span>
            {" — "}
            {formatearFechaCorta(curso.proximoExamen.fecha)} ({curso.proximoExamen.modalidad})
          </span>
        </div>
      )}

      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-2 font-mono text-sm" style={{ color: "var(--text-primary)" }}>
          <KeyRound className="w-4 h-4" style={{ color: "var(--gold-primary)" }} aria-hidden="true" />
          {curso.codigo}
        </span>
        <button
          onClick={copiar}
          className="inline-flex items-center gap-1.5 text-sm font-semibold px-3 py-1.5 rounded-md transition-colors"
          style={{
            backgroundColor: copiado ? "rgba(212, 167, 44, 0.14)" : "var(--bg-light)",
            color: copiado ? "var(--gold-primary)" : "var(--text-secondary)",
            border: "1px solid var(--border-color)",
          }}
          aria-label={`Copiar código ${curso.codigo}`}
        >
          {copiado ? <Check className="w-4 h-4" aria-hidden="true" /> : <Copy className="w-4 h-4" aria-hidden="true" />}
          {copiado ? "Copiado" : "Copiar"}
        </button>
      </div>
    </article>
  )
}
