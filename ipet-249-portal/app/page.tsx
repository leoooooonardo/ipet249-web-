import { Hero } from '@/components/hero'
import { AccesosRapidos } from '@/components/accesos-rapidos'
import { Institucional } from '@/components/institucional'
import { Especialidades } from '@/components/especialidades'
import { PorqueElegirnos } from '@/components/institucional/porque-elegirnos'
import { Noticias } from '@/components/noticias'
import { Contacto } from '@/components/contacto'

export default function Home() {
  return (
    <main>
      <Hero />
      <AccesosRapidos />
      <Institucional />
      <Especialidades />
      <PorqueElegirnos />
      <Noticias />
      <Contacto />
    </main>
  )
}
