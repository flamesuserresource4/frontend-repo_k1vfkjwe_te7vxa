import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Collections from './components/Collections'
import Process from './components/Process'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-blue-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.08),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(147,197,253,0.06),transparent_35%)]" />
      <Navbar />
      <main className="relative">
        <Hero />
        <Collections />
        <Process />
        <Contact />
        <footer className="border-t border-white/10 bg-black/20 py-10">
          <div className="mx-auto max-w-7xl px-6 text-center text-sm text-blue-200/70">© {new Date().getFullYear()} Aurelius — Custom Silver Jewelry. All rights reserved.</div>
        </footer>
      </main>
    </div>
  )
}

export default App
