import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { HorariosView } from "@/components/horarios/horarios-view"

export const metadata: Metadata = {
  title: 'Horarios por año | IPET 249 "Nicolás Copérnico"',
  description:
    "Consultá los horarios de clase por año, división y especialidad en el IPET 249. Grilla semanal con materias, profesores y aulas.",
}

export default function HorariosPage() {
  return (
    <main>
      <PageHero
        etiqueta="ACADÉMICO"
        titulo="Horarios por año"
        descripcion="Elegí tu año desde el menú superior y luego tu curso o división para ver la grilla semanal con materias, profesores y aulas."
        migas={[
          { label: "Inicio", href: "/" },
          { label: "Académico", href: "/academico" },
          { label: "Horarios" },
        ]}
      />
      <HorariosView />
    </main>
  )
}
