import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { TutoriasView } from "@/components/academico/tutorias-view"

export const metadata: Metadata = {
  title: 'Tutorías | IPET 249 "Nicolás Copérnico"',
  description:
    "Tutorías y clases de apoyo del IPET 249: materia, profesor/a, día, horario y aula. Filtrá por rol y año.",
}

export default function TutoriasPage() {
  return (
    <main>
      <PageHero
        etiqueta="ACADÉMICO"
        titulo="Tutorías"
        descripcion="Clases de apoyo y consulta por materia. Se muestran organizadas por día; ajustá el rol y el año desde el menú para ver las que te corresponden."
        migas={[
          { label: "Inicio", href: "/" },
          { label: "Académico", href: "/academico" },
          { label: "Tutorías" },
        ]}
      />
      <TutoriasView />
    </main>
  )
}
