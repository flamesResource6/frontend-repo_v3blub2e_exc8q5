import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const glowRing = {
  animate: {
    scale: [1, 1.04, 1],
    opacity: [0.55, 0.9, 0.55],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
  }
}

export default function CommandBrain() {
  return (
    <div className="relative w-full h-[420px] sm:h-[520px] md:h-[640px] lg:h-[720px] xl:h-[760px]">
      {/* Aura gradient overlay to intensify center */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.08),transparent_60%)]" />

      {/* Idle breathing concentric rings */}
      <motion.div
        variants={glowRing}
        animate="animate"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[68%] aspect-square rounded-full blur-3xl"
        style={{ boxShadow: '0 0 160px 60px rgba(34,197,94,0.18)' }}
      />
      <motion.div
        variants={glowRing}
        animate="animate"
        transition={{ delay: 1 }}
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[46%] aspect-square rounded-full blur-2xl"
        style={{ boxShadow: '0 0 120px 40px rgba(59,130,246,0.25)' }}
      />

      {/* Spline 3D core */}
      <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 bg-slate-900/40 backdrop-blur">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />

        {/* Subtle top gradient shine */}
        <div className="pointer-events-none absolute inset-x-0 -top-1/3 h-2/3 bg-gradient-to-b from-white/10 to-transparent" />
      </div>

      {/* Label chip */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
        <div className="px-3 py-1 rounded-full border border-cyan-400/40 bg-cyan-400/10 text-cyan-200 text-xs tracking-widest uppercase">
          Command Brain
        </div>
      </div>
    </div>
  )
}
