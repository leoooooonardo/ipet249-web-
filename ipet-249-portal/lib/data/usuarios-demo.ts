import type { UsuarioDemo } from "@/components/providers/auth-provider"

// PROTOTIPO: cuentas de demostración. Las contraseñas son ficticias y solo
// existen para ilustrar el flujo de login de la Fase 5.
export interface CuentaDemo extends UsuarioDemo {
  password: string
  admin: boolean
}

export const CUENTAS_DEMO: CuentaDemo[] = [
  {
    nombre: "Dirección",
    email: "direccion@ipet249.edu.ar",
    password: "demo1234",
    rol: "directivo",
    admin: true,
  },
  {
    nombre: "Prof. Gómez",
    email: "profesor@ipet249.edu.ar",
    password: "demo1234",
    rol: "profesor",
    admin: true,
  },
  {
    nombre: "Preceptoría",
    email: "preceptor@ipet249.edu.ar",
    password: "demo1234",
    rol: "preceptor",
    admin: true,
  },
  {
    nombre: "Estudiante",
    email: "alumno@ipet249.edu.ar",
    password: "demo1234",
    rol: "alumno",
    admin: false,
  },
]
