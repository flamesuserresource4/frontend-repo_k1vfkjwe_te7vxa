import { useState } from 'react'
import { Menu, X, Rocket } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 rounded-2xl border border-white/10 bg-[#0A0A0A]/70 backdrop-blur supports-[backdrop-filter]:bg-[#0A0A0A]/70">
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            <a href="#home" className="inline-flex items-center gap-3">
              <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 shadow-[0_0_24px_#3B82F680]">
                <Rocket className="h-5 w-5 text-white" />
              </span>
              <div className="text-left">
                <p className="text-sm font-semibold tracking-wide text-white">TWIP</p>
                <p className="-mt-1 text-xs text-blue-300/80">Your Website, Upgraded.</p>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-blue-100/80 hover:text-white transition-colors text-sm">
                  {item.label}
                </a>
              ))}
              <a href="#pricing" className="inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-500 hover:shadow-[0_0_24px_#3B82F6] px-4 py-2 text-sm font-semibold text-white transition-all">
                Get Started
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
              <a href="#pricing" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 hover:shadow-[0_0_24px_#3B82F6] px-4 py-2 text-sm font-semibold text-white transition-all">
                Get Started
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
