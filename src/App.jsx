import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Pricing from './components/Collections'
import Portfolio from './components/Process'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-blue-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.08),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(147,197,253,0.06),transparent_35%)]" />
      <Navbar />
      <main className="relative">
        <Hero />
        <Pricing />
        <Portfolio />
        <section id="about" className="relative mx-auto max-w-5xl px-6 py-24">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 ring-1 ring-white/10">
            <h2 className="text-3xl font-semibold text-white md:text-4xl">Who We Are</h2>
            <p className="mt-4 text-blue-100/80">TWIP is a modern digital agency offering subscription-based websites, full SEO optimization, AI search optimization, social media creation, and complete digital maintenance. We handle everything — design, strategy, analytics, growth — so your business gets results without stress.</p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {['Modern coding', 'Fast delivery', 'AI-optimized', 'Full monthly support', 'Transparent pricing'].map((item) => (
                <li key={item} className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-blue-100/90">{item}</li>
              ))}
            </ul>
          </div>
        </section>
        <Contact />
        <footer className="border-t border-white/10 bg-black/20 py-10">
          <div className="mx-auto max-w-7xl px-6 text-center text-sm text-blue-200/70">© {new Date().getFullYear()} TWIP — Your Website, Upgraded.</div>
        </footer>
      </main>
    </div>
  )
}

export default App
