"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"
import type { Rol, Anio, ContenidoBase } from "@/lib/types"
import { ROL_DEFAULT } from "@/lib/data/roles"

type AnioSeleccion = Anio | "todos"

interface SeleccionContextValue {
  rol: Rol
  anio: AnioSeleccion
  setRol: (rol: Rol) => void
  setAnio: (anio: AnioSeleccion) => void
  // Devuelve true si el contenido debe verse con la selección actual
  visiblePara: (contenido: Pick<ContenidoBase, "roles" | "anios">) => boolean
}

const SeleccionContext = createContext<SeleccionContextValue | null>(null)

export function SeleccionProvider({ children }: { children: ReactNode }) {
  const [rol, setRol] = useState<Rol>(ROL_DEFAULT)
  const [anio, setAnio] = useState<AnioSeleccion>("todos")

  const visiblePara = useCallback(
    (contenido: Pick<ContenidoBase, "roles" | "anios">) => {
      // Coincidencia por rol: si el contenido no restringe roles, se ve siempre.
      const coincideRol = contenido.roles.length === 0 || contenido.roles.includes(rol)
      // Coincidencia por año: "todos" ve todo; contenido sin años aplica a todos.
      const coincideAnio =
        anio === "todos" || contenido.anios.length === 0 || contenido.anios.includes(anio)
      return coincideRol && coincideAnio
    },
    [rol, anio],
  )

  return (
    <SeleccionContext.Provider value={{ rol, anio, setRol, setAnio, visiblePara }}>
      {children}
    </SeleccionContext.Provider>
  )
}

export function useSeleccion() {
  const ctx = useContext(SeleccionContext)
  if (!ctx) throw new Error("useSeleccion debe usarse dentro de SeleccionProvider")
  return ctx
}
