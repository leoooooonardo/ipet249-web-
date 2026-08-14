"use client"

// PROTOTIPO: autenticación simulada 100% client-side, sin backend.
// Sirve para demostrar el flujo de login y el control de acceso por rol
// de la Fase 5. No persiste datos ni valida credenciales reales.

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"
import type { Rol } from "@/lib/types"

export interface UsuarioDemo {
  nombre: string
  email: string
  rol: Rol
}

interface AuthContextValue {
  usuario: UsuarioDemo | null
  ingresar: (usuario: UsuarioDemo) => void
  salir: () => void
  // Roles con permiso de administración (carga/edición de contenidos)
  puedeAdministrar: boolean
}

// Roles que en el prototipo tienen acceso al panel de carga.
const ROLES_ADMIN: Rol[] = ["directivo", "profesor", "preceptor"]

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState<UsuarioDemo | null>(null)

  const ingresar = useCallback((u: UsuarioDemo) => setUsuario(u), [])
  const salir = useCallback(() => setUsuario(null), [])

  const puedeAdministrar = usuario !== null && ROLES_ADMIN.includes(usuario.rol)

  return (
    <AuthContext.Provider value={{ usuario, ingresar, salir, puedeAdministrar }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAuth debe usarse dentro de AuthProvider")
  return ctx
}

export { ROLES_ADMIN }
