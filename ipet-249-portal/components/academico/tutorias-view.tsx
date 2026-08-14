"use client"

import { useMemo } from "react"
import Link from "next/link"
import { Clock, MapPin, Video, CalendarX2, User } from "lucide-react"
import { useSeleccion } from "@/components/providers/seleccion-provider"
import { labelRol, labelAnio } from "@/lib/data/roles"
import { TUTORIAS, DIAS_SEMANA, type Tutoria } from "@/lib/data/tutorias"

export function TutoriasView() {
  const { rol, anio, visiblePara } = useSeleccion()

  const filtradas = useMemo(
    () => TUTORIAS.filter((t) => visiblePara({ roles: t.roles, anios: t.anios })),
    [visiblePara],
  )

  const porDia = useMemo(() => {
    return DIAS_SEMANA.map((dia) => ({
      dia,
      tutorias: filtradas
        .filter((t) => t.dia === dia)
        .sort((a, b) => a.desde.localeCompare(b.desde)),
    })).filter((g) => g.tutorias.length > 0)
  }, [filtradas])

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
          <span className="text-xs">— cambialo desde el selector del menú superior.</span>
        </div>

        {porDia.length === 0 ? (
          <div
            className="flex flex-col items-center text-center gap-3 py-16 rounded-lg"
            style={{ backgroundColor: "var(--bg-light)" }}
          >
            <CalendarX2 className="w-10 h-10" style={{ color: "var(--text-muted)" }} aria-hidden="true" />
            <p className="font-semibold" style={{ color: "var(--text-primary)" }}>
              No hay tutorías para esta combinación
            </p>
            <p className="text-sm max-w-sm" style={{ color: "var(--text-secondary)" }}>
              Probá cambiar el rol o el año desde el menú superior.
            </p>
          </div>
        ) : (
          <div className="space-y-10">
            {porDia.map((grupo) => (
              <div key={grupo.dia}>
                <h2
                  className="text-sm font-mono uppercase tracking-wide mb-4 pb-2 border-b"
                  style={{ color: "var(--gold-primary)", borderColor: "var(--border-color)" }}
                >
                  {grupo.dia}
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {grupo.tutorias.map((t) => (
                    <TutoriaCard key={t.id} tutoria={t} />
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

function TutoriaCard({ tutoria }: { tutoria: Tutoria }) {
  const virtual = tutoria.modalidad === "Virtual"
  return (
    <article
      className="p-5 rounded-lg space-y-3"
      style={{ backgroundColor: "var(--surface-light)", border: "1px solid var(--border-color)" }}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-bold leading-snug" style={{ color: "var(--text-primary)" }}>
          {tutoria.materia}
        </h3>
        <span
          className="text-[11px] font-mono uppercase px-2 py-0.5 rounded whitespace-nowrap"
          style={{
            backgroundColor: virtual ? "rgba(192, 79, 64, 0.1)" : "rgba(212, 167, 44, 0.14)",
            color: virtual ? "var(--red-bright)" : "var(--gold-primary)",
          }}
        >
          {tutoria.modalidad}
        </span>
      </div>

      <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-sm" style={{ color: "var(--text-secondary)" }}>
        <span className="inline-flex items-center gap-1.5">
          <Clock className="w-4 h-4" aria-hidden="true" />
          {tutoria.desde} a {tutoria.hasta}
        </span>
        <span className="inline-flex items-center gap-1.5">
          {virtual ? <Video className="w-4 h-4" aria-hidden="true" /> : <MapPin className="w-4 h-4" aria-hidden="true" />}
          {tutoria.aula}
        </span>
      </div>

      <div className="pt-1">
        {tutoria.profesorSlug ? (
          <Link
            href={`/institucional/equipo/${tutoria.profesorSlug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold"
            style={{ color: "var(--gold-primary)" }}
          >
            <User className="w-4 h-4" aria-hidden="true" />
            {tutoria.profesor}
          </Link>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-sm" style={{ color: "var(--text-muted)" }}>
            <User className="w-4 h-4" aria-hidden="true" />
            {tutoria.profesor}
          </span>
        )}
      </div>
    </article>
  )
}
