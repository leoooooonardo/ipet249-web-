import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { VidaEscolarView } from "@/components/vida-escolar/vida-escolar-view"

export const metadata: Metadata = {
  title: 'Vida escolar | IPET 249 "Nicolás Copérnico"',
  description:
    "Eventos, actos, muestras y torneo de deportes del IPET 249: Expo IPET, Recrearte, Feria de Ciencias y más.",
}

export default function VidaEscolarPage() {
  return (
    <main>
      <PageHero
        etiqueta="VIDA ESCOLAR"
        titulo="Vida escolar y deportes"
        descripcion="Todo lo que pasa más allá del aula: muestras, actos, jornadas recreativas y el torneo interno de deportes que integra a toda la comunidad."
        migas={[{ label: "Inicio", href: "/" }, { label: "Vida escolar" }]}
      />
      <VidaEscolarView />
    </main>
  )
}
