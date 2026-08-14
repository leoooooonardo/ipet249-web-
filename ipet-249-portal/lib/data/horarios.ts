import type { HorarioCurso } from "@/lib/types"

export const DIAS = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"] as const

// Módulos horarios de referencia (turno mañana). Editá según el ciclo.
export const MODULOS = [
  { desde: "07:30", hasta: "08:10" },
  { desde: "08:10", hasta: "08:50" },
  { desde: "08:50", hasta: "09:30" },
  { desde: "09:45", hasta: "10:25" },
  { desde: "10:25", hasta: "11:05" },
  { desde: "11:05", hasta: "11:45" },
  { desde: "12:00", hasta: "12:40" },
]

export const HORARIOS: HorarioCurso[] = [
  {
    id: "1a",
    anio: 1,
    division: "A",
    turno: "Mañana",
    franjas: [
      { dia: "Lunes", desde: "07:30", hasta: "08:50", materia: "Matemática", aula: "12", profesor: "Prof. Gómez" },
      { dia: "Lunes", desde: "08:50", hasta: "10:25", materia: "Lengua", aula: "12", profesor: "Prof. Díaz" },
      { dia: "Martes", desde: "07:30", hasta: "09:30", materia: "Ed. Tecnológica", aula: "Taller 1", profesor: "Prof. Ruiz" },
      { dia: "Miércoles", desde: "07:30", hasta: "08:50", materia: "Cs. Naturales", aula: "12", profesor: "Prof. Sosa" },
      { dia: "Jueves", desde: "09:45", hasta: "11:45", materia: "Ed. Física", aula: "Patio", profesor: "Prof. León" },
      { dia: "Viernes", desde: "07:30", hasta: "08:50", materia: "Cs. Sociales", aula: "12", profesor: "Prof. Vera" },
    ],
  },
  {
    id: "1b",
    anio: 1,
    division: "B",
    turno: "Mañana",
    franjas: [
      { dia: "Lunes", desde: "07:30", hasta: "09:30", materia: "Lengua", aula: "14", profesor: "Prof. Díaz" },
      { dia: "Martes", desde: "07:30", hasta: "08:50", materia: "Matemática", aula: "14", profesor: "Prof. Gómez" },
      { dia: "Miércoles", desde: "09:45", hasta: "11:45", materia: "Ed. Tecnológica", aula: "Taller 2", profesor: "Prof. Ruiz" },
      { dia: "Jueves", desde: "07:30", hasta: "08:50", materia: "Cs. Naturales", aula: "14", profesor: "Prof. Sosa" },
      { dia: "Viernes", desde: "08:50", hasta: "10:25", materia: "Ed. Física", aula: "Patio", profesor: "Prof. León" },
    ],
  },
  {
    id: "4a-info",
    anio: 4,
    division: "A",
    especialidad: "Informática",
    turno: "Mañana",
    franjas: [
      { dia: "Lunes", desde: "07:30", hasta: "09:30", materia: "Programación", aula: "Lab 1", profesor: "Prof. Molina" },
      { dia: "Martes", desde: "07:30", hasta: "08:50", materia: "Base de datos", aula: "Lab 2", profesor: "Prof. Paz" },
      { dia: "Miércoles", desde: "09:45", hasta: "11:45", materia: "Redes", aula: "Lab 1", profesor: "Prof. Cardozo" },
      { dia: "Jueves", desde: "07:30", hasta: "08:50", materia: "Matemática", aula: "21", profesor: "Prof. Gómez" },
      { dia: "Viernes", desde: "07:30", hasta: "09:30", materia: "Sistemas operativos", aula: "Lab 2", profesor: "Prof. Molina" },
    ],
  },
  {
    id: "4a-electro",
    anio: 4,
    division: "A",
    especialidad: "Electrónica",
    turno: "Tarde",
    franjas: [
      { dia: "Lunes", desde: "13:00", hasta: "15:00", materia: "Electrónica digital", aula: "Lab E1", profesor: "Prof. Núñez" },
      { dia: "Martes", desde: "13:00", hasta: "14:20", materia: "Física", aula: "22", profesor: "Prof. Sosa" },
      { dia: "Miércoles", desde: "13:00", hasta: "15:00", materia: "Circuitos", aula: "Lab E1", profesor: "Prof. Núñez" },
      { dia: "Jueves", desde: "15:15", hasta: "17:15", materia: "Sistemas de control", aula: "Lab E2", profesor: "Prof. Bravo" },
      { dia: "Viernes", desde: "13:00", hasta: "14:20", materia: "Matemática", aula: "22", profesor: "Prof. Gómez" },
    ],
  },
  {
    id: "6a-auto",
    anio: 6,
    division: "A",
    especialidad: "Automotores",
    turno: "Mañana",
    franjas: [
      { dia: "Lunes", desde: "07:30", hasta: "09:30", materia: "Motores", aula: "Taller Auto", profesor: "Prof. Herrera" },
      { dia: "Martes", desde: "07:30", hasta: "09:30", materia: "Sistemas de transmisión", aula: "Taller Auto", profesor: "Prof. Herrera" },
      { dia: "Miércoles", desde: "09:45", hasta: "11:45", materia: "Electricidad del automotor", aula: "Taller Auto", profesor: "Prof. Ledesma" },
      { dia: "Jueves", desde: "07:30", hasta: "08:50", materia: "Prácticas profesionalizantes", aula: "Taller Auto", profesor: "Prof. Herrera" },
      { dia: "Viernes", desde: "07:30", hasta: "09:30", materia: "Diagnóstico", aula: "Taller Auto", profesor: "Prof. Ledesma" },
    ],
  },
]
