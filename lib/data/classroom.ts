import type { Rol, Anio } from "@/lib/types"

export interface CursoClassroom {
  id: string
  materia: string
  especialidad?: string
  profesor: string
  codigo: string // código de la clase de Google Classroom
  link?: string
  proximoExamen?: {
    titulo: string
    fecha: string // ISO
    modalidad: "Presencial" | "Virtual"
  }
  roles: Rol[]
  anios: Anio[]
}

export const CLASSROOMS: CursoClassroom[] = [
  {
    id: "cr-info-dic",
    materia: "Programación — Mesa de diciembre",
    especialidad: "Informática",
    profesor: "Diego Álvarez",
    codigo: "ipet-info-dic26",
    proximoExamen: {
      titulo: "Examen final de Programación",
      fecha: "2026-12-10",
      modalidad: "Presencial",
    },
    roles: ["alumno", "profesor"],
    anios: [4, 5, 6],
  },
  {
    id: "cr-mate-dic",
    materia: "Matemática — Mesa de diciembre",
    profesor: "Silvia Torres",
    codigo: "ipet-mate-dic26",
    proximoExamen: {
      titulo: "Examen de Matemática (previas)",
      fecha: "2026-12-11",
      modalidad: "Presencial",
    },
    roles: ["alumno", "familia", "profesor"],
    anios: [1, 2, 3, 4],
  },
  {
    id: "cr-electro-feb",
    materia: "Electrónica Digital — Mesa de febrero",
    especialidad: "Electrónica",
    profesor: "Ana Molina",
    codigo: "ipet-electro-feb27",
    proximoExamen: {
      titulo: "Recuperatorio de Electrónica Digital",
      fecha: "2027-02-18",
      modalidad: "Presencial",
    },
    roles: ["alumno", "profesor"],
    anios: [5, 6],
  },
  {
    id: "cr-autom-dic",
    materia: "Motores — Mesa de diciembre",
    especialidad: "Automotores",
    profesor: "Roberto Sosa",
    codigo: "ipet-motores-dic26",
    proximoExamen: {
      titulo: "Examen práctico de Motores",
      fecha: "2026-12-12",
      modalidad: "Presencial",
    },
    roles: ["alumno", "familia"],
    anios: [6, 7],
  },
]

const MESES = [
  "enero", "febrero", "marzo", "abril", "mayo", "junio",
  "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
]

export function formatearFechaCorta(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number)
  return `${d} de ${MESES[m - 1]} de ${y}`
}
