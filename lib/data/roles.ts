import type { Rol, Anio } from "@/lib/types"

export interface RolInfo {
  value: Rol
  label: string
  descripcion: string
}

export const ROLES: RolInfo[] = [
  { value: "visitante", label: "Visitante", descripcion: "Explorá la institución y sus especialidades" },
  { value: "aspirante", label: "Aspirante", descripcion: "Querés inscribirte en el IPET 249" },
  { value: "alumno", label: "Alumno/a", descripcion: "Horarios, tutorías, exámenes y oportunidades" },
  { value: "familia", label: "Familia", descripcion: "Calendario, horarios y avisos" },
  { value: "profesor", label: "Profesor/a", descripcion: "Tutorías, exámenes y convocatorias docentes" },
  { value: "preceptor", label: "Preceptor/a", descripcion: "Cursos, tutorías y calendario" },
  { value: "directivo", label: "Directivo", descripcion: "Vista completa de la institución" },
]

export const ROL_DEFAULT: Rol = "visitante"

export const ANIOS: { value: Anio; label: string }[] = [
  { value: 1, label: "1° año" },
  { value: 2, label: "2° año" },
  { value: 3, label: "3° año" },
  { value: 4, label: "4° año" },
  { value: 5, label: "5° año" },
  { value: 6, label: "6° año" },
  { value: 7, label: "7° año" },
]

export function labelRol(rol: Rol): string {
  return ROLES.find((r) => r.value === rol)?.label ?? rol
}

export function labelAnio(anio: Anio | "todos"): string {
  if (anio === "todos") return "Todos los años"
  return ANIOS.find((a) => a.value === anio)?.label ?? `${anio}°`
}
