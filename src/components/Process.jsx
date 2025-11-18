import { motion } from 'framer-motion'

function Portfolio() {
  const projects = [
    'Modern business website',
    'Restaurant website',
    'E-commerce layout',
    'Personal brand site',
    'Agency layout',
    'Local service company',
  ]

  return (
    <section id="portfolio" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">Our Websites</h2>
        <p className="mx-auto mt-3 max-w-xl text-blue-100/80">Designed for performance and growth.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((title, idx) => (
          <motion.div key={title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 ring-1 ring-white/10">
            <div className="h-40 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900" />
            <div className="mt-4 flex items-center justify-between">
              <h3 className="text-white">{title}</h3>
              <span className="text-sm text-blue-200/70">View</span>
            </div>
            <div className="absolute inset-0 -z-10 scale-105 bg-gradient-to-b from-transparent via-transparent to-blue-600/10 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Portfolio
