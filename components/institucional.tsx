'use client'

export function Institucional() {
  const milestones = [
    {
      year: '1947',
      title: 'Fundación',
      description: 'Nace como Escuela Fábrica de la Nación N° 23',
    },
    {
      year: '1969',
      title: 'Sede Propia',
      description: 'Inauguración del edificio en Mariano Moreno 551',
    },
    {
      year: '1972',
      title: 'Nuevo Nombre',
      description: 'Adopta el nombre "Nicolás Copérnico"',
    },
    {
      year: '1996',
      title: 'IPEM N° 249',
      description: 'Cambio de denominación institucional',
    },
    {
      year: '2010',
      title: 'IPET 249',
      description: 'Adopta su actual sigla como Instituto Provincial de Educación Técnica',
    },
  ]

  return (
    <section id="institucional" className="section-padding" style={{ backgroundColor: 'var(--surface)' }}>
      <div className="container-max space-y-12">
        {/* Heading */}
        <div className="space-y-3 max-w-2xl">
          <h2 className="text-4xl md:text-4xl font-display font-bold" style={{ color: 'var(--black-primary)' }}>
            Nuestra Historia
          </h2>
          <p className="text-lg" style={{ color: 'var(--foreground-secondary)' }}>
            Más de siete décadas formando técnicos comprometidos con la excelencia. Desde nuestros orígenes en 1947, hemos estado ligados al desarrollo industrial y tecnológico de Córdoba.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <div key={milestone.year} className="flex gap-8">
              {/* Timeline connector */}
              <div className="flex flex-col items-center">
                {/* Year circle */}
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center font-display font-bold text-sm md:text-base flex-shrink-0" style={{ backgroundColor: 'var(--gold-primary)', color: 'var(--black-primary)', borderWidth: '2px', borderColor: 'var(--red-oxide)' }}>
                  {milestone.year}
                </div>
                {/* Vertical line */}
                {index < milestones.length - 1 && (
                  <div className="w-1 h-24 mt-2" style={{ background: 'linear-gradient(to bottom, var(--gold-primary), var(--red-oxide))' }} />
                )}
              </div>

              {/* Content */}
              <div className="pt-2 pb-8">
                <h3 className="text-xl font-display font-bold mb-2" style={{ color: 'var(--black-primary)' }}>
                  {milestone.title}
                </h3>
                <p style={{ color: 'var(--foreground-secondary)' }}>
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
