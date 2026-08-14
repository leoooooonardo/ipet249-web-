import Link from "next/link"
import { ChevronRight } from "lucide-react"

export interface Miga {
  label: string
  href?: string
}

export function PageHero({
  titulo,
  descripcion,
  migas,
  etiqueta,
}: {
  titulo: string
  descripcion?: string
  migas: Miga[]
  etiqueta?: string
}) {
  return (
    <section
      className="border-b"
      style={{ backgroundColor: "var(--bg-light)", borderColor: "var(--border-color)" }}
    >
      <div className="mx-auto max-w-6xl px-4 md:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav aria-label="Migas de pan" className="mb-4">
          <ol className="flex flex-wrap items-center gap-1 text-xs font-mono" style={{ color: "var(--text-muted)" }}>
            {migas.map((m, i) => (
              <li key={i} className="flex items-center gap-1">
                {m.href ? (
                  <Link href={m.href} className="transition-colors" style={{ color: "var(--text-secondary)" }}>
                    {m.label}
                  </Link>
                ) : (
                  <span style={{ color: "var(--gold-primary)" }}>{m.label}</span>
                )}
                {i < migas.length - 1 && <ChevronRight className="w-3 h-3" aria-hidden="true" />}
              </li>
            ))}
          </ol>
        </nav>

        {etiqueta && (
          <p className="text-sm font-semibold font-mono mb-2" style={{ color: "var(--gold-primary)" }}>
            {etiqueta}
          </p>
        )}
        <h1
          className="text-3xl md:text-5xl font-bold leading-tight text-balance"
          style={{ color: "var(--text-primary)" }}
        >
          {titulo}
        </h1>
        {descripcion && (
          <p className="mt-4 text-lg max-w-2xl leading-relaxed text-pretty" style={{ color: "var(--text-secondary)" }}>
            {descripcion}
          </p>
        )}
      </div>
    </section>
  )
}
