import { motion } from 'framer-motion'

function Hero() {
  return (
    <section id="home" className="relative flex min-h-[92vh] items-center justify-center overflow-hidden bg-[#0A0A0A]">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(59,130,246,0.15),transparent_45%)]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.h1 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-4xl font-extrabold tracking-tight text-white md:text-6xl">
          We Build Websites That Make You Earn More.
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }} className="mx-auto mt-4 max-w-2xl text-blue-100/80">
          Complete website + SEO + AI optimization in one monthly subscription.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }} className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#pricing" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_24px_#3B82F633] transition-all hover:bg-blue-500 hover:shadow-[0_0_24px_#3B82F6]">
            Get Started
          </a>
          <a href="#contact" className="inline-flex items-center justify-center rounded-xl border border-slate-700 bg-transparent px-6 py-3 text-sm font-semibold text-slate-200 transition-all hover:border-slate-500 hover:bg-slate-800/40">
            Contact Us
          </a>
        </motion.div>
        <div className="mt-16 animate-bounce text-blue-300/60">Scroll</div>
      </div>
    </section>
  )
}

export default Hero
