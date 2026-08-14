import type { BloqueInfo, DatoDestacado } from "@/lib/data/comunidad"

export const TERCER_MATERIA = {
  intro:
    "La tercera materia es la instancia que permite a los estudiantes que adeudan hasta tres materias promover el año con acompañamiento y evaluación específica, según la normativa vigente de la provincia de Córdoba.",
  bloques: [
    {
      titulo: "Cómo funciona",
      parrafos: [
        "Los estudiantes que finalizan el ciclo con hasta tres materias pendientes acceden a un período de cursado y apoyo.",
        "Se combinan clases de repaso, trabajos y una instancia de evaluación para regularizar cada espacio.",
        "El calendario y los docentes a cargo se publican en el Calendario escolar y en Classroom.",
      ],
    },
    {
      titulo: "Qué tener en cuenta",
      parrafos: [
        "La asistencia a las instancias de apoyo es clave para aprobar.",
        "Ante dudas, consultá con preceptoría o con el profesor de la materia.",
      ],
    },
  ] as BloqueInfo[],
  datos: [
    { etiqueta: "Período", valor: "Diciembre" },
    { etiqueta: "Modalidad", valor: "Apoyo + evaluación" },
    { etiqueta: "Info", valor: "Calendario escolar y Classroom" },
  ] as DatoDestacado[],
}

export const PAICOR = {
  intro:
    "El PAICOR (Programa de Asistencia Integral Córdoba) brinda asistencia alimentaria a estudiantes de la provincia. En el IPET 249 se gestiona la entrega de módulos y el servicio de comedor según la asignación de becas.",
  bloques: [
    {
      titulo: "Qué incluye",
      parrafos: [
        "Servicio alimentario para estudiantes con beca asignada.",
        "Entrega de módulos alimentarios en las fechas publicadas en el calendario.",
      ],
    },
    {
      titulo: "Cómo acceder",
      parrafos: [
        "La asignación depende de la evaluación socioeconómica del programa provincial.",
        "Las familias interesadas deben consultar los requisitos y la documentación en secretaría.",
      ],
    },
  ] as BloqueInfo[],
  datos: [
    { etiqueta: "Gestión", valor: "Secretaría" },
    { etiqueta: "Entrega de módulos", valor: "Ver Calendario escolar" },
    { etiqueta: "Alcance", valor: "Estudiantes becados" },
  ] as DatoDestacado[],
}
