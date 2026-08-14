import { GraduationCap, Star } from "lucide-react"
import { PROMOCIONES, type Promocion } from "@/lib/data/institucional"

export function PromocionesView() {
  // Agrupar por año (cohorte) en orden descendente.
  const anios = Array.from(new Set(PROMOCIONES.map((p) => p.anio))).sort((a, b) => b - a)

  return (
    <section className="section-padding" style={{ backgroundColor: "var(--bg-white)" }}>
      <div className="mx-auto max-w-6xl space-y-12">
        {anios.map((anio) => {
          const grupo = PROMOCIONES.filter((p) => p.anio === anio)
          const total = grupo.reduce((acc, p) => acc + p.cantidad, 0)
          return (
            <div key={anio}>
              <div className="flex items-baseline justify-between mb-4 pb-2 border-b" style={{ borderColor: "var(--border-color)" }}>
                <h2 className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
                  Promoción {anio}
                </h2>
                <span className="text-sm font-mono" style={{ color: "var(--text-muted)" }}>
                  {total} egresados/as
                </span>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {grupo.map((p) => (
                  <PromoCard key={`${p.anio}-${p.especialidad}`} promo={p} />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

function PromoCard({ promo }: { promo: Promocion }) {
  return (
    <article
      className="flex gap-4 p-5 rounded-lg"
      style={{ backgroundColor: "var(--surface-light)", border: "1px solid var(--border-color)" }}
    >
      <div
        className="flex items-center justify-center w-12 h-12 rounded-lg flex-shrink-0"
        style={{ backgroundColor: "rgba(212, 167, 44, 0.14)", color: "var(--gold-primary)" }}
      >
        <GraduationCap className="w-6 h-6" aria-hidden="true" />
      </div>
      <div className="flex-1">
        <h3 className="font-bold leading-snug" style={{ color: "var(--text-primary)" }}>
          {promo.especialidad}
        </h3>
        <p className="text-sm mt-0.5" style={{ color: "var(--text-secondary)" }}>
          {promo.cantidad} egresados/as
        </p>
        {promo.destacado && (
          <p className="inline-flex items-start gap-1.5 text-sm mt-2" style={{ color: "var(--red-oxide)" }}>
            <Star className="w-4 h-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
            {promo.destacado}
          </p>
        )}
      </div>
    </article>
  )
}
