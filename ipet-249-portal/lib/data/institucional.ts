export interface MotivoElegir {
  id: string
  titulo: string
  descripcion: string
  icono: "award" | "wrench" | "users" | "briefcase" | "cpu" | "heart"
}

// "Por qué este colegio es ideal para tu hijo/a"
export const MOTIVOS_ELEGIR: MotivoElegir[] = [
  {
    id: "trayectoria",
    titulo: "Más de 75 años de trayectoria",
    descripcion:
      "Una institución técnica reconocida en Córdoba, con miles de egresados insertados en la industria y la universidad.",
    icono: "award",
  },
  {
    id: "especialidades",
    titulo: "Cuatro especialidades técnicas",
    descripcion:
      "Automotores, Informática, Electrónica y Mecánica. Título de Técnico con salida laboral y base sólida para seguir estudiando.",
    icono: "wrench",
  },
  {
    id: "talleres",
    titulo: "Talleres y laboratorios equipados",
    descripcion:
      "Aprendizaje práctico desde los primeros años en talleres reales, no solo teoría. Se aprende haciendo.",
    icono: "cpu",
  },
  {
    id: "pasantias",
    titulo: "Pasantías y vínculo con empresas",
    descripcion:
      "Convenios con talleres y empresas de la región que abren la puerta al primer empleo antes de egresar.",
    icono: "briefcase",
  },
  {
    id: "acompanamiento",
    titulo: "Acompañamiento de trayectorias",
    descripcion:
      "Tutorías, preceptoría cercana y programa PIT para que cada estudiante avance con apoyo real.",
    icono: "heart",
  },
  {
    id: "comunidad",
    titulo: "Comunidad educativa activa",
    descripcion:
      "Cooperadora, familias y docentes comprometidos con eventos como Expo IPET, Recrearte y la Feria de Ciencias.",
    icono: "users",
  },
]

export interface PuntoMapa {
  id: string
  nombre: string
  descripcion: string
  sector: "Planta baja" | "Primer piso" | "Exterior"
}

// Mapa indicativo (referencia textual de sectores del edificio).
export const PUNTOS_MAPA: PuntoMapa[] = [
  { id: "entrada", nombre: "Entrada principal y portería", descripcion: "Acceso e ingreso de visitantes.", sector: "Planta baja" },
  { id: "secretaria", nombre: "Secretaría y administración", descripcion: "Inscripciones, certificados y trámites.", sector: "Planta baja" },
  { id: "direccion", nombre: "Dirección y vicedirección", descripcion: "Atención de dirección con turno previo.", sector: "Planta baja" },
  { id: "preceptoria", nombre: "Preceptoría", descripcion: "Asistencias, comunicaciones y familias.", sector: "Planta baja" },
  { id: "aulas-basico", nombre: "Aulas del ciclo básico", descripcion: "1° a 3° año.", sector: "Primer piso" },
  { id: "aulas-superior", nombre: "Aulas del ciclo superior", descripcion: "4° a 7° año.", sector: "Primer piso" },
  { id: "lab-info", nombre: "Laboratorio de Informática", descripcion: "Especialidad Informática.", sector: "Primer piso" },
  { id: "lab-electro", nombre: "Laboratorio de Electrónica", descripcion: "Especialidad Electrónica.", sector: "Primer piso" },
  { id: "taller-autom", nombre: "Taller de Automotores", descripcion: "Especialidad Automotores.", sector: "Exterior" },
  { id: "taller-mecanica", nombre: "Taller de Mecánica", descripcion: "Especialidad Mecánica.", sector: "Exterior" },
  { id: "patio", nombre: "Patio central", descripcion: "Actos, recreos y actividades.", sector: "Exterior" },
  { id: "buffet", nombre: "Buffet / comedor", descripcion: "Servicio de kiosco y PAICOR.", sector: "Exterior" },
]

export const DIRECCION_ESCUELA = {
  direccion: "Av. Ejemplo 1234, Córdoba Capital",
  telefono: "(0351) 400-0000",
  email: "contacto@ipet249.edu.ar",
}

export interface Promocion {
  cohorte: string // ej. "Promoción 2024"
  anio: number
  especialidad: string
  cantidad: number
  destacado?: string
}

export const PROMOCIONES: Promocion[] = [
  { cohorte: "Promoción 2024", anio: 2024, especialidad: "Informática", cantidad: 28, destacado: "Proyecto final premiado en Expo IPET" },
  { cohorte: "Promoción 2024", anio: 2024, especialidad: "Automotores", cantidad: 24 },
  { cohorte: "Promoción 2023", anio: 2023, especialidad: "Electrónica", cantidad: 22, destacado: "3 egresados en pasantías que se volvieron empleo" },
  { cohorte: "Promoción 2023", anio: 2023, especialidad: "Mecánica", cantidad: 26 },
  { cohorte: "Promoción 2022", anio: 2022, especialidad: "Informática", cantidad: 30 },
  { cohorte: "Promoción 2022", anio: 2022, especialidad: "Automotores", cantidad: 25 },
]
