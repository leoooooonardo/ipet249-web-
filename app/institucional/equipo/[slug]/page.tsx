import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { PageHero } from "@/components/page-hero"
import { PerfilView } from "@/components/equipo/perfil-view"
import { EQUIPO, miembroPorSlug, labelCargo } from "@/lib/data/equipo"

export function generateStaticParams() {
  return EQUIPO.map((m) => ({ slug: m.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const miembro = miembroPorSlug(slug)
  if (!miembro) return { title: 'Perfil no encontrado | IPET 249' }
  return {
    title: `${miembro.nombre} — ${miembro.puesto} | IPET 249`,
    description: miembro.bio ?? `${miembro.puesto} del IPET 249 "Nicolás Copérnico".`,
  }
}

export default async function PerfilPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const miembro = miembroPorSlug(slug)
  if (!miembro) notFound()

  return (
    <main>
      <PageHero
        etiqueta={labelCargo(miembro.cargo).toUpperCase()}
        titulo={miembro.nombre}
        migas={[
          { label: "Inicio", href: "/" },
          { label: "Institucional", href: "/institucional" },
          { label: "Equipo", href: "/institucional/equipo" },
          { label: miembro.nombre },
        ]}
      />
      <PerfilView miembro={miembro} />
    </main>
  )
}
