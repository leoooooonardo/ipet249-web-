'use client'

import { Calendar, ArrowRight } from 'lucide-react'

export function Noticias() {
  const news = [
    {
      id: 1,
      title: 'Convocatoria de Admisión 2025',
      date: '15 de enero, 2025',
      category: 'Convocatoria',
      excerpt: 'Abierta la inscripción para los estudiantes que deseen ingresar a primer año. Consulta los requisitos y fechas importantes en nuestra sección de admisión.',
    },
    {
      id: 2,
      title: 'Taller de Automatización Industrial',
      date: '22 de enero, 2025',
      category: 'Actividad Académica',
      excerpt: 'Estudiantes de Electrónica participarán en un taller especial de sistemas automatizados. Colaboración con empresas del sector.',
    },
    {
      id: 3,
      title: 'Expo Técnica IPET 249',
      date: '28 de febrero, 2025',
      category: 'Evento',
      excerpt: 'Muestra de proyectos finales de nuestros estudiantes. Exhibición de trabajos en Automotores, Informática, Mecánica y Electrónica.',
    },
  ]

  return (
    <section id="noticias" className="section-padding" style={{ backgroundColor: 'var(--surface)' }}>
      <div className="container-max space-y-12">
        {/* Heading */}
        <div className="space-y-3 max-w-2xl">
          <h2 className="text-4xl md:text-4xl font-display font-bold" style={{ color: 'var(--black-primary)' }}>
            Noticias & Novedades
          </h2>
          <p className="text-lg" style={{ color: 'var(--foreground-secondary)' }}>
            Mantente actualizado sobre las actividades académicas y convocatorias de nuestra institución.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {news.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col p-6 rounded hover:shadow-md transition-all"
              style={{ backgroundColor: 'var(--surface-alt)', borderWidth: '2px', borderColor: 'var(--border)' }}
            >
              {/* Category Badge */}
              <div className="mb-4 inline-block">
                <span className="px-3 py-1 text-xs font-mono font-medium rounded" style={{ backgroundColor: 'rgba(161, 58, 46, 0.1)', color: 'var(--red-oxide)' }}>
                  {item.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-display font-bold mb-3 group-hover:opacity-80 transition-opacity" style={{ color: 'var(--black-primary)' }}>
                {item.title}
              </h3>

              {/* Date */}
              <div className="flex items-center gap-2 text-sm mb-4" style={{ color: 'var(--foreground-secondary)' }}>
                <Calendar className="w-4 h-4" style={{ color: 'var(--gold-primary)' }} />
                <span className="font-mono">{item.date}</span>
              </div>

              {/* Excerpt */}
              <p className="flex-1 mb-6" style={{ color: 'var(--foreground-secondary)' }}>
                {item.excerpt}
              </p>

              {/* Read More */}
              <button className="inline-flex items-center font-medium text-sm transition-all group/btn" style={{ color: 'var(--red-oxide)' }}>
                Leer más
                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center pt-6">
          <button className="inline-flex items-center px-6 py-3 rounded font-medium transition-all" style={{ borderWidth: '2px', borderColor: 'var(--red-oxide)', color: 'var(--red-oxide)' }}>
            Ver todas las noticias
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </section>
  )
}
