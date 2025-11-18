import { motion } from 'framer-motion'
import { PenTool, Ruler, Hammer, Send } from 'lucide-react'

const steps = [
  { icon: PenTool, title: 'Design', desc: 'Share your idea or inspiration and we sketch concepts together.' },
  { icon: Ruler, title: 'Prototype', desc: 'We define size, texture, and finishes for a perfect fit.' },
  { icon: Hammer, title: 'Forge', desc: 'Our artisans handcraft the piece in 925 silver with care.' },
  { icon: Send, title: 'Deliver', desc: 'Receive your custom piece with care instructions and polish cloth.' },
]

function Process() {
  return (
    <section id="process" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">How it works</h2>
        <p className="mx-auto mt-3 max-w-2xl text-blue-100/80">A clear, collaborative process from idea to heirloom.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-4">
        {steps.map((s, i) => (
          <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center ring-1 ring-white/10">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-lg shadow-blue-500/30">
              <s.icon className="h-6 w-6" />
            </div>
            <h3 className="font-semibold text-white">{s.title}</h3>
            <p className="mt-2 text-sm text-blue-100/80">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Process
