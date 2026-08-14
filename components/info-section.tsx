import type { BloqueInfo, DatoDestacado } from "@/lib/data/comunidad"

export function InfoSection({
  intro,
  bloques,
  datos,
}: {
  intro: string
  bloques: BloqueInfo[]
  datos: DatoDestacado[]
}) {
  return (
    <section className="section-padding" style={{ backgroundColor: "var(--bg-white)" }}>
      <div className="mx-auto max-w-4xl">
        <p className="text-lg leading-relaxed text-pretty" style={{ color: "var(--text-secondary)" }}>
          {intro}
        </p>

        {/* Datos destacados */}
        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          {datos.map((d) => (
            <div
              key={d.etiqueta}
              className="p-4 rounded-lg"
              style={{ backgroundColor: "var(--bg-light)", border: "1px solid var(--border-color)" }}
            >
              <p className="text-xs font-mono uppercase tracking-wide mb-1" style={{ color: "var(--gold-primary)" }}>
                {d.etiqueta}
              </p>
              <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                {d.valor}
              </p>
            </div>
          ))}
        </div>

        {/* Bloques de contenido */}
        <div className="mt-10 space-y-8">
          {bloques.map((b) => (
            <div key={b.titulo}>
              <h2
                className="text-sm font-mono uppercase tracking-wide mb-3 pb-2 border-b"
                style={{ color: "var(--gold-primary)", borderColor: "var(--border-color)" }}
              >
                {b.titulo}
              </h2>
              <div className="space-y-3">
                {b.parrafos.map((p, i) => (
                  <p key={i} className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
