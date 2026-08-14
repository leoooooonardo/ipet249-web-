import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { OportunidadesView } from "@/components/oportunidades/oportunidades-view"

export const metadata: Metadata = {
  title: 'Pasantías | IPET 249 "Nicolás Copérnico"',
  description:
    "Prácticas profesionalizantes y pasantías del IPET 249 en talleres y empresas de Córdoba, para estudiantes del ciclo superior.",
}

export default function PasantiasPage() {
  return (
    <main>
      <PageHero
        etiqueta="OPORTUNIDADES"
        titulo="Pasantías"
        descripcion="Prácticas profesionalizantes en talleres y empresas de la región. Una puerta al primer empleo antes de egresar. Ajustá el rol y el año desde el menú."
        migas={[
          { label: "Inicio", href: "/" },
          { label: "Oportunidades", href: "/oportunidades" },
          { label: "Pasantías" },
        ]}
      />
      <OportunidadesView tiposVisibles={["pasantia"]} />
    </main>
  )
}
