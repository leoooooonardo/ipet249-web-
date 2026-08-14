import type { Metadata } from "next"
import Link from "next/link"
import { Users, MapPin, GraduationCap, ArrowRight } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { Institucional } from "@/components/institucional"
import { Especialidades } from "@/components/especialidades"
import { PorqueElegirnos } from "@/components/institucional/porque-elegirnos"

export const metadata: Metadata = {
  title: 'Institucional | IPET 249 "Nicolás Copérnico"',
  description:
    "Historia, especialidades, equipo, mapa y promociones del IPET 249. Conocé por qué somos la mejor opción de formación técnica en Córdoba.",
}

const ACCESOS = [
  { href: "/institucional/equipo", titulo: "Equipo", descripcion: "Directivos, preceptores y profesores", icon: Users },
  { href: "/institucional/mapa", titulo: "Mapa del colegio", descripcion: "Sectores y ubicación", icon: MapPin },
  { href: "/institucional/promociones", titulo: "Promociones", descripcion: "Egresados por cohorte", icon: GraduationCap },
]

export default function InstitucionalPage() {
  return (
    <main>
      <PageHero
        etiqueta="INSTITUCIONAL"
        titulo="Sobre el IPET 249"
        descripcion="Más de 75 años de formación técnica en Córdoba. Conocé nuestra historia, especialidades y al equipo que hace posible cada trayectoria."
        migas={[{ label: "Inicio", href: "/" }, { label: "Institucional" }]}
      />

      {/* Accesos internos */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-white)" }}>
        <div className="mx-auto max-w-6xl grid sm:grid-cols-3 gap-4">
          {ACCESOS.map((a) => {
            const Icon = a.icon
            return (
              <Link
                key={a.href}
                href={a.href}
                className="group flex items-center gap-4 p-5 rounded-lg transition-all hover:shadow-md"
                style={{ backgroundColor: "var(--surface-light)", border: "1px solid var(--border-color)" }}
              >
                <div
                  className="flex items-center justify-center w-11 h-11 rounded-lg flex-shrink-0"
                  style={{ backgroundColor: "rgba(212, 167, 44, 0.14)", color: "var(--gold-primary)" }}
                >
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h2 className="font-bold leading-snug" style={{ color: "var(--text-primary)" }}>
                    {a.titulo}
                  </h2>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    {a.descripcion}
                  </p>
                </div>
                <ArrowRight
                  className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                  style={{ color: "var(--gold-primary)" }}
                  aria-hidden="true"
                />
              </Link>
            )
          })}
        </div>
      </section>

      <div id="historia">
        <Institucional />
      </div>
      <div id="especialidades">
        <Especialidades />
      </div>
      <PorqueElegirnos />
    </main>
  )
}
