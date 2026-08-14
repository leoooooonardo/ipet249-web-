import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { InfoSection } from "@/components/info-section"
import { COOPERADORA } from "@/lib/data/comunidad"

export const metadata: Metadata = {
  title: 'Cooperadora | IPET 249 "Nicolás Copérnico"',
  description:
    "Asociación Cooperadora del IPET 249: qué hace, cómo colaborar y datos de contacto.",
}

export default function CooperadoraPage() {
  return (
    <main>
      <PageHero
        etiqueta="COMUNIDAD"
        titulo="Cooperadora"
        descripcion="La Asociación Cooperadora acompaña a la escuela con recursos y mejoras para las cuatro especialidades."
        migas={[
          { label: "Inicio", href: "/" },
          { label: "Comunidad", href: "/comunidad" },
          { label: "Cooperadora" },
        ]}
      />
      <InfoSection intro={COOPERADORA.intro} bloques={COOPERADORA.bloques} datos={COOPERADORA.datos} />
    </main>
  )
}
