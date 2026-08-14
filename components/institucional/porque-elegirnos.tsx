import Link from "next/link"
import { Award, Wrench, Users, Briefcase, Cpu, Heart, ArrowRight } from "lucide-react"
import { MOTIVOS_ELEGIR, type MotivoElegir } from "@/lib/data/institucional"

const ICONOS = {
  award: Award,
  wrench: Wrench,
  users: Users,
  briefcase: Briefcase,
  cpu: Cpu,
  heart: Heart,
}

export function PorqueElegirnos({ conCta = true }: { conCta?: boolean }) {
  return (
    <section className="section-padding" style={{ backgroundColor: "var(--bg-light)" }}>
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold font-mono mb-2" style={{ color: "var(--gold-primary)" }}>
            POR QUÉ ELEGIRNOS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-balance" style={{ color: "var(--text-primary)" }}>
            Un colegio pensado para el futuro de tu hijo/a
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-pretty" style={{ color: "var(--text-secondary)" }}>
            Formación técnica con salida laboral, acompañamiento humano y una comunidad que sostiene cada trayectoria.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {MOTIVOS_ELEGIR.map((m) => (
            <MotivoCard key={m.id} motivo={m} />
          ))}
        </div>

        {conCta && (
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/admisiones"
              className="inline-flex items-center gap-2 font-semibold px-5 py-3 rounded-lg transition-colors"
              style={{ backgroundColor: "var(--red-oxide)", color: "#FFFFFF" }}
            >
              Quiero inscribirme
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link
              href="/institucional/equipo"
              className="inline-flex items-center gap-2 font-semibold px-5 py-3 rounded-lg transition-colors"
              style={{ backgroundColor: "var(--bg-white)", color: "var(--text-primary)", border: "1px solid var(--border-color)" }}
            >
              Conocer al equipo
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

function MotivoCard({ motivo }: { motivo: MotivoElegir }) {
  const Icono = ICONOS[motivo.icono]
  return (
    <article
      className="p-6 rounded-lg"
      style={{ backgroundColor: "var(--bg-white)", border: "1px solid var(--border-color)" }}
    >
      <div
        className="flex items-center justify-center w-11 h-11 rounded-lg mb-4"
        style={{ backgroundColor: "rgba(212, 167, 44, 0.14)", color: "var(--gold-primary)" }}
      >
        <Icono className="w-5 h-5" aria-hidden="true" />
      </div>
      <h3 className="font-bold leading-snug mb-2" style={{ color: "var(--text-primary)" }}>
        {motivo.titulo}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        {motivo.descripcion}
      </p>
    </article>
  )
}
