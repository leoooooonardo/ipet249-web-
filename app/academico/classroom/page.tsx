import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { ClassroomView } from "@/components/academico/classroom-view"

export const metadata: Metadata = {
  title: 'Classroom y exámenes | IPET 249 "Nicolás Copérnico"',
  description:
    "Códigos de Google Classroom y fechas de mesas de examen del IPET 249, filtrables por rol y año.",
}

export default function ClassroomPage() {
  return (
    <main>
      <PageHero
        etiqueta="ACADÉMICO"
        titulo="Classroom y exámenes"
        descripcion="Códigos de las aulas virtuales y fechas de las mesas de examen. Copiá el código para unirte a la clase de tu materia."
        migas={[
          { label: "Inicio", href: "/" },
          { label: "Académico", href: "/academico" },
          { label: "Classroom / exámenes" },
        ]}
      />
      <ClassroomView />
    </main>
  )
}
