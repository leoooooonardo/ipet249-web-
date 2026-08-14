import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { InfoSection } from "@/components/info-section"
import { TERCER_MATERIA } from "@/lib/data/programas"

export const metadata: Metadata = {
  title: 'Tercera materia | IPET 249 "Nicolás Copérnico"',
  description:
    "Instancia de tercera materia del IPET 249: cómo funciona la promoción con hasta tres materias pendientes.",
}

export default function TercerMateriaPage() {
  return (
    <main>
      <PageHero
        etiqueta="ACADÉMICO"
        titulo="Tercera materia"
        descripcion="Cómo funciona la instancia de tercera materia para regularizar espacios pendientes y promover el año."
        migas={[
          { label: "Inicio", href: "/" },
          { label: "Académico", href: "/academico/calendario" },
          { label: "Tercera materia" },
        ]}
      />
      <InfoSection intro={TERCER_MATERIA.intro} bloques={TERCER_MATERIA.bloques} datos={TERCER_MATERIA.datos} />
    </main>
  )
}
