import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { EquipoView } from "@/components/equipo/equipo-view"

export const metadata: Metadata = {
  title: 'Equipo | IPET 249 "Nicolás Copérnico"',
  description:
    "Directivos, preceptores y profesores del IPET 249. Conocé al equipo, sus materias, cursos y datos de contacto.",
}

export default function EquipoPage() {
  return (
    <main>
      <PageHero
        etiqueta="INSTITUCIONAL"
        titulo="Nuestro equipo"
        descripcion="Directivos, preceptores y profesores del instituto. Filtrá por cargo y abrí cada perfil para ver materias, cursos y contacto."
        migas={[
          { label: "Inicio", href: "/" },
          { label: "Institucional", href: "/institucional" },
          { label: "Equipo" },
        ]}
      />
      <EquipoView />
    </main>
  )
}
