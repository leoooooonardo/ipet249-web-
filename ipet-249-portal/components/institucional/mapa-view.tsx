import { MapPin, Phone, Mail, Building } from "lucide-react"
import { PUNTOS_MAPA, DIRECCION_ESCUELA, type PuntoMapa } from "@/lib/data/institucional"

const SECTORES: PuntoMapa["sector"][] = ["Planta baja", "Primer piso", "Exterior"]

export function MapaView() {
  return (
    <section className="section-padding" style={{ backgroundColor: "var(--bg-white)" }}>
      <div className="mx-auto max-w-6xl space-y-10">
        {/* Datos de contacto / ubicación */}
        <div className="grid sm:grid-cols-3 gap-4">
          <DatoContacto icon={<MapPin className="w-5 h-5" aria-hidden="true" />} titulo="Dirección">
            {DIRECCION_ESCUELA.direccion}
          </DatoContacto>
          <DatoContacto icon={<Phone className="w-5 h-5" aria-hidden="true" />} titulo="Teléfono">
            {DIRECCION_ESCUELA.telefono}
          </DatoContacto>
          <DatoContacto icon={<Mail className="w-5 h-5" aria-hidden="true" />} titulo="Correo">
            {DIRECCION_ESCUELA.email}
          </DatoContacto>
        </div>

        {/* Sectores del edificio */}
        <div className="space-y-8">
          {SECTORES.map((sector) => {
            const puntos = PUNTOS_MAPA.filter((p) => p.sector === sector)
            if (puntos.length === 0) return null
            return (
              <div key={sector}>
                <h2
                  className="flex items-center gap-2 text-sm font-mono uppercase tracking-wide mb-4 pb-2 border-b"
                  style={{ color: "var(--gold-primary)", borderColor: "var(--border-color)" }}
                >
                  <Building className="w-4 h-4" aria-hidden="true" />
                  {sector}
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {puntos.map((p) => (
                    <article
                      key={p.id}
                      className="flex gap-3 p-4 rounded-lg"
                      style={{ backgroundColor: "var(--surface-light)", border: "1px solid var(--border-color)" }}
                    >
                      <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "var(--red-oxide)" }} aria-hidden="true" />
                      <div>
                        <h3 className="font-semibold leading-snug" style={{ color: "var(--text-primary)" }}>
                          {p.nombre}
                        </h3>
                        <p className="text-sm mt-0.5" style={{ color: "var(--text-secondary)" }}>
                          {p.descripcion}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <p className="text-sm" style={{ color: "var(--text-muted)" }}>
          Mapa indicativo de referencia. Al ingresar, el personal de portería y preceptoría te orienta hacia el sector que necesites.
        </p>
      </div>
    </section>
  )
}

function DatoContacto({
  icon,
  titulo,
  children,
}: {
  icon: React.ReactNode
  titulo: string
  children: React.ReactNode
}) {
  return (
    <div
      className="p-5 rounded-lg"
      style={{ backgroundColor: "var(--bg-light)", border: "1px solid var(--border-color)" }}
    >
      <div className="flex items-center gap-2 mb-1.5" style={{ color: "var(--gold-primary)" }}>
        {icon}
        <span className="text-xs font-mono uppercase tracking-wide">{titulo}</span>
      </div>
      <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
        {children}
      </p>
    </div>
  )
}
