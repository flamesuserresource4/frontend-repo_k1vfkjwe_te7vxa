import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

const items = [
  {
    title: 'Minimal Signets',
    desc: 'Clean geometry and bold presence.',
    img: 'https://images.unsplash.com/photo-1617038260897-41d1ff79d72e?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Forged Chains',
    desc: 'Hand-assembled links with character.',
    img: 'https://images.unsplash.com/photo-1602351447937-745cb7206129?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Textured Bands',
    desc: 'Organic surfaces and subtle shine.',
    img: 'https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?q=80&w=1600&auto=format&fit=crop',
  },
]

function Collections() {
  return (
    <section id="collections" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="mb-10 flex items-center justify-between">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">Collections</h2>
        <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-blue-100 ring-1 ring-white/15">
          <Sparkles className="h-4 w-4" /> New pieces monthly
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.1 }}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 ring-1 ring-white/10"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={card.img} alt={card.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-white">{card.title}</h3>
              <p className="mt-1 text-sm text-blue-100/80">{card.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Collections
