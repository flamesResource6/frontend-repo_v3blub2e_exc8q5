import React, { useEffect, useRef, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Mic, Square, Loader2 } from 'lucide-react'

export default function VoiceConsole() {
  const [listening, setListening] = useState(false)
  const [levels, setLevels] = useState(Array(24).fill(0))
  const controls = useAnimation()
  const rafRef = useRef(null)

  useEffect(() => {
    if (!listening) return

    let t = 0
    const loop = () => {
      // Generate pseudo audio levels with subtle randomness and pitch bands
      const bands = 24
      const arr = Array.from({ length: bands }, (_, i) => {
        const base = Math.sin((t / 12) + i * 0.25) * 0.5 + 0.5
        const noise = (Math.sin((t + i * 17) * 0.07) + Math.sin((t + i * 5) * 0.11)) * 0.25 + Math.random() * 0.15
        const envelope = 0.6 + Math.sin(t * 0.02) * 0.35
        return Math.max(0, Math.min(1, base * envelope + noise))
      })
      setLevels(arr)
      t += 1
      rafRef.current = requestAnimationFrame(loop)
    }
    rafRef.current = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(rafRef.current)
  }, [listening])

  useEffect(() => {
    controls.start({
      boxShadow: listening
        ? '0 0 0 8px rgba(56,189,248,0.12), 0 0 40px 8px rgba(56,189,248,0.15)'
        : '0 0 0 0 rgba(0,0,0,0)'
    })
  }, [listening, controls])

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <div className="text-slate-200 font-medium">Voice Input</div>
        <div className="text-xs text-slate-400">Pitch-sensitive waveform</div>
      </div>

      <div className="relative rounded-2xl border border-cyan-400/20 bg-slate-900/60 p-5 backdrop-blur">
        {/* Waveform */}
        <div className="h-28 flex items-end gap-[6px] overflow-hidden">
          {levels.map((v, i) => (
            <div
              key={i}
              className="w-[6px] rounded-t bg-gradient-to-t from-cyan-400/40 via-cyan-300/70 to-white"
              style={{ height: `${Math.max(6, v * 100)}%`, filter: 'drop-shadow(0 0 12px rgba(56,189,248,0.45))' }}
            />
          ))}
        </div>

        {/* Controls */}
        <div className="mt-6 flex items-center justify-center">
          <motion.button
            animate={controls}
            onClick={() => setListening((s) => !s)}
            className={`relative inline-flex items-center justify-center w-20 h-20 rounded-full border transition-all duration-300 ${
              listening ? 'border-cyan-400/60 bg-cyan-400/10' : 'border-white/10 bg-white/5'
            }`}
          >
            <div className="absolute -inset-2 rounded-full bg-cyan-400/10 blur-xl" />
            {listening ? (
              <Square className="text-cyan-300" size={28} />
            ) : (
              <Mic className="text-cyan-300" size={28} />
            )}
          </motion.button>
        </div>

        {/* Status */}
        <div className="mt-3 text-center text-xs text-slate-400">
          {listening ? (
            <span className="inline-flex items-center gap-2"><Loader2 className="animate-spin" size={14} />Listening…</span>
          ) : (
            'Tap to talk to Aether'
          )}
        </div>
      </div>
    </div>
  )
}
