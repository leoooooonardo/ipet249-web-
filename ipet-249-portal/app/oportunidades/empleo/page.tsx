import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { OportunidadesView } from "@/components/oportunidades/oportunidades-view"

export const metadata: Metadata = {
  title: 'Empleo | IPET 249 "Nicolás Copérnico"',
  description:
    "Búsquedas laborales para estudiantes avanzados y egresados del IPET 249. Oportunidades de empleo por especialidad.",
}

export default function EmpleoPage() {
  return (
    <main>
      <PageHero
        etiqueta="OPORTUNIDADES"
        titulo="Búsquedas laborales"
        descripcion="Oportunidades de empleo para estudiantes avanzados y egresados, orientadas a las cuatro especialidades técnicas. Ajustá el rol y el año desde el menú."
        migas={[
          { label: "Inicio", href: "/" },
          { label: "Oportunidades", href: "/oportunidades" },
          { label: "Empleo" },
        ]}
      />
      <OportunidadesView tiposVisibles={["empleo"]} />
    </main>
  )
}
