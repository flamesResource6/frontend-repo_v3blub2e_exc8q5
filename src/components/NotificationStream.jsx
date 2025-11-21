import React from 'react'
import { motion } from 'framer-motion'
import { Lightbulb, CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react'

const items = [
  { title: 'Deck insights ready', detail: 'Top 3 strengths, 2 flagged risks. Suggest tightening TAM slide.', action: 'Apply fixes', accent: 'yellow' },
  { title: 'Meeting moved', detail: 'VC sync shifted 30m; conflicts with roadmap review. Proposed swap prepared.', action: 'Review changes', accent: 'cyan' },
  { title: 'Lead warmed up', detail: '3 signals from LinkedIn. Personalized opener drafted.', action: 'Send outreach', accent: 'green' },
]

export default function NotificationStream() {
  return (
    <div className="space-y-3">
      {items.map((n, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.1 + i * 0.06, duration: 0.45 } }}
          className={`group rounded-xl border p-4 bg-slate-900/60 backdrop-blur ${n.accent === 'yellow' ? 'border-yellow-300/30' : n.accent === 'green' ? 'border-green-300/30' : 'border-cyan-300/30'}`}
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="text-slate-100 text-sm font-semibold mb-1">{n.title}</div>
              <div className="text-slate-400 text-xs">{n.detail}</div>
            </div>
            <button className="inline-flex items-center gap-2 text-xs px-2.5 py-1.5 rounded border border-white/10 hover:border-white/20 hover:bg-white/5 text-slate-200">
              {n.action} <ArrowRight size={14} className="opacity-80 group-hover:translate-x-0.5 transition" />
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
