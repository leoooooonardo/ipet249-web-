'use client'

import { Zap, Cpu, Wrench, Zap as Engine } from 'lucide-react'

export function Especialidades() {
  const specialties = [
    {
      id: 'automotores',
      name: 'Automotores',
      icon: Engine,
      description: 'Formación integral en sistemas de motores, transmisión, dirección, frenos, electricidad y diagnóstico automotriz. Preparación para mantener, reparar y optimizar vehículos modernos.',
    },
    {
      id: 'informatica',
      name: 'Informática',
      icon: Cpu,
      description: 'Desarrollo de software, administración de sistemas, redes informáticas, bases de datos y aplicaciones. Capacitación en tecnologías actuales para la transformación digital.',
    },
    {
      id: 'mecanica',
      name: 'Mecánica',
      icon: Wrench,
      description: 'Diseño, manufactura y mantenimiento de equipos. Dominio de máquinas-herramientas, CNC, metrología, soldadura y procesos de producción industrial.',
    },
    {
      id: 'electronica',
      name: 'Electrónica',
      icon: Zap,
      description: 'Circuitos analógicos y digitales, electrónica industrial, sistemas de control, telecomunicaciones y energías renovables. Innovación en automatización y IoT.',
    },
  ]

  return (
    <section id="especialidades" className="section-padding" style={{ backgroundColor: 'var(--surface-alt)' }}>
      <div className="container-max space-y-12">
        {/* Heading */}
        <div className="space-y-3 max-w-2xl">
          <h2 className="text-4xl md:text-4xl font-display font-bold" style={{ color: 'var(--black-primary)' }}>
            Especialidades Técnicas
          </h2>
          <p className="text-lg" style={{ color: 'var(--foreground-secondary)' }}>
            Cuatro carreras de formación técnica de nivel secundario, cada una con salida laboral inmediata y validez nacional.
          </p>
        </div>

        {/* Specialty Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {specialties.map((specialty) => {
            const Icon = specialty.icon
            return (
              <div
                key={specialty.id}
                className="group p-8 rounded hover:shadow-lg transition-all duration-300"
                style={{ backgroundColor: 'var(--surface)', borderWidth: '2px', borderColor: 'var(--border)' }}
              >
                {/* Icon */}
                <div className="mb-6 inline-block p-3 rounded group-hover:opacity-100 transition-all" style={{ background: 'rgba(212, 167, 44, 0.08)', borderWidth: '1px', borderColor: 'var(--gold-primary)' }}>
                  <Icon className="w-8 h-8" style={{ color: 'var(--red-oxide)' }} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-display font-bold mb-3" style={{ color: 'var(--black-primary)' }}>
                  {specialty.name}
                </h3>

                {/* Description */}
                <p style={{ color: 'var(--foreground-secondary)' }} className="leading-relaxed">
                  {specialty.description}
                </p>

                {/* Learn more link */}
                <button className="mt-6 inline-flex items-center font-medium text-sm transition-all group/btn" style={{ color: 'var(--red-oxide)' }}>
                  Más información
                  <span className="ml-2 group-hover/btn:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            )
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-12 p-8 rounded" style={{ background: 'rgba(212, 167, 44, 0.06)', borderWidth: '2px', borderColor: 'var(--gold-primary)' }}>
          <h3 className="font-display font-bold mb-3" style={{ color: 'var(--black-primary)' }}>Título Otorgado</h3>
          <p style={{ color: 'var(--foreground-secondary)' }} className="leading-relaxed">
            Todos nuestros egresados reciben el título de <strong>Técnico de nivel secundario</strong> en su especialidad, con validez nacional. Esto les permite acceder directamente al mercado laboral o continuar estudios superiores.
          </p>
        </div>
      </div>
    </section>
  )
}
