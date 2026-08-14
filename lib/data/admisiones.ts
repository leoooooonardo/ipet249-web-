export interface FechaClave {
  titulo: string
  detalle: string
  desde: string // ISO
  hasta?: string
}

export interface PasoInscripcion {
  numero: number
  titulo: string
  descripcion: string
}

export interface RequisitoDoc {
  id: string
  titulo: string
  detalle: string
  obligatorio: boolean
}

export const FECHAS_CLAVE: FechaClave[] = [
  {
    titulo: "Preinscripción online",
    detalle: "Completá el formulario del Gobierno de Córdoba (Ciudadano Digital).",
    desde: "2026-10-01",
    hasta: "2026-10-31",
  },
  {
    titulo: "Inscripción presencial a 1° año",
    detalle: "Presentación de documentación en secretaría, por orden de turno.",
    desde: "2026-11-03",
    hasta: "2026-11-28",
  },
  {
    titulo: "Publicación de vacantes asignadas",
    detalle: "Listado de ingresantes en cartelera y web institucional.",
    desde: "2026-12-05",
  },
  {
    titulo: "Curso de ambientación",
    detalle: "Encuentro de bienvenida para ingresantes y familias.",
    desde: "2027-02-24",
    hasta: "2027-02-27",
  },
]

export const PASOS_INSCRIPCION: PasoInscripcion[] = [
  {
    numero: 1,
    titulo: "Preinscribite online",
    descripcion:
      "Ingresá con Ciudadano Digital (CiDi) al sistema de gestión estudiantil y completá los datos del aspirante y del grupo familiar.",
  },
  {
    numero: 2,
    titulo: "Reuní la documentación",
    descripcion:
      "Preparás las copias y originales del checklist de documentación. Verificá que esté todo completo antes de asistir.",
  },
  {
    numero: 3,
    titulo: "Presentate en secretaría",
    descripcion:
      "Acercate en las fechas de inscripción presencial con la documentación. La atención es por orden de llegada dentro del horario publicado.",
  },
  {
    numero: 4,
    titulo: "Confirmá la vacante",
    descripcion:
      "Una vez validada la documentación, la vacante queda confirmada. Consultá el listado de ingresantes en la fecha indicada.",
  },
]

export const DOCUMENTACION: RequisitoDoc[] = [
  {
    id: "dni-aspirante",
    titulo: "DNI del aspirante",
    detalle: "Original y copia de ambos lados.",
    obligatorio: true,
  },
  {
    id: "dni-tutor",
    titulo: "DNI del padre/madre/tutor",
    detalle: "Original y copia de quien realiza la inscripción.",
    obligatorio: true,
  },
  {
    id: "partida",
    titulo: "Partida de nacimiento",
    detalle: "Copia certificada del aspirante.",
    obligatorio: true,
  },
  {
    id: "certificado-6to",
    titulo: "Certificado de 6° grado / pase",
    detalle: "Constancia de finalización del nivel primario o certificado de pase.",
    obligatorio: true,
  },
  {
    id: "libreta",
    titulo: "Libreta sanitaria / ficha médica",
    detalle: "Ficha de salud del aspirante actualizada.",
    obligatorio: true,
  },
  {
    id: "fotos",
    titulo: "2 fotos carnet",
    detalle: "Fondo blanco, 4x4.",
    obligatorio: true,
  },
  {
    id: "grupo-sanguineo",
    titulo: "Certificado de grupo sanguíneo",
    detalle: "Emitido por un centro de salud.",
    obligatorio: false,
  },
  {
    id: "vacunas",
    titulo: "Carnet de vacunación",
    detalle: "Copia del esquema de vacunación completo.",
    obligatorio: false,
  },
]
