import type { EventoCalendario, TipoEvento } from "@/lib/types"

export interface TipoEventoInfo {
  value: TipoEvento
  label: string
  color: string
  bg: string
}

// Colores derivados de la paleta institucional (dorado / rojo óxido) + neutros.
export const TIPOS_EVENTO: TipoEventoInfo[] = [
  { value: "feriado", label: "Feriados", color: "#A13A2E", bg: "rgba(161, 58, 46, 0.1)" },
  { value: "inscripcion", label: "Inscripciones", color: "#D4A72C", bg: "rgba(212, 167, 44, 0.14)" },
  { value: "acto", label: "Actos", color: "#5C5C5C", bg: "rgba(92, 92, 92, 0.1)" },
  { value: "evento", label: "Eventos", color: "#C04F40", bg: "rgba(192, 79, 64, 0.1)" },
  { value: "examen", label: "Exámenes / Classroom", color: "#1A1A1A", bg: "rgba(26, 26, 26, 0.08)" },
  { value: "tercer-materia", label: "Tercera materia", color: "#8A6D1F", bg: "rgba(212, 167, 44, 0.1)" },
  { value: "paicor", label: "PAICOR", color: "#A13A2E", bg: "rgba(161, 58, 46, 0.08)" },
]

export function tipoInfo(tipo: TipoEvento): TipoEventoInfo {
  return TIPOS_EVENTO.find((t) => t.value === tipo) ?? TIPOS_EVENTO[0]
}

// Ciclo lectivo de ejemplo. Editá estas fechas cada año.
export const EVENTOS: EventoCalendario[] = [
  {
    id: "inicio-clases",
    titulo: "Inicio del ciclo lectivo",
    categoria: "academico",
    tipo: "evento",
    fecha: "2026-03-02",
    descripcion: "Comienzo de clases para todos los cursos.",
    roles: [],
    anios: [],
  },
  {
    id: "insc-1er-anio",
    titulo: "Inscripción a 1° año",
    categoria: "academico",
    tipo: "inscripcion",
    fecha: "2026-11-03",
    fechaFin: "2026-11-28",
    descripcion: "Inscripción de aspirantes a primer año. Ver requisitos en Admisiones.",
    roles: ["aspirante", "familia", "visitante"],
    anios: [1],
  },
  {
    id: "feriado-carnaval",
    titulo: "Carnaval",
    categoria: "vida-escolar",
    tipo: "feriado",
    fecha: "2026-02-16",
    fechaFin: "2026-02-17",
    descripcion: "Feriado nacional. No hay actividad.",
    roles: [],
    anios: [],
  },
  {
    id: "feriado-malvinas",
    titulo: "Día del Veterano y de los Caídos en Malvinas",
    categoria: "vida-escolar",
    tipo: "feriado",
    fecha: "2026-04-02",
    roles: [],
    anios: [],
  },
  {
    id: "acto-25mayo",
    titulo: "Acto por el 25 de Mayo",
    categoria: "vida-escolar",
    tipo: "acto",
    fecha: "2026-05-22",
    descripcion: "Acto conmemorativo en el patio central. Asistencia de la comunidad educativa.",
    ubicacion: "Patio central",
    roles: [],
    anios: [],
  },
  {
    id: "expo-ipet",
    titulo: "Expo IPET",
    categoria: "vida-escolar",
    tipo: "evento",
    fecha: "2026-09-18",
    descripcion: "Muestra anual de proyectos de las cuatro especialidades. Abierta a la comunidad.",
    ubicacion: "Instalaciones del instituto",
    roles: [],
    anios: [],
  },
  {
    id: "feria-ciencias",
    titulo: "Feria de Ciencias",
    categoria: "vida-escolar",
    tipo: "evento",
    fecha: "2026-08-14",
    descripcion: "Presentación de trabajos de investigación de estudiantes.",
    roles: ["alumno", "familia", "profesor"],
    anios: [],
  },
  {
    id: "recrearte",
    titulo: "Recrearte",
    categoria: "vida-escolar",
    tipo: "evento",
    fecha: "2026-10-09",
    descripcion: "Jornada recreativa y artística de toda la escuela.",
    roles: [],
    anios: [],
  },
  {
    id: "examen-dic-info",
    titulo: "Exámenes diciembre — Informática",
    categoria: "academico",
    tipo: "examen",
    fecha: "2026-12-10",
    descripcion: "Mesas de examen. Ingresá al aula virtual con el código.",
    codigoClassroom: "ipet-info-dic26",
    roles: ["alumno", "profesor"],
    anios: [4, 5, 6],
  },
  {
    id: "tercera-materia",
    titulo: "Cursado de tercera materia",
    categoria: "academico",
    tipo: "tercer-materia",
    fecha: "2026-12-01",
    fechaFin: "2026-12-19",
    descripcion: "Instancia de apoyo y evaluación para estudiantes con la tercera materia.",
    roles: ["alumno", "familia"],
    anios: [],
  },
  {
    id: "paicor-modulos",
    titulo: "Entrega de módulos PAICOR",
    categoria: "academico",
    tipo: "paicor",
    fecha: "2026-03-16",
    descripcion: "Retiro de módulos alimentarios para estudiantes con beca PAICOR.",
    roles: ["alumno", "familia"],
    anios: [],
  },
  {
    id: "torneo-deportes",
    titulo: "Torneo interno de deportes",
    categoria: "vida-escolar",
    tipo: "evento",
    fecha: "2026-11-06",
    descripcion: "Competencias deportivas entre cursos.",
    roles: ["alumno"],
    anios: [],
  },
  {
    id: "receso-invierno",
    titulo: "Receso de invierno",
    categoria: "vida-escolar",
    tipo: "feriado",
    fecha: "2026-07-13",
    fechaFin: "2026-07-24",
    descripcion: "Vacaciones de invierno.",
    roles: [],
    anios: [],
  },
]

const MESES = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
]

export function formatearFecha(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number)
  return `${d} de ${MESES[m - 1]} de ${y}`
}

export function formatearRango(desde: string, hasta?: string): string {
  if (!hasta || hasta === desde) return formatearFecha(desde)
  const [, md, dd] = desde.split("-").map(Number)
  const [, mh, dh] = hasta.split("-").map(Number)
  if (md === mh) return `${dd} al ${dh} de ${MESES[mh - 1]}`
  return `${dd} de ${MESES[md - 1]} al ${dh} de ${MESES[mh - 1]}`
}

export function nombreMes(iso: string): string {
  const [, m] = iso.split("-").map(Number)
  return MESES[m - 1]
}
