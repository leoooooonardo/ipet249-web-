import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { CalendarioView } from "@/components/calendario/calendario-view"

export const metadata: Metadata = {
  title: 'Calendario escolar | IPET 249 "Nicolás Copérnico"',
  description:
    "Calendario escolar unificado del IPET 249: feriados, actos, exámenes, inscripciones, eventos y fechas de PAICOR y tercera materia, filtrables por rol y año.",
}

export default function CalendarioPage() {
  return (
    <main>
      <PageHero
        etiqueta="ACADÉMICO"
        titulo="Calendario escolar"
        descripcion="Todas las fechas del ciclo lectivo en una sola vista: feriados, actos, inscripciones, exámenes, eventos y más. Filtrá por tipo y ajustá el rol o el año desde el menú."
        migas={[
          { label: "Inicio", href: "/" },
          { label: "Académico", href: "/academico" },
          { label: "Calendario" },
        ]}
      />
      <CalendarioView />
    </main>
  )
}
