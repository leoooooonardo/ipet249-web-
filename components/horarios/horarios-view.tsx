"use client"

import { useEffect, useMemo, useState } from "react"
import { MapPin, UserRound, CalendarX2 } from "lucide-react"
import { useSeleccion } from "@/components/providers/seleccion-provider"
import { labelAnio } from "@/lib/data/roles"
import { HORARIOS, DIAS } from "@/lib/data/horarios"
import type { HorarioCurso } from "@/lib/types"

function nombreCurso(c: HorarioCurso) {
  return `${c.anio}° ${c.division}${c.especialidad ? ` · ${c.especialidad}` : ""}`
}

export function HorariosView() {
  const { anio } = useSeleccion()

  const cursosDisponibles = useMemo(
    () => (anio === "todos" ? HORARIOS : HORARIOS.filter((c) => c.anio === anio)),
    [anio],
  )

  const [cursoId, setCursoId] = useState<string | null>(cursosDisponibles[0]?.id ?? null)

  // Si cambia el año en el selector global, reseteamos al primer curso disponible.
  useEffect(() => {
    setCursoId(cursosDisponibles[0]?.id ?? null)
  }, [cursosDisponibles])

  const curso = cursosDisponibles.find((c) => c.id === cursoId) ?? null

  return (
    <section className="section-padding" style={{ backgroundColor: "var(--bg-white)" }}>
      <div className="mx-auto max-w-6xl space-y-8">
        <div
          className="flex flex-wrap items-center gap-2 text-sm rounded-lg px-4 py-3"
          style={{ backgroundColor: "var(--bg-light)", color: "var(--text-secondary)" }}
        >
          <span className="font-mono text-xs uppercase" style={{ color: "var(--text-muted)" }}>
            Año seleccionado
          </span>
          <span
            className="px-2 py-0.5 rounded-md font-semibold"
            style={{ backgroundColor: "rgba(212, 167, 44, 0.15)", color: "var(--gold-primary)" }}
          >
            {labelAnio(anio)}
          </span>
          <span className="text-xs">— cambialo desde el selector del menú superior.</span>
        </div>

        {cursosDisponibles.length === 0 ? (
          <EmptyState />
        ) : (
          <>
            {/* Selector de curso/división */}
            <div>
              <p className="text-xs font-mono uppercase mb-3" style={{ color: "var(--text-muted)" }}>
                Elegí el curso
              </p>
              <div className="flex flex-wrap gap-2">
                {cursosDisponibles.map((c) => {
                  const activo = c.id === cursoId
                  return (
                    <button
                      key={c.id}
                      onClick={() => setCursoId(c.id)}
                      className="text-sm font-medium px-3.5 py-2 rounded-lg border transition-all"
                      style={{
                        backgroundColor: activo ? "var(--red-oxide)" : "var(--surface-light)",
                        color: activo ? "#FFFFFF" : "var(--text-primary)",
                        borderColor: activo ? "var(--red-oxide)" : "var(--border-color)",
                      }}
                      aria-pressed={activo}
                    >
                      {nombreCurso(c)}
                    </button>
                  )
                })}
              </div>
            </div>

            {curso && <GrillaSemanal curso={curso} />}
          </>
        )}
      </div>
    </section>
  )
}

function GrillaSemanal({ curso }: { curso: HorarioCurso }) {
  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
        <h2 className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
          {nombreCurso(curso)}
        </h2>
        <span
          className="text-xs font-mono px-2 py-1 rounded"
          style={{ backgroundColor: "rgba(212,167,44,0.12)", color: "var(--gold-primary)" }}
        >
          Turno {curso.turno}
        </span>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {DIAS.map((dia) => {
          const franjas = curso.franjas
            .filter((f) => f.dia === dia)
            .sort((a, b) => a.desde.localeCompare(b.desde))
          return (
            <div
              key={dia}
              className="rounded-lg overflow-hidden"
              style={{ borderWidth: "1px", borderColor: "var(--border-color)" }}
            >
              <div
                className="px-3 py-2 text-sm font-bold text-center"
                style={{ backgroundColor: "var(--bg-light)", color: "var(--text-primary)" }}
              >
                {dia}
              </div>
              <div className="p-2 space-y-2 min-h-[4rem]">
                {franjas.length === 0 ? (
                  <p className="text-xs text-center py-4 font-mono" style={{ color: "var(--text-muted)" }}>
                    Sin clases
                  </p>
                ) : (
                  franjas.map((f, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-md"
                      style={{ backgroundColor: "var(--surface-light)" }}
                    >
                      <p className="text-[11px] font-mono mb-1" style={{ color: "var(--red-oxide)" }}>
                        {f.desde}–{f.hasta}
                      </p>
                      <p className="text-sm font-semibold leading-snug" style={{ color: "var(--text-primary)" }}>
                        {f.materia}
                      </p>
                      <div className="mt-1.5 space-y-0.5">
                        {f.profesor && (
                          <p className="inline-flex items-center gap-1 text-xs" style={{ color: "var(--text-secondary)" }}>
                            <UserRound className="w-3 h-3" aria-hidden="true" />
                            {f.profesor}
                          </p>
                        )}
                        {f.aula && (
                          <p className="inline-flex items-center gap-1 text-xs" style={{ color: "var(--text-muted)" }}>
                            <MapPin className="w-3 h-3" aria-hidden="true" />
                            Aula {f.aula}
                          </p>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function EmptyState() {
  return (
    <div
      className="flex flex-col items-center text-center gap-3 py-16 rounded-lg"
      style={{ backgroundColor: "var(--bg-light)" }}
    >
      <CalendarX2 className="w-10 h-10" style={{ color: "var(--text-muted)" }} aria-hidden="true" />
      <p className="font-semibold" style={{ color: "var(--text-primary)" }}>
        Todavía no hay horarios cargados para este año
      </p>
      <p className="text-sm max-w-sm" style={{ color: "var(--text-secondary)" }}>
        Seleccioná "Todos los años" en el menú superior o elegí otro año para ver los cursos disponibles.
      </p>
    </div>
  )
}
