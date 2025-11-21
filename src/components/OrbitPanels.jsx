import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Bell, CheckCircle2, Settings, Mic, Zap, Cpu, Link2 } from 'lucide-react'

const panelVariants = {
  initial: { opacity: 0, y: 20, scale: 0.98 },
  animate: (i) => ({ opacity: 1, y: 0, scale: 1, transition: { delay: 0.2 + i * 0.08, duration: 0.5, ease: 'easeOut' } })
}

function Panel({ icon: Icon, title, children, i, accent = 'cyan' }) {
  const accentRing = accent === 'yellow' ? 'from-yellow-400/30 via-transparent to-transparent' : accent === 'green' ? 'from-green-400/30 via-transparent to-transparent' : 'from-cyan-400/30 via-transparent to-transparent'
  const borderColor = accent === 'yellow' ? 'border-yellow-400/30' : accent === 'green' ? 'border-green-400/30' : 'border-cyan-400/30'
  const textColor = accent === 'yellow' ? 'text-yellow-300' : accent === 'green' ? 'text-green-300' : 'text-cyan-300'

  return (
    <motion.div
      custom={i}
      variants={panelVariants}
      initial="initial"
      animate="animate"
      className={`relative rounded-2xl bg-slate-900/60 border ${borderColor} p-4 sm:p-5 backdrop-blur group`}
    >
      <div className={`pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-b ${accentRing} opacity-0 group-hover:opacity-100 transition-opacity`} />
      <div className="relative flex items-center gap-3 mb-3">
        <div className={`w-9 h-9 rounded-xl bg-white/5 border ${borderColor} flex items-center justify-center`}> 
          <Icon className={`${textColor}`} size={18} />
        </div>
        <div className="text-slate-200 font-medium">{title}</div>
      </div>
      <div className="relative text-slate-300/90 text-sm leading-relaxed">
        {children}
      </div>
    </motion.div>
  )
}

export default function OrbitPanels() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-5">
      <Panel i={0} icon={Mic} title="Voice Command" accent="cyan">
        Speak to Aether and watch the waveform react to your tone. Real-time parsing, entity extraction, and intent routing.
      </Panel>
      <Panel i={1} icon={Bell} title="Actionable Notifications" accent="yellow">
        Insight-first updates. Each alert proposes next steps with glowing badges and micro-interactions.
      </Panel>
      <Panel i={2} icon={Calendar} title="Calendar Intelligence" accent="green">
        Upcoming events, conflicts, and schedule links animate directly to related tasks.
      </Panel>
      <Panel i={3} icon={Settings} title="Autonomy Controls" accent="cyan">
        Preferences and guardrails that Aether learns from—subtle, adaptive defaults over time.
      </Panel>
    </div>
  )
}
