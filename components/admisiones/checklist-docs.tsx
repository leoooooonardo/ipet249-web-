"use client"

import { useMemo, useState } from "react"
import { Check, Printer, RotateCcw } from "lucide-react"
import { DOCUMENTACION } from "@/lib/data/admisiones"

export function ChecklistDocs() {
  const [marcados, setMarcados] = useState<Set<string>>(new Set())

  const toggle = (id: string) =>
    setMarcados((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })

  const obligatorios = useMemo(() => DOCUMENTACION.filter((d) => d.obligatorio), [])
  const completados = obligatorios.filter((d) => marcados.has(d.id)).length
  const progreso = Math.round((completados / obligatorios.length) * 100)

  return (
    <section className="section-padding" style={{ backgroundColor: "var(--bg-white)" }}>
      <div className="mx-auto max-w-3xl space-y-8">
        {/* Barra de progreso + acciones */}
        <div
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-lg print:hidden"
          style={{ backgroundColor: "var(--bg-light)" }}
        >
          <div className="flex-1">
            <p className="text-sm font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
              Documentación obligatoria: {completados} de {obligatorios.length}
            </p>
            <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: "var(--border-color)" }}>
              <div
                className="h-full rounded-full transition-all"
                style={{ width: `${progreso}%`, backgroundColor: "var(--gold-primary)" }}
              />
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setMarcados(new Set())}
              className="inline-flex items-center gap-1.5 text-sm font-medium px-3 py-2 rounded-md border"
              style={{ borderColor: "var(--border-color)", color: "var(--text-secondary)" }}
            >
              <RotateCcw className="w-4 h-4" aria-hidden="true" />
              Reiniciar
            </button>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-md"
              style={{ backgroundColor: "var(--red-oxide)", color: "#FFFFFF" }}
            >
              <Printer className="w-4 h-4" aria-hidden="true" />
              Imprimir / descargar
            </button>
          </div>
        </div>

        {/* Lista */}
        <ul className="space-y-2">
          {DOCUMENTACION.map((doc) => {
            const activo = marcados.has(doc.id)
            return (
              <li key={doc.id}>
                <button
                  onClick={() => toggle(doc.id)}
                  className="w-full flex items-start gap-4 p-4 rounded-lg text-left transition-all"
                  style={{
                    backgroundColor: activo ? "rgba(212, 167, 44, 0.08)" : "var(--surface-light)",
                    borderWidth: "1px",
                    borderColor: activo ? "var(--gold-primary)" : "var(--border-color)",
                  }}
                  aria-pressed={activo}
                >
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-md flex items-center justify-center border mt-0.5"
                    style={{
                      backgroundColor: activo ? "var(--gold-primary)" : "transparent",
                      borderColor: activo ? "var(--gold-primary)" : "var(--text-muted)",
                    }}
                    aria-hidden="true"
                  >
                    {activo && <Check className="w-4 h-4" style={{ color: "#FFFFFF" }} />}
                  </span>
                  <span className="flex-1">
                    <span className="flex items-center gap-2 flex-wrap">
                      <span className="font-bold" style={{ color: "var(--text-primary)" }}>
                        {doc.titulo}
                      </span>
                      {!doc.obligatorio && (
                        <span
                          className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded"
                          style={{ backgroundColor: "rgba(92,92,92,0.1)", color: "var(--text-secondary)" }}
                        >
                          opcional
                        </span>
                      )}
                    </span>
                    <span className="block text-sm mt-0.5" style={{ color: "var(--text-secondary)" }}>
                      {doc.detalle}
                    </span>
                  </span>
                </button>
              </li>
            )
          })}
        </ul>

        <p className="text-sm" style={{ color: "var(--text-muted)" }}>
          Presentá los originales junto con una copia de cada documento. Ante cualquier duda, consultá en secretaría
          antes de asistir.
        </p>
      </div>
    </section>
  )
}
