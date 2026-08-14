import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { InfoSection } from "@/components/info-section"
import { PAICOR } from "@/lib/data/programas"

export const metadata: Metadata = {
  title: 'PAICOR | IPET 249 "Nicolás Copérnico"',
  description:
    "El PAICOR en el IPET 249: asistencia alimentaria, entrega de módulos y servicio de comedor para estudiantes becados.",
}

export default function PaicorPage() {
  return (
    <main>
      <PageHero
        etiqueta="ACADÉMICO"
        titulo="PAICOR"
        descripcion="Programa de Asistencia Integral Córdoba: asistencia alimentaria y entrega de módulos para estudiantes con beca asignada."
        migas={[
          { label: "Inicio", href: "/" },
          { label: "Académico", href: "/academico/calendario" },
          { label: "PAICOR" },
        ]}
      />
      <InfoSection intro={PAICOR.intro} bloques={PAICOR.bloques} datos={PAICOR.datos} />
    </main>
  )
}
