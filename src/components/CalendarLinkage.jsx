import React from 'react'
import { motion } from 'framer-motion'
import { CalendarDays, Link as LinkIcon, AlertTriangle } from 'lucide-react'

const events = [
  { time: '09:30', title: 'Standup', linkTasks: [0] },
  { time: '11:00', title: 'Investor sync', linkTasks: [0, 2] },
  { time: '14:00', title: 'Roadmap review', linkTasks: [1] },
]

export default function CalendarLinkage() {
  return (
    <div className="relative rounded-2xl border border-green-300/30 bg-slate-900/60 p-4 backdrop-blur">
      <div className="flex items-center justify-between mb-4">
        <div className="inline-flex items-center gap-2 text-slate-200 font-medium"><CalendarDays size={18} className="text-green-300"/> Calendar</div>
        <div className="text-xs text-slate-400">Conflicts highlighted</div>
      </div>
      <div className="space-y-3">
        {events.map((e, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.1 + i*0.05 } }} className="flex items-center justify-between py-2 px-3 rounded-lg bg-white/5 border border-white/10">
            <div className="text-xs text-slate-300">{e.time}</div>
            <div className="text-sm text-slate-100">{e.title}</div>
            <div className="text-xs text-slate-400 inline-flex items-center gap-1"><LinkIcon size={14}/> {e.linkTasks.length} linked</div>
          </motion.div>
        ))}
      </div>

      {/* Animated linkage lines (visual hint) */}
      <svg className="pointer-events-none absolute inset-0" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="glow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#a3e635" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <motion.path
          d="M 10 20 C 240 40, 120 180, 360 220"
          stroke="url(#glow)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        />
      </svg>
    </div>
  )
}
