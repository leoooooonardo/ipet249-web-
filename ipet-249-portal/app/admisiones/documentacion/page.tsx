import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { ChecklistDocs } from "@/components/admisiones/checklist-docs"

export const metadata: Metadata = {
  title: 'Documentación para inscripción | IPET 249 "Nicolás Copérnico"',
  description:
    "Checklist de la documentación necesaria para inscribirse en el IPET 249. Marcá lo que ya tenés listo e imprimí la lista.",
}

export default function DocumentacionPage() {
  return (
    <main>
      <PageHero
        etiqueta="ADMISIONES"
        titulo="Documentación necesaria"
        descripcion="Marcá cada documento a medida que lo preparás e imprimí la lista para llevarla a secretaría. Verificá que la documentación obligatoria esté completa antes de asistir."
        migas={[
          { label: "Inicio", href: "/" },
          { label: "Admisiones", href: "/admisiones" },
          { label: "Documentación" },
        ]}
      />
      <ChecklistDocs />
    </main>
  )
}
