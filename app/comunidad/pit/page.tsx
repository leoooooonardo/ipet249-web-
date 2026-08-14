import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { InfoSection } from "@/components/info-section"
import { PIT } from "@/lib/data/comunidad"

export const metadata: Metadata = {
  title: 'PIT — Programa de Inclusión y Terminalidad | IPET 249 "Nicolás Copérnico"',
  description:
    "El PIT del IPET 249 ofrece a jóvenes de 14 a 17 años una trayectoria acompañada para terminar el secundario.",
}

export default function PitPage() {
  return (
    <main>
      <PageHero
        etiqueta="COMUNIDAD"
        titulo="PIT — Programa de Inclusión y Terminalidad"
        descripcion="Una propuesta flexible y acompañada para que jóvenes de 14 a 17 años completen su educación secundaria."
        migas={[
          { label: "Inicio", href: "/" },
          { label: "Comunidad", href: "/comunidad" },
          { label: "PIT" },
        ]}
      />
      <InfoSection intro={PIT.intro} bloques={PIT.bloques} datos={PIT.datos} />
    </main>
  )
}
