// Modelo de datos común del sitio IPET 249
// Transversal: todo contenido se puede filtrar por rol y por año/curso.

export type Rol =
  | "visitante"
  | "aspirante"
  | "alumno"
  | "familia"
  | "profesor"
  | "preceptor"
  | "directivo"

export type Anio = 1 | 2 | 3 | 4 | 5 | 6 | 7

export type Categoria =
  | "institucional"
  | "academico"
  | "admisiones"
  | "vida-escolar"
  | "oportunidades"
  | "comunidad"

// Subtipos del calendario escolar unificado
export type TipoEvento =
  | "feriado"
  | "inscripcion"
  | "acto"
  | "evento"
  | "examen"
  | "tercer-materia"
  | "paicor"

export interface ContenidoBase {
  id: string
  titulo: string
  fecha?: string // ISO: YYYY-MM-DD
  categoria: Categoria
  roles: Rol[] // roles que deberían ver este contenido
  anios: Anio[] // años/cursos a los que aplica (vacío = todos)
}

export interface EventoCalendario extends ContenidoBase {
  categoria: "academico" | "vida-escolar"
  tipo: TipoEvento
  fecha: string
  fechaFin?: string
  descripcion?: string
  ubicacion?: string
  codigoClassroom?: string
}

export interface FranjaHorario {
  dia: "Lunes" | "Martes" | "Miércoles" | "Jueves" | "Viernes"
  desde: string
  hasta: string
  materia: string
  aula?: string
  profesor?: string
}

export interface HorarioCurso {
  id: string
  anio: Anio
  division: string // ej. "A", "B"
  especialidad?: string
  turno: "Mañana" | "Tarde"
  franjas: FranjaHorario[]
}
