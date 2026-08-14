'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: 'var(--bg-white)' }}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute top-0 right-0 w-96 h-96 opacity-5" style={{ background: 'radial-gradient(circle, var(--gold-primary), transparent)' }}></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 opacity-3" style={{ background: 'radial-gradient(circle, var(--red-oxide), transparent)' }}></div>
        
        {/* Decorative engranajes (gears) */}
        <svg className="absolute top-10 right-20 w-32 h-32 opacity-5" viewBox="0 0 100 100" style={{ color: 'var(--gold-primary)' }}>
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2"/>
          {[0, 60, 120, 180, 240, 300].map((angle) => (
            <g key={angle} transform={`rotate(${angle} 50 50)`}>
              <rect x="48" y="10" width="4" height="15" fill="currentColor"/>
            </g>
          ))}
        </svg>
      </div>

      <div className="container-max px-4 py-12 md:px-8 relative z-10">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          {/* Left Content - spans 7 columns */}
          <div className="md:col-span-7 space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-semibold font-mono" style={{ color: 'var(--gold-primary)' }}>
                FORMACIÓN TÉCNICA PROFESIONAL
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight" style={{ color: 'var(--text-primary)' }}>
                Excelencia en <br />
                <span style={{ color: 'var(--gold-primary)' }}>Educación</span>
              </h1>
              <p className="text-lg leading-relaxed max-w-lg" style={{ color: 'var(--text-secondary)' }}>
                Más de 75 años formando profesionales técnicos comprometidos con la innovación y la calidad. Tu futuro comienza aquí.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="#especialidades"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold transition-all group"
                style={{ backgroundColor: 'var(--red-oxide)', color: 'var(--bg-white)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--red-bright)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--red-oxide)'
              }}
              >
                Explorar Carreras
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#contacto"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold transition-all"
                style={{ borderWidth: '2px', borderColor: 'var(--gold-primary)', color: 'var(--gold-primary)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(212, 167, 44, 0.1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                }}
              >
                Contacto
              </Link>
            </div>
          </div>

          {/* Right Side - Large 249 */}
          <div className="md:col-span-5 relative h-96 md:h-full flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Background circle with glow */}
                <div className="absolute inset-0 rounded-full opacity-20 blur-3xl" style={{ backgroundColor: 'var(--red-oxide)', width: '300px', height: '300px', left: '-150px', top: '-150px' }}></div>
                
                {/* Number 249 */}
                <div className="text-9xl md:text-8xl font-bold leading-none" style={{ color: 'var(--gold-primary)', textShadow: '0 0 40px rgba(212, 167, 44, 0.3)' }}>
                  249
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats row below */}
        <div className="grid grid-cols-3 gap-6 mt-16 pt-8" style={{ borderColor: 'var(--border-color)', borderTopWidth: '1px' }}>
          <div>
            <p className="text-3xl font-bold" style={{ color: 'var(--gold-primary)' }}>75+</p>
            <p className="text-sm mt-2" style={{ color: 'var(--text-secondary)' }}>Años de historia</p>
          </div>
          <div>
            <p className="text-3xl font-bold" style={{ color: 'var(--gold-primary)' }}>4</p>
            <p className="text-sm mt-2" style={{ color: 'var(--text-secondary)' }}>Especialidades</p>
          </div>
          <div>
            <p className="text-3xl font-bold" style={{ color: 'var(--gold-primary)' }}>3000+</p>
            <p className="text-sm mt-2" style={{ color: 'var(--text-secondary)' }}>Egresados activos</p>
          </div>
        </div>
      </div>
    </section>
  )
}
