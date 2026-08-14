import Link from "next/link"
import { Mail, Clock, BookOpen, GraduationCap, ArrowLeft } from "lucide-react"
import { Avatar } from "@/components/equipo/equipo-view"
import { labelCargo, type MiembroEquipo } from "@/lib/data/equipo"

export function PerfilView({ miembro }: { miembro: MiembroEquipo }) {
  return (
    <section className="section-padding" style={{ backgroundColor: "var(--bg-white)" }}>
      <div className="mx-auto max-w-4xl">
        <Link
          href="/institucional/equipo"
          className="inline-flex items-center gap-1.5 text-sm font-mono mb-8"
          style={{ color: "var(--text-secondary)" }}
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Volver al equipo
        </Link>

        <div className="flex flex-col sm:flex-row items-start gap-6">
          <Avatar nombre={miembro.nombre} size={96} />
          <div className="space-y-2">
            <span
              className="text-[11px] font-mono uppercase px-2 py-0.5 rounded"
              style={{ backgroundColor: "rgba(161, 58, 46, 0.1)", color: "var(--red-oxide)" }}
            >
              {labelCargo(miembro.cargo)}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--text-primary)" }}>
              {miembro.nombre}
            </h1>
            <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
              {miembro.puesto}
              {miembro.especialidad && miembro.especialidad !== "General" ? ` · ${miembro.especialidad}` : ""}
            </p>
          </div>
        </div>

        {miembro.bio && (
          <p className="mt-8 text-lg leading-relaxed text-pretty" style={{ color: "var(--text-secondary)" }}>
            {miembro.bio}
          </p>
        )}

        <div className="mt-10 grid sm:grid-cols-2 gap-4">
          {miembro.email && (
            <InfoBox icon={<Mail className="w-5 h-5" aria-hidden="true" />} titulo="Correo institucional">
              <a href={`mailto:${miembro.email}`} className="font-mono text-sm break-all">
                {miembro.email}
              </a>
            </InfoBox>
          )}
          {miembro.horarioAtencion && (
            <InfoBox icon={<Clock className="w-5 h-5" aria-hidden="true" />} titulo="Horario de atención">
              <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                {miembro.horarioAtencion}
              </span>
            </InfoBox>
          )}
          {miembro.materias && miembro.materias.length > 0 && (
            <InfoBox icon={<BookOpen className="w-5 h-5" aria-hidden="true" />} titulo="Materias">
              <div className="flex flex-wrap gap-1.5">
                {miembro.materias.map((mat) => (
                  <span
                    key={mat}
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: "var(--bg-light)", color: "var(--text-secondary)" }}
                  >
                    {mat}
                  </span>
                ))}
              </div>
            </InfoBox>
          )}
          {miembro.cursos && miembro.cursos.length > 0 && (
            <InfoBox icon={<GraduationCap className="w-5 h-5" aria-hidden="true" />} titulo="Cursos a cargo">
              <div className="flex flex-wrap gap-1.5">
                {miembro.cursos.map((curso) => (
                  <span
                    key={curso}
                    className="text-xs px-2 py-0.5 rounded-full font-mono"
                    style={{ backgroundColor: "rgba(212, 167, 44, 0.14)", color: "var(--gold-primary)" }}
                  >
                    {curso}
                  </span>
                ))}
              </div>
            </InfoBox>
          )}
        </div>
      </div>
    </section>
  )
}

function InfoBox({
  icon,
  titulo,
  children,
}: {
  icon: React.ReactNode
  titulo: string
  children: React.ReactNode
}) {
  return (
    <div className="p-5 rounded-lg" style={{ backgroundColor: "var(--surface-light)", border: "1px solid var(--border-color)" }}>
      <div className="flex items-center gap-2 mb-2" style={{ color: "var(--gold-primary)" }}>
        {icon}
        <span className="text-xs font-mono uppercase tracking-wide">{titulo}</span>
      </div>
      {children}
    </div>
  )
}
