import type { Rol, Anio } from "@/lib/types"

export interface Tutoria {
  id: string
  materia: string
  profesor: string
  profesorSlug?: string // enlaza con /institucional/equipo/[slug]
  dia: "Lunes" | "Martes" | "Miércoles" | "Jueves" | "Viernes"
  desde: string
  hasta: string
  aula: string
  modalidad: "Presencial" | "Virtual"
  especialidad?: string
  roles: Rol[]
  anios: Anio[]
}

export const TUTORIAS: Tutoria[] = [
  {
    id: "tut-mate-3",
    materia: "Matemática",
    profesor: "Silvia Torres",
    profesorSlug: "silvia-torres",
    dia: "Martes",
    desde: "11:00",
    hasta: "12:00",
    aula: "Aula 4",
    modalidad: "Presencial",
    roles: ["alumno", "familia", "preceptor"],
    anios: [3],
  },
  {
    id: "tut-mate-4",
    materia: "Análisis Matemático",
    profesor: "Silvia Torres",
    profesorSlug: "silvia-torres",
    dia: "Jueves",
    desde: "11:00",
    hasta: "12:00",
    aula: "Aula 4",
    modalidad: "Presencial",
    roles: ["alumno", "familia", "preceptor"],
    anios: [4],
  },
  {
    id: "tut-prog-5",
    materia: "Programación",
    profesor: "Diego Álvarez",
    profesorSlug: "diego-alvarez",
    dia: "Miércoles",
    desde: "14:00",
    hasta: "15:30",
    aula: "Laboratorio de Informática",
    modalidad: "Presencial",
    especialidad: "Informática",
    roles: ["alumno", "profesor"],
    anios: [5],
  },
  {
    id: "tut-bd-6",
    materia: "Bases de Datos",
    profesor: "Diego Álvarez",
    profesorSlug: "diego-alvarez",
    dia: "Viernes",
    desde: "15:00",
    hasta: "16:00",
    aula: "Virtual (Meet)",
    modalidad: "Virtual",
    especialidad: "Informática",
    roles: ["alumno"],
    anios: [6],
  },
  {
    id: "tut-motores-6",
    materia: "Motores",
    profesor: "Roberto Sosa",
    profesorSlug: "roberto-sosa",
    dia: "Lunes",
    desde: "15:00",
    hasta: "16:00",
    aula: "Taller de Automotores",
    modalidad: "Presencial",
    especialidad: "Automotores",
    roles: ["alumno", "familia"],
    anios: [6],
  },
  {
    id: "tut-electro-5",
    materia: "Electrónica Digital",
    profesor: "Ana Molina",
    profesorSlug: "ana-molina",
    dia: "Jueves",
    desde: "10:00",
    hasta: "11:00",
    aula: "Laboratorio de Electrónica",
    modalidad: "Presencial",
    especialidad: "Electrónica",
    roles: ["alumno", "profesor"],
    anios: [5],
  },
]

export const DIAS_SEMANA: Tutoria["dia"][] = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"]
