import { useState } from 'react'
import { Menu, X, Gem, ShoppingBag } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Collections', href: '#collections' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            <a href="#home" className="inline-flex items-center gap-2">
              <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-blue-600 shadow-lg shadow-blue-500/20">
                <Gem className="h-5 w-5 text-white" />
              </span>
              <div className="text-left">
                <p className="text-sm font-medium tracking-wide text-blue-100">Aurelius</p>
                <p className="-mt-1 text-xs text-blue-300/70">Custom Silver Atelier</p>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-blue-100/80 hover:text-white transition-colors text-sm">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/30">
                <ShoppingBag className="h-4 w-4" /> Start a Design
              </a>
            </nav>

            <button onClick={() => setOpen(!open)} className="md:hidden rounded-lg p-2 text-white/80 hover:text-white">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {open && (
            <div className="grid gap-2 border-t border-white/10 p-4 md:hidden">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-blue-100/90 hover:bg-white/5">
                  {item.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/30">
                <ShoppingBag className="h-4 w-4" /> Start a Design
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
