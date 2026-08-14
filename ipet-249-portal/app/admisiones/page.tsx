import type { Metadata } from "next"
import Link from "next/link"
import { CalendarClock, ArrowRight, ExternalLink, FileCheck2 } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { FECHAS_CLAVE, PASOS_INSCRIPCION } from "@/lib/data/admisiones"
import { formatearRango } from "@/lib/data/calendario"

export const metadata: Metadata = {
  title: 'Inscripciones | IPET 249 "Nicolás Copérnico"',
  description:
    "Inscripciones al IPET 249: pasos, fechas clave y enlaces para inscribirte a primer año de las especialidades técnicas.",
}

export default function AdmisionesPage() {
  return (
    <main>
      <PageHero
        etiqueta="ADMISIONES"
        titulo="Inscripciones"
        descripcion="Todo lo que necesitás para sumarte al IPET 249: los pasos, las fechas clave del ciclo y la documentación requerida."
        migas={[
          { label: "Inicio", href: "/" },
          { label: "Admisiones" },
        ]}
      />

      <section className="section-padding" style={{ backgroundColor: "var(--bg-white)" }}>
        <div className="mx-auto max-w-6xl space-y-16">
          {/* Pasos */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: "var(--text-primary)" }}>
              Cómo inscribirse, paso a paso
            </h2>
            <ol className="grid md:grid-cols-2 gap-4">
              {PASOS_INSCRIPCION.map((paso) => (
                <li
                  key={paso.numero}
                  className="flex gap-4 p-6 rounded-lg"
                  style={{ backgroundColor: "var(--surface-light)", borderWidth: "1px", borderColor: "var(--border-color)" }}
                >
                  <span
                    className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-bold"
                    style={{ backgroundColor: "var(--red-oxide)", color: "#FFFFFF" }}
                    aria-hidden="true"
                  >
                    {paso.numero}
                  </span>
                  <div className="space-y-1">
                    <h3 className="font-bold" style={{ color: "var(--text-primary)" }}>
                      {paso.titulo}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      {paso.descripcion}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Fechas clave */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: "var(--text-primary)" }}>
              Fechas clave
            </h2>
            <div className="space-y-3">
              {FECHAS_CLAVE.map((f) => (
                <div
                  key={f.titulo}
                  className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 p-5 rounded-lg"
                  style={{ backgroundColor: "var(--surface-light)", borderWidth: "1px", borderColor: "var(--border-color)" }}
                >
                  <div
                    className="inline-flex items-center gap-2 text-sm font-mono font-semibold sm:w-56 flex-shrink-0"
                    style={{ color: "var(--gold-primary)" }}
                  >
                    <CalendarClock className="w-4 h-4" aria-hidden="true" />
                    {formatearRango(f.desde, f.hasta)}
                  </div>
                  <div>
                    <h3 className="font-bold" style={{ color: "var(--text-primary)" }}>
                      {f.titulo}
                    </h3>
                    <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                      {f.detalle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm" style={{ color: "var(--text-muted)" }}>
              Las fechas son orientativas y pueden ajustarse según el calendario oficial del Ministerio de Educación de
              Córdoba.
            </p>
          </div>

          {/* CTAs */}
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/admisiones/documentacion"
              className="group flex items-center justify-between gap-4 p-6 rounded-lg transition-all hover:shadow-lg"
              style={{ backgroundColor: "rgba(212, 167, 44, 0.08)", borderWidth: "2px", borderColor: "var(--gold-primary)" }}
            >
              <div className="flex items-start gap-3">
                <FileCheck2 className="w-6 h-6 flex-shrink-0" style={{ color: "var(--red-oxide)" }} aria-hidden="true" />
                <div>
                  <h3 className="font-bold" style={{ color: "var(--text-primary)" }}>
                    Ver documentación necesaria
                  </h3>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    Checklist completo de los papeles a presentar.
                  </p>
                </div>
              </div>
              <ArrowRight
                className="w-5 h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform"
                style={{ color: "var(--red-oxide)" }}
                aria-hidden="true"
              />
            </Link>

            <a
              href="https://ciudadanodigital.cba.gov.ar"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 p-6 rounded-lg transition-all hover:shadow-lg"
              style={{ backgroundColor: "var(--red-oxide)", color: "#FFFFFF" }}
            >
              <div>
                <h3 className="font-bold text-white">Preinscribirse online</h3>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.85)" }}>
                  Ingresá con Ciudadano Digital (CiDi).
                </p>
              </div>
              <ExternalLink className="w-5 h-5 flex-shrink-0 text-white" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
