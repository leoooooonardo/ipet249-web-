import type { Rol } from "@/lib/types"

export type CargoEquipo = "directivo" | "preceptor" | "profesor"

export interface MiembroEquipo {
  slug: string
  nombre: string
  cargo: CargoEquipo
  puesto: string // ej. "Director", "Preceptora turno mañana", "Profesor de Matemática"
  especialidad?: string // Informática, Automotores, Electrónica, Mecánica, General
  materias?: string[]
  cursos?: string[] // ej. "3° A", "5° B"
  email?: string
  horarioAtencion?: string
  bio?: string
  roles: Rol[] // quiénes ven este perfil (vacío = todos)
}

export interface CargoInfo {
  value: CargoEquipo
  label: string
  plural: string
}

export const CARGOS: CargoInfo[] = [
  { value: "directivo", label: "Directivo", plural: "Directivos" },
  { value: "preceptor", label: "Preceptor/a", plural: "Preceptores" },
  { value: "profesor", label: "Profesor/a", plural: "Profesores" },
]

export function labelCargo(cargo: CargoEquipo): string {
  return CARGOS.find((c) => c.value === cargo)?.label ?? cargo
}

// Iniciales para el avatar generado por CSS.
export function iniciales(nombre: string): string {
  return nombre
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? "")
    .join("")
}

export const EQUIPO: MiembroEquipo[] = [
  {
    slug: "maria-gonzalez",
    nombre: "María González",
    cargo: "directivo",
    puesto: "Directora",
    especialidad: "General",
    email: "direccion@ipet249.edu.ar",
    horarioAtencion: "Lunes a viernes, 9:00 a 12:00 (con turno previo)",
    bio: "Conduce la institución con foco en la formación técnica de calidad y el acompañamiento de trayectorias. Más de 20 años en educación técnica provincial.",
    roles: [],
  },
  {
    slug: "jorge-medina",
    nombre: "Jorge Medina",
    cargo: "directivo",
    puesto: "Vicedirector",
    especialidad: "General",
    email: "vicedireccion@ipet249.edu.ar",
    horarioAtencion: "Lunes a viernes, 10:00 a 13:00",
    bio: "Coordina la articulación entre especialidades y el seguimiento pedagógico de los cursos superiores.",
    roles: [],
  },
  {
    slug: "laura-fernandez",
    nombre: "Laura Fernández",
    cargo: "preceptor",
    puesto: "Preceptora turno mañana",
    especialidad: "General",
    cursos: ["1° A", "1° B", "2° A"],
    email: "preceptoria.manana@ipet249.edu.ar",
    horarioAtencion: "Lunes a viernes, 7:30 a 12:30",
    bio: "Referente del ciclo básico turno mañana. Seguimiento de asistencias, comunicación con familias y acompañamiento diario.",
    roles: [],
  },
  {
    slug: "carlos-ruiz",
    nombre: "Carlos Ruiz",
    cargo: "preceptor",
    puesto: "Preceptor turno tarde",
    especialidad: "General",
    cursos: ["4° A", "5° A", "6° A"],
    email: "preceptoria.tarde@ipet249.edu.ar",
    horarioAtencion: "Lunes a viernes, 13:00 a 18:00",
    bio: "Acompaña a los cursos del ciclo superior en el turno tarde y coordina las mesas de examen del turno.",
    roles: [],
  },
  {
    slug: "silvia-torres",
    nombre: "Silvia Torres",
    cargo: "profesor",
    puesto: "Profesora de Matemática",
    especialidad: "General",
    materias: ["Matemática", "Análisis Matemático"],
    cursos: ["3° A", "4° A"],
    email: "storres@ipet249.edu.ar",
    horarioAtencion: "Martes y jueves, 11:00 a 12:00",
    bio: "Docente de matemática del ciclo básico y superior. Ofrece tutorías de apoyo antes de mesas de examen.",
    roles: [],
  },
  {
    slug: "diego-alvarez",
    nombre: "Diego Álvarez",
    cargo: "profesor",
    puesto: "Profesor de Programación",
    especialidad: "Informática",
    materias: ["Programación", "Bases de Datos"],
    cursos: ["5° B", "6° B"],
    email: "dalvarez@ipet249.edu.ar",
    horarioAtencion: "Miércoles, 14:00 a 15:30",
    bio: "A cargo del taller de programación de la especialidad Informática. Impulsa proyectos para la Expo IPET.",
    roles: [],
  },
  {
    slug: "roberto-sosa",
    nombre: "Roberto Sosa",
    cargo: "profesor",
    puesto: "Profesor de Mecánica",
    especialidad: "Automotores",
    materias: ["Motores", "Sistemas de Transmisión"],
    cursos: ["6° A", "7° A"],
    email: "rsosa@ipet249.edu.ar",
    horarioAtencion: "Lunes, 15:00 a 16:00",
    bio: "Docente del taller de automotores. Coordina las pasantías con talleres y concesionarias de la zona.",
    roles: [],
  },
  {
    slug: "ana-molina",
    nombre: "Ana Molina",
    cargo: "profesor",
    puesto: "Profesora de Electrónica",
    especialidad: "Electrónica",
    materias: ["Electrónica Digital", "Sistemas de Control"],
    cursos: ["5° A", "6° A"],
    email: "amolina@ipet249.edu.ar",
    horarioAtencion: "Jueves, 10:00 a 11:00",
    bio: "Responsable del laboratorio de electrónica. Acompaña proyectos de la Feria de Ciencias.",
    roles: [],
  },
]

export function miembroPorSlug(slug: string): MiembroEquipo | undefined {
  return EQUIPO.find((m) => m.slug === slug)
}
