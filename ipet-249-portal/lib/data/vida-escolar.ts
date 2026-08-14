import type { Rol } from "@/lib/types"

export interface EventoVida {
  id: string
  titulo: string
  descripcion: string
  cuando: string // texto libre, ej. "Septiembre" o "18 de septiembre"
  ubicacion?: string
  categoria: "muestra" | "acto" | "recreativo" | "ciencia"
  roles: Rol[]
}

export const EVENTOS_VIDA: EventoVida[] = [
  {
    id: "expo-ipet",
    titulo: "Expo IPET",
    descripcion:
      "Muestra anual donde los estudiantes presentan los proyectos de las cuatro especialidades. Abierta a la comunidad y a las familias.",
    cuando: "Septiembre",
    ubicacion: "Instalaciones del instituto",
    categoria: "muestra",
    roles: [],
  },
  {
    id: "feria-ciencias",
    titulo: "Feria de Ciencias",
    descripcion:
      "Presentación de trabajos de investigación de los estudiantes, con instancias que pueden avanzar a nivel zonal y provincial.",
    cuando: "Agosto",
    categoria: "ciencia",
    roles: [],
  },
  {
    id: "recrearte",
    titulo: "Recrearte",
    descripcion:
      "Jornada recreativa y artística de toda la escuela: música, expresión, juegos y talleres abiertos.",
    cuando: "Octubre",
    ubicacion: "Patio central",
    categoria: "recreativo",
    roles: [],
  },
  {
    id: "actos",
    titulo: "Actos patrios y conmemoraciones",
    descripcion:
      "Actos por las efemérides del calendario escolar, con participación de los distintos cursos.",
    cuando: "Durante todo el año",
    ubicacion: "Patio central",
    categoria: "acto",
    roles: [],
  },
]

export interface Deporte {
  id: string
  nombre: string
  detalle: string
  categoria: string // ej. "Ciclo básico", "Ciclo superior", "Mixto"
}

export const DEPORTES: Deporte[] = [
  { id: "futbol", nombre: "Fútbol", detalle: "Torneo interno entre cursos durante el segundo semestre.", categoria: "Todos los años" },
  { id: "voley", nombre: "Vóley", detalle: "Equipos mixtos por división.", categoria: "Ciclo superior" },
  { id: "basquet", nombre: "Básquet", detalle: "Encuentros amistosos y torneo interno.", categoria: "Ciclo básico" },
  { id: "atletismo", nombre: "Atletismo", detalle: "Jornada de pruebas de pista y campo en la jornada deportiva anual.", categoria: "Todos los años" },
]

export const TORNEO_DEPORTES = {
  titulo: "Torneo interno de deportes",
  descripcion:
    "Cada año la escuela organiza un torneo interno entre cursos que combina varias disciplinas. Es una de las actividades más esperadas y fortalece la integración entre estudiantes de distintos años.",
  cuando: "Noviembre",
}
