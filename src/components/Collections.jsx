import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '€29',
      period: '/month',
      features: ['Modern website', 'Basic SEO', 'Monthly updates', 'Analytics dashboard'],
      recommended: false,
    },
    {
      name: 'Growth',
      price: '€59',
      period: '/month',
      features: ['Everything from Starter', 'Advanced SEO', 'AI Search Optimization', 'Social media post setup', 'Priority support'],
      recommended: true,
    },
    {
      name: 'Pro',
      price: '€119',
      period: '/month',
      features: ['Everything from Growth', 'Full branding support', 'Content rewriting', 'Monthly consulting'],
      recommended: false,
    },
  ]

  return (
    <section id="pricing" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">Monthly Pricing</h2>
        <p className="mx-auto mt-3 max-w-xl text-blue-100/80">Simple, transparent, everything included.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan, idx) => (
          <motion.div key={plan.name} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 * idx }} className={`relative rounded-2xl border ${plan.recommended ? 'border-blue-500/50 bg-blue-500/10' : 'border-white/10 bg-white/5'} p-6 shadow-lg ring-1 ring-white/10`}>
            {plan.recommended && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white shadow-[0_0_16px_#3B82F6]">
                Recommended
              </span>
            )}
            <div className="flex items-end justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                <p className="mt-1 flex items-baseline gap-1 text-white">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  <span className="text-sm text-blue-200/80">{plan.period}</span>
                </p>
              </div>
              <a href="#contact" className="rounded-xl border border-slate-700 bg-blue-600/90 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-blue-500 hover:shadow-[0_0_18px_#3B82F6]">
                Choose Plan
              </a>
            </div>
            <ul className="mt-6 space-y-3">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-blue-100/90">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-blue-400" /> {f}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Pricing
