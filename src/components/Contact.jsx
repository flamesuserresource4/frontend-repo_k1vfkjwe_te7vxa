import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Instagram, MessageCircle } from 'lucide-react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', business_name: '', message: '' })
  const [status, setStatus] = useState(null)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed to send')
      setStatus('Thanks! We will contact you within 24 hours.')
      setForm({ name: '', email: '', business_name: '', message: '' })
    } catch (err) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <div className="mb-6 text-left">
            <h2 className="text-3xl font-semibold text-white md:text-4xl">Contact Us</h2>
            <p className="mt-3 max-w-xl text-blue-100/80">Tell us about your business and goals — we’ll propose the best plan for you.</p>
          </div>
          <motion.form onSubmit={onSubmit} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 ring-1 ring-white/10">
            <div className="grid gap-4 md:grid-cols-2">
              <input name="name" value={form.name} onChange={onChange} placeholder="Your name" className="rounded-lg bg-white/10 px-4 py-3 text-white placeholder:text-blue-200/50 outline-none ring-1 ring-white/10 focus:ring-blue-400" required />
              <input name="email" type="email" value={form.email} onChange={onChange} placeholder="Email" className="rounded-lg bg-white/10 px-4 py-3 text-white placeholder:text-blue-200/50 outline-none ring-1 ring-white/10 focus:ring-blue-400" required />
            </div>
            <input name="business_name" value={form.business_name} onChange={onChange} placeholder="Business name" className="rounded-lg bg-white/10 px-4 py-3 text-white placeholder:text-blue-200/50 outline-none ring-1 ring-white/10 focus:ring-blue-400" />
            <textarea name="message" value={form.message} onChange={onChange} placeholder="What do you need?" rows={5} className="rounded-lg bg-white/10 px-4 py-3 text-white placeholder:text-blue-200/50 outline-none ring-1 ring-white/10 focus:ring-blue-400" required />
            <button className="mt-2 inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:bg-blue-500 hover:shadow-[0_0_24px_#3B82F6]">Send</button>
            {status && <p className="text-center text-blue-100/80">{status}</p>}
          </motion.form>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 ring-1 ring-white/10">
          <h3 className="text-white">Get in touch</h3>
          <div className="mt-4 space-y-3 text-blue-100/80">
            <p className="flex items-center gap-2"><Mail className="h-5 w-5 text-blue-400" /> hello@twip.agency</p>
            <p className="flex items-center gap-2"><Phone className="h-5 w-5 text-blue-400" /> +00 000 0000</p>
            <div className="mt-4 flex gap-3">
              <a href="#" className="inline-flex items-center justify-center rounded-xl border border-slate-700 px-3 py-2 text-sm text-slate-200 hover:bg-slate-800/40"><Instagram className="h-4 w-4" /></a>
              <a href="#" className="inline-flex items-center justify-center rounded-xl border border-slate-700 px-3 py-2 text-sm text-slate-200 hover:bg-slate-800/40"><MessageCircle className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
