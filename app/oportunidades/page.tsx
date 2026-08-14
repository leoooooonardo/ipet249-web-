import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { OportunidadesView } from "@/components/oportunidades/oportunidades-view"

export const metadata: Metadata = {
  title: 'Oportunidades | IPET 249 "Nicolás Copérnico"',
  description:
    "Convocatorias, becas, olimpiadas, pasantías y búsquedas laborales para la comunidad del IPET 249. Filtrá por tipo, rol y año.",
}

export default function OportunidadesPage() {
  return (
    <main>
      <PageHero
        etiqueta="OPORTUNIDADES"
        titulo="Convocatorias, becas y olimpiadas"
        descripcion="Oportunidades con plazos concretos para estudiantes y docentes: becas, olimpiadas, convocatorias, pasantías y empleo. Filtrá por tipo y ajustá el rol o el año."
        migas={[
          { label: "Inicio", href: "/" },
          { label: "Oportunidades" },
        ]}
      />
      <OportunidadesView />
    </main>
  )
}
