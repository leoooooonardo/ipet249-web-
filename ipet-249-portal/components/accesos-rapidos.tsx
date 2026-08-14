import Link from "next/link"
import { CalendarDays, ClipboardList, FileCheck2, Clock, ArrowRight } from "lucide-react"

const ACCESOS = [
  {
    titulo: "Calendario escolar",
    descripcion: "Feriados, actos, exámenes, inscripciones y eventos en una sola vista filtrable.",
    href: "/academico/calendario",
    icon: CalendarDays,
  },
  {
    titulo: "Inscripciones",
    descripcion: "Fechas clave, requisitos y enlaces para inscribirte en el IPET 249.",
    href: "/admisiones",
    icon: ClipboardList,
  },
  {
    titulo: "Documentación",
    descripcion: "Checklist de los papeles necesarios para completar la inscripción.",
    href: "/admisiones/documentacion",
    icon: FileCheck2,
  },
  {
    titulo: "Horarios por año",
    descripcion: "Consultá el horario de tu curso, división y turno.",
    href: "/academico/horarios",
    icon: Clock,
  },
]

export function AccesosRapidos() {
  return (
    <section className="section-padding" style={{ backgroundColor: "var(--bg-white)" }}>
      <div className="mx-auto max-w-6xl">
        <div className="space-y-3 max-w-2xl mb-10">
          <p className="text-sm font-semibold font-mono" style={{ color: "var(--gold-primary)" }}>
            ACCESOS RÁPIDOS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-balance" style={{ color: "var(--text-primary)" }}>
            Lo que más se consulta
          </h2>
          <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
            Encontrá en un clic la información de uso diario para alumnos, familias y aspirantes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ACCESOS.map((a) => {
            const Icon = a.icon
            return (
              <Link
                key={a.titulo}
                href={a.href}
                className="group flex flex-col p-6 rounded-lg transition-all hover:shadow-lg"
                style={{ backgroundColor: "var(--surface-light)", borderWidth: "1px", borderColor: "var(--border-color)" }}
              >
                <div
                  className="mb-4 inline-flex w-11 h-11 items-center justify-center rounded-lg"
                  style={{ background: "rgba(212, 167, 44, 0.1)" }}
                >
                  <Icon className="w-5 h-5" style={{ color: "var(--red-oxide)" }} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: "var(--text-primary)" }}>
                  {a.titulo}
                </h3>
                <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--text-secondary)" }}>
                  {a.descripcion}
                </p>
                <span
                  className="mt-4 inline-flex items-center text-sm font-semibold"
                  style={{ color: "var(--red-oxide)" }}
                >
                  Ver más
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
