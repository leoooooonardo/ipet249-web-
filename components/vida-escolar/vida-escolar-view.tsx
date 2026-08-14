import { CalendarDays, MapPin, Trophy } from "lucide-react"
import { EVENTOS_VIDA, DEPORTES, TORNEO_DEPORTES, type EventoVida } from "@/lib/data/vida-escolar"

const CATEGORIA_COLOR: Record<EventoVida["categoria"], { color: string; bg: string; label: string }> = {
  muestra: { color: "#D4A72C", bg: "rgba(212, 167, 44, 0.14)", label: "Muestra" },
  acto: { color: "#5C5C5C", bg: "rgba(92, 92, 92, 0.1)", label: "Acto" },
  recreativo: { color: "#C04F40", bg: "rgba(192, 79, 64, 0.1)", label: "Recreativo" },
  ciencia: { color: "#A13A2E", bg: "rgba(161, 58, 46, 0.1)", label: "Ciencia" },
}

export function VidaEscolarView() {
  return (
    <>
      {/* Eventos */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-white)" }}>
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
            Eventos del año
          </h2>
          <p className="text-lg mb-8 max-w-2xl leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Muestras, actos y jornadas que marcan el ritmo de la escuela. Las fechas exactas se publican en el calendario escolar.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {EVENTOS_VIDA.map((e) => {
              const info = CATEGORIA_COLOR[e.categoria]
              return (
                <article
                  key={e.id}
                  className="p-6 rounded-lg"
                  style={{ backgroundColor: "var(--surface-light)", border: "1px solid var(--border-color)" }}
                >
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span
                      className="text-[11px] font-mono uppercase px-2 py-0.5 rounded"
                      style={{ backgroundColor: info.bg, color: info.color }}
                    >
                      {info.label}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono" style={{ color: "var(--text-muted)" }}>
                      <CalendarDays className="w-3.5 h-3.5" aria-hidden="true" />
                      {e.cuando}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold leading-snug mb-2" style={{ color: "var(--text-primary)" }}>
                    {e.titulo}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {e.descripcion}
                  </p>
                  {e.ubicacion && (
                    <span className="inline-flex items-center gap-1.5 text-xs mt-3" style={{ color: "var(--text-muted)" }}>
                      <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                      {e.ubicacion}
                    </span>
                  )}
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Deportes */}
      <section id="deportes" className="section-padding" style={{ backgroundColor: "var(--bg-light)" }}>
        <div className="mx-auto max-w-6xl">
          <div
            className="flex flex-col md:flex-row md:items-center gap-4 p-6 rounded-lg mb-8"
            style={{ backgroundColor: "var(--red-oxide)", color: "#FFFFFF" }}
          >
            <Trophy className="w-10 h-10 flex-shrink-0" aria-hidden="true" />
            <div>
              <h2 className="text-2xl font-bold">{TORNEO_DEPORTES.titulo}</h2>
              <p className="mt-1 leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
                {TORNEO_DEPORTES.descripcion} Se realiza en {TORNEO_DEPORTES.cuando.toLowerCase()}.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {DEPORTES.map((d) => (
              <article
                key={d.id}
                className="p-5 rounded-lg"
                style={{ backgroundColor: "var(--bg-white)", border: "1px solid var(--border-color)" }}
              >
                <h3 className="font-bold mb-1" style={{ color: "var(--text-primary)" }}>
                  {d.nombre}
                </h3>
                <span
                  className="text-[11px] font-mono uppercase px-2 py-0.5 rounded inline-block mb-2"
                  style={{ backgroundColor: "rgba(212, 167, 44, 0.14)", color: "var(--gold-primary)" }}
                >
                  {d.categoria}
                </span>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {d.detalle}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
