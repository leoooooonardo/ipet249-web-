'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{ backgroundColor: 'var(--black-primary)', color: 'var(--white-off)' }}>
      <div className="section-padding">
        <div className="container-max">
          {/* Footer Content Grid */}
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Institution Info */}
            <div className="space-y-4">
              <h3 className="font-display font-bold text-lg" style={{ color: 'var(--gold-primary)' }}>IPET 249</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Instituto Provincial de Educación Técnica "Nicolás Copérnico"
              </p>
              <p className="text-xs font-mono" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                Más de 75 años formando profesionales técnicos.
              </p>
            </div>

            {/* Secciones */}
            <div className="space-y-4">
              <h4 className="font-display font-bold text-sm" style={{ color: 'var(--gold-primary)' }}>Secciones</h4>
              <nav className="space-y-2">
                <Link href="/institucional" className="text-sm transition-colors block" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  Institucional
                </Link>
                <Link href="/academico" className="text-sm transition-colors block" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  Académico
                </Link>
                <Link href="/admisiones" className="text-sm transition-colors block" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  Admisiones
                </Link>
                <Link href="/vida-escolar" className="text-sm transition-colors block" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  Vida escolar
                </Link>
              </nav>
            </div>

            {/* Accesos rápidos */}
            <div className="space-y-4">
              <h4 className="font-display font-bold text-sm" style={{ color: 'var(--gold-primary)' }}>Accesos rápidos</h4>
              <nav className="space-y-2">
                <Link href="/academico/calendario" className="text-sm transition-colors block" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  Calendario escolar
                </Link>
                <Link href="/academico/horarios" className="text-sm transition-colors block" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  Horarios por año
                </Link>
                <Link href="/admisiones" className="text-sm transition-colors block" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  Inscripciones
                </Link>
                <Link href="/admisiones/documentacion" className="text-sm transition-colors block" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  Documentación
                </Link>
              </nav>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="font-display font-bold text-sm" style={{ color: 'var(--gold-primary)' }}>Contacto</h4>
              <div className="space-y-3 text-sm">
                <div className="flex gap-2 items-start">
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--red-oxide)' }} />
                  <span style={{ color: 'rgba(255, 255, 255, 0.8)' }}>351 433-1662</span>
                </div>
                <div className="flex gap-2 items-start">
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--red-oxide)' }} />
                  <span className="text-xs" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>ee0320002@me.cba.gov.ar</span>
                </div>
                <div className="flex gap-2 items-start">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--red-oxide)' }} />
                  <span className="text-xs" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Mariano Moreno 551, Córdoba</span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="py-8" style={{ borderTopWidth: '1px', borderColor: 'rgba(255, 255, 255, 0.2)' }}>
            {/* Footer Bottom */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
              <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                © {currentYear} IPET 249 "Nicolás Copérnico". Todos los derechos reservados.
              </p>
              <div className="flex gap-6">
                <Link
                  href="#"
                  className="transition-colors"
                  style={{ color: 'rgba(255, 255, 255, 0.7)' }}
                >
                  Privacidad
                </Link>
                <Link
                  href="#"
                  className="transition-colors"
                  style={{ color: 'rgba(255, 255, 255, 0.7)' }}
                >
                  Términos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
