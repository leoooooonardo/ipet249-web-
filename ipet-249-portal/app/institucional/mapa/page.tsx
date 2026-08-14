import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { MapaView } from "@/components/institucional/mapa-view"

export const metadata: Metadata = {
  title: 'Mapa del colegio | IPET 249 "Nicolás Copérnico"',
  description:
    "Mapa indicativo del IPET 249: secretaría, dirección, aulas, laboratorios y talleres. Datos de contacto y ubicación.",
}

export default function MapaPage() {
  return (
    <main>
      <PageHero
        etiqueta="INSTITUCIONAL"
        titulo="Mapa del colegio"
        descripcion="Orientate dentro del instituto: dónde queda secretaría, dirección, las aulas, los laboratorios y los talleres de cada especialidad."
        migas={[
          { label: "Inicio", href: "/" },
          { label: "Institucional", href: "/institucional" },
          { label: "Mapa" },
        ]}
      />
      <MapaView />
    </main>
  )
}
