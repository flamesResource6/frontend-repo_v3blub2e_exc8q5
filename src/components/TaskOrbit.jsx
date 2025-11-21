import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Play, Pause, Clock, Zap } from 'lucide-react'

function ProgressBar({ value, accent='cyan' }) {
  const color = accent === 'green' ? 'from-green-400 via-green-300 to-white' : accent === 'yellow' ? 'from-yellow-400 via-yellow-300 to-white' : 'from-cyan-400 via-cyan-300 to-white'
  return (
    <div className="w-full h-2 rounded bg-white/5 overflow-hidden">
      <div className={`h-full bg-gradient-to-r ${color}`} style={{ width: `${value}%`, filter: 'drop-shadow(0 0 8px rgba(34,197,94,0.4))' }} />
    </div>
  )
}

function TaskCard({ task, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 0.1 + i * 0.05, duration: 0.5 } }}
      className="rounded-xl border border-white/10 bg-slate-900/60 p-4 backdrop-blur"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="text-slate-200 text-sm font-semibold">{task.title}</div>
        <div className="text-xs text-slate-400 inline-flex items-center gap-1">
          <Clock size={14} /> {task.eta}
        </div>
      </div>
      <div className="text-slate-400 text-xs mb-3">{task.desc}</div>
      <ProgressBar value={task.progress} accent={task.accent} />
      <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
        <div className="inline-flex items-center gap-2">
          <span className="inline-flex items-center gap-1"><Zap size={14} className="text-cyan-300"/> {task.steps[0]}</span>
        </div>
        <div className="inline-flex items-center gap-2">
          <button className="px-2 py-1 rounded border border-white/10 hover:border-cyan-400/40 hover:text-cyan-300 transition">{task.progress < 100 ? 'Pause' : 'Open'}</button>
        </div>
      </div>
    </motion.div>
  )
}

export default function TaskOrbit() {
  const [tasks, setTasks] = useState([
    { title: 'Summarize investor memo', desc: 'Extract risks, asks, and KPIs', progress: 62, steps: ['Parsing sections', 'Ranking insights'], accent: 'cyan', eta: '2m' },
    { title: 'Plan Q1 roadmap', desc: 'Align features with OKRs and timeline', progress: 35, steps: ['Clustering priorities'], accent: 'green', eta: '6m' },
    { title: 'Draft outreach email', desc: 'Personalized introductions for top accounts', progress: 88, steps: ['Refining tone'], accent: 'yellow', eta: '1m' },
  ])

  useEffect(() => {
    const id = setInterval(() => {
      setTasks((prev) => prev.map(t => t.progress >= 100 ? t : { ...t, progress: Math.min(100, t.progress + Math.random() * 6) }))
    }, 1200)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
      {tasks.map((t, i) => <TaskCard key={i} task={t} i={i} />)}
    </div>
  )
}
