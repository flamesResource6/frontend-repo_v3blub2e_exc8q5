import React from 'react'
import { motion } from 'framer-motion'
import { Brain, Sparkles, Shield, Cpu } from 'lucide-react'
import CommandBrain from './components/CommandBrain'
import OrbitPanels from './components/OrbitPanels'
import VoiceConsole from './components/VoiceConsole'
import TaskOrbit from './components/TaskOrbit'
import NotificationStream from './components/NotificationStream'
import CalendarLinkage from './components/CalendarLinkage'

function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-slate-300">
      {children}
    </span>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      {/* Background grid + glow */}
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 [background:radial-gradient(1200px_600px_at_50%_-10%,rgba(14,165,233,0.2),transparent_70%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,transparent,transparent_95%,rgba(255,255,255,0.03)_95%),linear-gradient(to_bottom,transparent,transparent_95%,rgba(255,255,255,0.03)_95%)] bg-[size:32px_32px]" />
      </div>

      {/* Top bar */}
      <header className="relative z-10 flex items-center justify-between px-6 sm:px-10 py-5">
        <div className="inline-flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-500 grid place-items-center shadow-[0_0_24px_rgba(34,211,238,0.4)]">
            <Cpu size={18} className="text-white" />
          </div>
          <div className="leading-tight">
            <div className="font-semibold tracking-tight">Aether</div>
            <div className="text-[10px] uppercase tracking-widest text-slate-400">Autonomous AI Assistant</div>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <Badge><Sparkles size={12} className="text-cyan-300"/> Real-time</Badge>
          <Badge><Shield size={12} className="text-green-300"/> Guardrails</Badge>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 px-6 sm:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-5 gap-6 xl:gap-8 items-start">
            <div className="xl:col-span-3">
              <div className="mb-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                  Command the future with Aether
                </h1>
                <p className="mt-3 text-slate-300 max-w-2xl">
                  A premium autonomous agent with a live command brain. Speak naturally, see reasoning, and watch tasks self-orchestrate across your work.
                </p>
              </div>
              <CommandBrain />
            </div>

            <div className="xl:col-span-2 space-y-5">
              <OrbitPanels />
              <VoiceConsole />
            </div>
          </div>
        </div>
      </section>

      {/* Activity */}
      <section className="relative z-10 px-6 sm:px-10 mt-10">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 xl:grid-cols-5 gap-6 xl:gap-8">
          <div className="xl:col-span-3 space-y-4">
            <div className="flex items-center justify-between">
              <div className="text-slate-200 font-semibold">Live Tasks</div>
              <div className="text-xs text-slate-400">Micro-step animations</div>
            </div>
            <TaskOrbit />
          </div>

          <div className="xl:col-span-2 space-y-5">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="text-slate-200 font-semibold">Notifications</div>
                <div className="text-xs text-slate-400">Actionable insights</div>
              </div>
              <NotificationStream />
            </div>
            <CalendarLinkage />
          </div>
        </div>
      </section>

      {/* Footer personality */}
      <footer className="relative z-10 px-6 sm:px-10 py-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <div className="text-slate-300">Aether learns your rhythm. Idle breathing, glowing nodes, and a neural memory map reflect evolving habits.</div>
              </div>
              <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-cyan-400/40 bg-cyan-400/10 text-cyan-200">
                Request Access
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
