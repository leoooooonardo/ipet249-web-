"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { PageHero } from "@/components/page-hero"
import { useAuth } from "@/components/providers/auth-provider"
import { useSeleccion } from "@/components/providers/seleccion-provider"
import { CUENTAS_DEMO } from "@/lib/data/usuarios-demo"
import { labelRol } from "@/lib/data/roles"
import { LogIn, ShieldCheck, Info, UserRound } from "lucide-react"

export default function IngresarPage() {
  const router = useRouter()
  const { ingresar } = useAuth()
  const { setRol } = useSeleccion()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)

  function completarSesion(cuenta: { nombre: string; email: string; rol: (typeof CUENTAS_DEMO)[number]["rol"]; admin: boolean }) {
    ingresar({ nombre: cuenta.nombre, email: cuenta.email, rol: cuenta.rol })
    setRol(cuenta.rol) // el sitio pasa a filtrarse por el rol de la sesión
    router.push(cuenta.admin ? "/panel" : "/")
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const cuenta = CUENTAS_DEMO.find(
      (c) => c.email.toLowerCase() === email.trim().toLowerCase() && c.password === password,
    )
    if (!cuenta) {
      setError("Credenciales incorrectas. Probá con una cuenta de demostración.")
      return
    }
    setError(null)
    completarSesion(cuenta)
  }

  const inputStyle = {
    borderColor: "var(--border-color)",
    backgroundColor: "var(--bg-white)",
    color: "var(--text-primary)",
  } as const

  return (
    <main>
      <PageHero
        etiqueta="Acceso"
        titulo="Ingresar al portal"
        descripcion="Iniciá sesión para cargar y editar contenidos. Prototipo de demostración: la autenticación es simulada."
        migas={[{ label: "Inicio", href: "/" }, { label: "Ingresar" }]}
      />

      <section className="mx-auto max-w-6xl px-4 md:px-8 py-10 md:py-14">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {/* Formulario */}
          <div>
            <form
              onSubmit={onSubmit}
              className="rounded-xl border p-6 md:p-8"
              style={{ borderColor: "var(--border-color)", backgroundColor: "var(--bg-white)" }}
            >
              <h2 className="text-xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
                Iniciar sesión
              </h2>

              <label className="block mb-4">
                <span className="block text-sm font-medium mb-1.5" style={{ color: "var(--text-secondary)" }}>
                  Correo institucional
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="usuario@ipet249.edu.ar"
                  className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2"
                  style={inputStyle}
                  required
                />
              </label>

              <label className="block mb-6">
                <span className="block text-sm font-medium mb-1.5" style={{ color: "var(--text-secondary)" }}>
                  Contraseña
                </span>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2"
                  style={inputStyle}
                  required
                />
              </label>

              {error && (
                <p
                  className="mb-4 rounded-md px-3 py-2 text-sm"
                  style={{ backgroundColor: "#FBEAE8", color: "var(--red-oxide)" }}
                  role="alert"
                >
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold text-white transition-colors"
                style={{ backgroundColor: "var(--red-oxide)" }}
              >
                <LogIn className="w-4 h-4" aria-hidden="true" />
                Ingresar
              </button>
            </form>
          </div>

          {/* Cuentas de demostración */}
          <div>
            <div
              className="mb-4 flex items-start gap-2 rounded-lg border px-4 py-3"
              style={{ borderColor: "var(--border-color)", backgroundColor: "var(--bg-light)" }}
            >
              <Info className="mt-0.5 w-4 h-4 shrink-0" style={{ color: "var(--gold-primary)" }} aria-hidden="true" />
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Este es un <strong>prototipo</strong>. Elegí una cuenta para ver el flujo. Los roles
                administrativos acceden al panel de carga; el resto vuelve al inicio con el sitio filtrado por su rol.
              </p>
            </div>

            <h3 className="text-sm font-semibold font-mono mb-3" style={{ color: "var(--text-muted)" }}>
              CUENTAS DE DEMOSTRACIÓN
            </h3>
            <ul className="flex flex-col gap-3">
              {CUENTAS_DEMO.map((c) => (
                <li key={c.email}>
                  <button
                    onClick={() => completarSesion(c)}
                    className="flex w-full items-center gap-3 rounded-lg border p-4 text-left transition-colors hover:border-[var(--gold-primary)]"
                    style={{ borderColor: "var(--border-color)", backgroundColor: "var(--bg-white)" }}
                  >
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                      style={{ backgroundColor: "var(--bg-light)", color: "var(--gold-primary)" }}
                    >
                      {c.admin ? (
                        <ShieldCheck className="w-5 h-5" aria-hidden="true" />
                      ) : (
                        <UserRound className="w-5 h-5" aria-hidden="true" />
                      )}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                        {c.nombre}
                        <span
                          className="ml-2 rounded px-1.5 py-0.5 text-[10px] font-mono uppercase"
                          style={{
                            backgroundColor: c.admin ? "var(--gold-primary)" : "var(--bg-light)",
                            color: c.admin ? "#1A1A1A" : "var(--text-muted)",
                          }}
                        >
                          {c.admin ? "Admin" : labelRol(c.rol)}
                        </span>
                      </span>
                      <span className="block truncate text-xs font-mono" style={{ color: "var(--text-muted)" }}>
                        {c.email} · demo1234
                      </span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
