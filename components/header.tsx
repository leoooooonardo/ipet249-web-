"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { NAVEGACION } from "@/lib/data/navegacion"
import { SelectorGlobal } from "@/components/selector-global"
import { SessionMenu } from "@/components/session-menu"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <header
      className="sticky top-0 z-50 shadow-sm"
      style={{ backgroundColor: "var(--bg-white)", borderColor: "var(--border-color)", borderBottomWidth: "1px" }}
    >
      {/* Fila principal */}
      <div className="mx-auto max-w-6xl px-4 py-3 md:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo + Escudo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
            <div className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 transition-transform group-hover:scale-110">
              <Image
                src="/escudo-ipet-oficial.png"
                alt="Escudo Oficial IPET 249 Nicolás Copérnico"
                width={56}
                height={56}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="hidden sm:flex flex-col justify-center">
              <span className="text-base md:text-lg font-bold leading-tight" style={{ color: "var(--gold-primary)" }}>
                IPET 249
              </span>
              <span className="text-xs font-mono leading-tight" style={{ color: "var(--text-secondary)" }}>
                Nicolás Copérnico
              </span>
            </div>
          </Link>

          {/* Menú desktop por categorías */}
          <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
            {NAVEGACION.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-sm font-medium px-3 py-2 rounded-md transition-colors"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {item.label}
                  <ChevronDown className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
                {openDropdown === item.label && (
                  <div
                    className="absolute top-full left-0 pt-1 w-60"
                    role="menu"
                    aria-label={item.label}
                  >
                    <div
                      className="rounded-lg shadow-lg overflow-hidden"
                      style={{ backgroundColor: "var(--bg-white)", borderColor: "var(--border-color)", borderWidth: "1px" }}
                    >
                      <p className="px-4 pt-3 pb-2 text-xs font-mono" style={{ color: "var(--text-muted)" }}>
                        {item.descripcion}
                      </p>
                      {item.subitems.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.disponible ? sub.href : item.href}
                          className="flex items-center justify-between px-4 py-2.5 text-sm transition-colors hover:bg-[var(--bg-light)]"
                          style={{ color: sub.disponible ? "var(--text-primary)" : "var(--text-muted)" }}
                        >
                          {sub.label}
                          {!sub.disponible && (
                            <span className="text-[10px] font-mono uppercase" style={{ color: "var(--gold-primary)" }}>
                              pronto
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Selector global desktop + botón mobile */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="hidden xl:block">
              <SelectorGlobal />
            </div>
            <div className="hidden lg:block">
              <SessionMenu />
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg transition-colors"
              style={{ color: "var(--text-primary)", backgroundColor: isMenuOpen ? "var(--bg-light)" : "transparent" }}
              aria-label="Abrir menú"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Barra del selector global (transversal, siempre visible salvo en xl donde va arriba) */}
      <div
        className="hidden lg:block xl:hidden border-t"
        style={{ borderColor: "var(--border-color)", backgroundColor: "var(--bg-light)" }}
      >
        <div className="mx-auto max-w-6xl px-4 md:px-8 py-2 flex items-center gap-3">
          <span className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
            Viendo como
          </span>
          <SelectorGlobal />
        </div>
      </div>

      {/* Menú mobile */}
      {isMenuOpen && (
        <nav
          className="lg:hidden border-t"
          style={{ borderColor: "var(--border-color)", backgroundColor: "var(--bg-white)" }}
        >
          <div className="mx-auto max-w-6xl px-4 py-4">
            <div
              className="mb-4 p-3 rounded-lg"
              style={{ backgroundColor: "var(--bg-light)" }}
            >
              <p className="text-xs font-mono mb-2" style={{ color: "var(--text-muted)" }}>
                Viendo como
              </p>
              <SelectorGlobal compact />
              <div className="mt-3 pt-3 border-t" style={{ borderColor: "var(--border-color)" }}>
                <SessionMenu onNavigate={() => setIsMenuOpen(false)} />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              {NAVEGACION.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="block py-2 text-sm font-bold"
                    style={{ color: "var(--gold-primary)" }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  <div className="flex flex-col pl-3 pb-2">
                    {item.subitems.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.disponible ? sub.href : item.href}
                        className="flex items-center justify-between py-1.5 text-sm"
                        style={{ color: sub.disponible ? "var(--text-secondary)" : "var(--text-muted)" }}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {sub.label}
                        {!sub.disponible && (
                          <span className="text-[10px] font-mono uppercase" style={{ color: "var(--gold-primary)" }}>
                            pronto
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
