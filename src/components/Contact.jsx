import { useState } from 'react'
import { motion } from 'framer-motion'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', budget: '', reference_link: '' })
  const [status, setStatus] = useState(null)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed to send')
      const data = await res.json()
      setStatus('Thanks! We will reach out within 24 hours.')
      setForm({ name: '', email: '', phone: '', message: '', budget: '', reference_link: '' })
    } catch (err) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="relative mx-auto max-w-3xl px-6 py-24">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">Start a custom design</h2>
        <p className="mx-auto mt-3 max-w-xl text-blue-100/80">Tell us about your idea and we’ll respond with sketches, pricing, and timeline.</p>
      </div>
      <motion.form onSubmit={onSubmit} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 ring-1 ring-white/10">
        <div className="grid gap-4 md:grid-cols-2">
          <input name="name" value={form.name} onChange={onChange} placeholder="Your name" className="rounded-lg bg-white/10 px-4 py-3 text-white placeholder:text-blue-200/50 outline-none ring-1 ring-white/10 focus:ring-blue-400" required />
          <input name="email" type="email" value={form.email} onChange={onChange} placeholder="Email" className="rounded-lg bg-white/10 px-4 py-3 text-white placeholder:text-blue-200/50 outline-none ring-1 ring-white/10 focus:ring-blue-400" required />
        </div>
        <input name="phone" value={form.phone} onChange={onChange} placeholder="Phone (optional)" className="rounded-lg bg-white/10 px-4 py-3 text-white placeholder:text-blue-200/50 outline-none ring-1 ring-white/10 focus:ring-blue-400" />
        <textarea name="message" value={form.message} onChange={onChange} placeholder="Describe your idea..." rows={5} className="rounded-lg bg-white/10 px-4 py-3 text-white placeholder:text-blue-200/50 outline-none ring-1 ring-white/10 focus:ring-blue-400" required />
        <div className="grid gap-4 md:grid-cols-2">
          <input name="budget" value={form.budget} onChange={onChange} placeholder="Budget (optional)" className="rounded-lg bg-white/10 px-4 py-3 text-white placeholder:text-blue-200/50 outline-none ring-1 ring-white/10 focus:ring-blue-400" />
          <input name="reference_link" value={form.reference_link} onChange={onChange} placeholder="Reference link (optional)" className="rounded-lg bg-white/10 px-4 py-3 text-white placeholder:text-blue-200/50 outline-none ring-1 ring-white/10 focus:ring-blue-400" />
        </div>
        <button className="mt-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30">Send Inquiry</button>
        {status && <p className="text-center text-blue-100/80">{status}</p>}
      </motion.form>
    </section>
  )
}

export default Contact
