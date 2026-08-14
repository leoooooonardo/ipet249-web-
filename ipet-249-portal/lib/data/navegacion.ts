import type { Categoria } from "@/lib/types"

export interface SubItem {
  label: string
  href: string
  disponible: boolean // false = "próximamente" (fase posterior)
}

export interface ItemNav {
  label: string
  href: string
  categoria: Categoria
  descripcion: string
  subitems: SubItem[]
}

export const NAVEGACION: ItemNav[] = [
  {
    label: "Institucional",
    href: "/institucional",
    categoria: "institucional",
    descripcion: "Historia, equipo y por qué elegirnos",
    subitems: [
      { label: "Historia", href: "/institucional#historia", disponible: true },
      { label: "Especialidades", href: "/institucional#especialidades", disponible: true },
      { label: "Equipo", href: "/institucional/equipo", disponible: true },
      { label: "Mapa del colegio", href: "/institucional/mapa", disponible: true },
      { label: "Promociones", href: "/institucional/promociones", disponible: true },
    ],
  },
  {
    label: "Académico",
    href: "/academico",
    categoria: "academico",
    descripcion: "Calendario, horarios, tutorías y exámenes",
    subitems: [
      { label: "Calendario escolar", href: "/academico/calendario", disponible: true },
      { label: "Horarios por año", href: "/academico/horarios", disponible: true },
      { label: "Tutorías", href: "/academico/tutorias", disponible: true },
      { label: "Classroom / exámenes", href: "/academico/classroom", disponible: true },
      { label: "Tercera materia", href: "/academico/tercer-materia", disponible: true },
      { label: "PAICOR", href: "/academico/paicor", disponible: true },
    ],
  },
  {
    label: "Admisiones",
    href: "/admisiones",
    categoria: "admisiones",
    descripcion: "Inscripciones, fechas y documentación",
    subitems: [
      { label: "Inscripciones", href: "/admisiones", disponible: true },
      { label: "Documentación", href: "/admisiones/documentacion", disponible: true },
    ],
  },
  {
    label: "Vida escolar",
    href: "/vida-escolar",
    categoria: "vida-escolar",
    descripcion: "Eventos, actos y deportes",
    subitems: [
      { label: "Eventos", href: "/vida-escolar", disponible: true },
      { label: "Deportes", href: "/vida-escolar#deportes", disponible: true },
    ],
  },
  {
    label: "Oportunidades",
    href: "/oportunidades",
    categoria: "oportunidades",
    descripcion: "Convocatorias, becas, pasantías y empleo",
    subitems: [
      { label: "Convocatorias y becas", href: "/oportunidades", disponible: true },
      { label: "Pasantías", href: "/oportunidades/pasantias", disponible: true },
      { label: "Empleo", href: "/oportunidades/empleo", disponible: true },
    ],
  },
  {
    label: "Comunidad",
    href: "/comunidad",
    categoria: "comunidad",
    descripcion: "Cooperadora y PIT",
    subitems: [
      { label: "Cooperadora", href: "/comunidad/cooperadora", disponible: true },
      { label: "PIT", href: "/comunidad/pit", disponible: true },
    ],
  },
]
