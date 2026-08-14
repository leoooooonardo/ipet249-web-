import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { PromocionesView } from "@/components/institucional/promociones-view"

export const metadata: Metadata = {
  title: 'Promociones | IPET 249 "Nicolás Copérnico"',
  description:
    "Egresados del IPET 249 por cohorte y especialidad. Conocé las promociones de los últimos años.",
}

export default function PromocionesPage() {
  return (
    <main>
      <PageHero
        etiqueta="INSTITUCIONAL"
        titulo="Promociones"
        descripcion="Nuestros egresados por cohorte y especialidad. Cada promoción deja su huella en la historia del IPET 249."
        migas={[
          { label: "Inicio", href: "/" },
          { label: "Institucional", href: "/institucional" },
          { label: "Promociones" },
        ]}
      />
      <PromocionesView />
    </main>
  )
}
