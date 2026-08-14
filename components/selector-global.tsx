"use client"

import { UserRound, GraduationCap } from "lucide-react"
import { useSeleccion } from "@/components/providers/seleccion-provider"
import { ROLES, ANIOS } from "@/lib/data/roles"
import type { Rol, Anio } from "@/lib/types"

export function SelectorGlobal({ compact = false }: { compact?: boolean }) {
  const { rol, anio, setRol, setAnio } = useSeleccion()

  const selectStyle = {
    borderColor: "var(--border-color)",
    backgroundColor: "var(--bg-white)",
    color: "var(--text-primary)",
  } as const

  return (
    <div className={`flex items-center gap-2 ${compact ? "flex-wrap" : ""}`}>
      <label className="flex items-center gap-2">
        <span className="sr-only">Ver el sitio como rol</span>
        <UserRound className="w-4 h-4" style={{ color: "var(--gold-primary)" }} aria-hidden="true" />
        <select
          value={rol}
          onChange={(e) => setRol(e.target.value as Rol)}
          className="text-sm font-medium rounded-md px-2.5 py-1.5 border cursor-pointer focus:outline-none focus:ring-2"
          style={selectStyle}
          aria-label="Ver el sitio como rol"
        >
          {ROLES.map((r) => (
            <option key={r.value} value={r.value}>
              {r.label}
            </option>
          ))}
        </select>
      </label>

      <label className="flex items-center gap-2">
        <span className="sr-only">Filtrar por año o curso</span>
        <GraduationCap className="w-4 h-4" style={{ color: "var(--gold-primary)" }} aria-hidden="true" />
        <select
          value={String(anio)}
          onChange={(e) => setAnio(e.target.value === "todos" ? "todos" : (Number(e.target.value) as Anio))}
          className="text-sm font-medium rounded-md px-2.5 py-1.5 border cursor-pointer focus:outline-none focus:ring-2"
          style={selectStyle}
          aria-label="Filtrar por año o curso"
        >
          <option value="todos">Todos los años</option>
          {ANIOS.map((a) => (
            <option key={a.value} value={a.value}>
              {a.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  )
}
