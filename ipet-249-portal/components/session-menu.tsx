"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { LogIn, LogOut, LayoutDashboard, ChevronDown, ShieldCheck, UserRound } from "lucide-react"
import { useAuth } from "@/components/providers/auth-provider"
import { labelRol } from "@/lib/data/roles"

export function SessionMenu({ onNavigate }: { onNavigate?: () => void }) {
  const router = useRouter()
  const { usuario, puedeAdministrar, salir } = useAuth()
  const [open, setOpen] = useState(false)

  if (!usuario) {
    return (
      <Link
        href="/ingresar"
        onClick={onNavigate}
        className="inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-semibold text-white transition-colors"
        style={{ backgroundColor: "var(--red-oxide)" }}
      >
        <LogIn className="w-4 h-4" aria-hidden="true" />
        Ingresar
      </Link>
    )
  }

  function cerrarSesion() {
    salir()
    setOpen(false)
    onNavigate?.()
    router.push("/")
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-sm font-medium transition-colors"
        style={{ borderColor: "var(--border-color)", backgroundColor: "var(--bg-white)", color: "var(--text-primary)" }}
        aria-expanded={open}
        aria-haspopup="menu"
      >
        <span
          className="flex h-6 w-6 items-center justify-center rounded-full"
          style={{ backgroundColor: "var(--bg-light)", color: "var(--gold-primary)" }}
        >
          {puedeAdministrar ? <ShieldCheck className="w-3.5 h-3.5" /> : <UserRound className="w-3.5 h-3.5" />}
        </span>
        <span className="max-w-[8rem] truncate">{usuario.nombre}</span>
        <ChevronDown className="w-3.5 h-3.5" aria-hidden="true" />
      </button>

      {open && (
        <div
          className="absolute right-0 top-full mt-1 w-56 overflow-hidden rounded-lg shadow-lg"
          style={{ backgroundColor: "var(--bg-white)", borderColor: "var(--border-color)", borderWidth: "1px" }}
          role="menu"
        >
          <div className="px-4 py-3 border-b" style={{ borderColor: "var(--border-color)" }}>
            <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
              {usuario.nombre}
            </p>
            <p className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
              {labelRol(usuario.rol)}
            </p>
          </div>
          {puedeAdministrar && (
            <Link
              href="/panel"
              onClick={() => {
                setOpen(false)
                onNavigate?.()
              }}
              className="flex items-center gap-2 px-4 py-2.5 text-sm transition-colors hover:bg-[var(--bg-light)]"
              style={{ color: "var(--text-primary)" }}
            >
              <LayoutDashboard className="w-4 h-4" aria-hidden="true" />
              Panel de gestión
            </Link>
          )}
          <button
            onClick={cerrarSesion}
            className="flex w-full items-center gap-2 px-4 py-2.5 text-sm transition-colors hover:bg-[var(--bg-light)]"
            style={{ color: "var(--red-oxide)" }}
          >
            <LogOut className="w-4 h-4" aria-hidden="true" />
            Cerrar sesión
          </button>
        </div>
      )}
    </div>
  )
}
