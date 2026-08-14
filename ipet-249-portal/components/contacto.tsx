'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Send } from 'lucide-react'

export function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envío (en producción, conectar a un API real)
    setTimeout(() => {
      setSubmitStatus('success')
      setFormData({ nombre: '', email: '', asunto: '', mensaje: '' })
      setIsSubmitting(false)
      
      // Resetear estado después de 3 segundos
      setTimeout(() => setSubmitStatus('idle'), 3000)
    }, 800)
  }

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Dirección',
      value: 'Mariano Moreno 551, Barrio Observatorio, Córdoba Capital',
    },
    {
      icon: Phone,
      label: 'Teléfono',
      value: '351 433-1662 / 351 433-1663',
    },
    {
      icon: Mail,
      label: 'Email Institucional',
      value: 'ee0320002@me.cba.gov.ar',
    },
    {
      icon: Mail,
      label: 'Secretaría',
      value: 'secretaria.ipet249@ipet249.edu.ar',
    },
  ]

  return (
    <section id="contacto" className="section-padding" style={{ backgroundColor: 'var(--surface-alt)' }}>
      <div className="container-max space-y-12">
        {/* Heading */}
        <div className="space-y-3 max-w-2xl">
          <h2 className="text-4xl md:text-4xl font-display font-bold" style={{ color: 'var(--black-primary)' }}>
            Contacto
          </h2>
          <p className="text-lg" style={{ color: 'var(--foreground-secondary)' }}>
            ¿Tienes preguntas? Nos encantaría escucharte. Ponte en contacto directamente o completa el formulario.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="md:col-span-1 space-y-6">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon
              return (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 pt-1">
                    <Icon className="w-6 h-6" style={{ color: 'var(--red-oxide)' }} />
                  </div>
                  <div>
                    <p className="font-display font-bold mb-1" style={{ color: 'var(--black-primary)' }}>
                      {info.label}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--foreground-secondary)' }}>
                      {info.value}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Nombre */}
                <div>
                  <label
                    htmlFor="nombre"
                    className="block text-sm font-medium mb-2"
                    style={{ color: 'var(--black-primary)' }}
                  >
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded focus:outline-none focus:ring-2 transition-all"
                    style={{ 
                      borderWidth: '1px',
                      borderColor: 'var(--border)',
                      backgroundColor: 'var(--surface)',
                      color: 'var(--foreground)',
                      '--tw-ring-color': 'var(--accent)'
                    } as any}
                    placeholder="Tu nombre"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                    style={{ color: 'var(--black-primary)' }}
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded focus:outline-none focus:ring-2 transition-all"
                    style={{ 
                      borderWidth: '1px',
                      borderColor: 'var(--border)',
                      backgroundColor: 'var(--surface)',
                      color: 'var(--foreground)'
                    } as any}
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              {/* Asunto */}
              <div>
                <label
                  htmlFor="asunto"
                  className="block text-sm font-medium mb-2"
                  style={{ color: 'var(--black-primary)' }}
                >
                  Asunto *
                </label>
                <input
                  type="text"
                  id="asunto"
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded focus:outline-none focus:ring-2 transition-all"
                  style={{ 
                    borderWidth: '1px',
                    borderColor: 'var(--border)',
                    backgroundColor: 'var(--surface)',
                    color: 'var(--foreground)'
                  } as any}
                  placeholder="¿Cuál es tu consulta?"
                />
              </div>

              {/* Mensaje */}
              <div>
                <label
                  htmlFor="mensaje"
                  className="block text-sm font-medium mb-2"
                  style={{ color: 'var(--black-primary)' }}
                >
                  Mensaje *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 rounded focus:outline-none focus:ring-2 transition-all resize-none"
                  style={{ 
                    borderWidth: '1px',
                    borderColor: 'var(--border)',
                    backgroundColor: 'var(--surface)',
                    color: 'var(--foreground)'
                  } as any}
                  placeholder="Cuéntanos tu consulta..."
                />
              </div>

              {/* Submit Status */}
              {submitStatus === 'success' && (
                <div className="p-4 rounded" style={{ backgroundColor: '#f0fdf4', borderWidth: '1px', borderColor: '#dcfce7' }}>
                  <p className="text-sm font-medium" style={{ color: '#166534' }}>
                    ✓ Mensaje enviado correctamente. Nos pondremos en contacto pronto.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 rounded" style={{ backgroundColor: '#fef2f2', borderWidth: '1px', borderColor: '#fecaca' }}>
                  <p className="text-sm font-medium" style={{ color: '#991b1b' }}>
                    Error al enviar. Por favor, intenta nuevamente.
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center px-6 py-3 rounded font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ backgroundColor: 'var(--red-oxide)', color: 'var(--white-off)' }}
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin inline-block w-4 h-4 mr-2 border-2 rounded-full" style={{ borderColor: 'var(--surface)', borderTopColor: 'transparent' }} />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar Mensaje
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </button>

              <p className="text-xs text-center" style={{ color: 'var(--muted)' }}>
                Los campos marcados con * son obligatorios.
              </p>
            </form>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-12 w-full h-96 rounded flex items-center justify-center" style={{ background: 'linear-gradient(to bottom right, rgba(212, 167, 44, 0.08), rgba(161, 58, 46, 0.05))', borderWidth: '2px', borderColor: 'var(--gold-primary)' }}>
          <div className="text-center space-y-3">
            <MapPin className="w-12 h-12 mx-auto opacity-60" style={{ color: 'var(--red-oxide)' }} />
            <p className="font-mono" style={{ color: 'var(--foreground-secondary)' }}>
              Ubicación: Mariano Moreno 551, Córdoba
            </p>
            <p className="text-sm" style={{ color: 'var(--muted)' }}>
              Mapa interactivo próximamente
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
