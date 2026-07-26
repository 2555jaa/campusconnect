import { motion } from 'framer-motion'

/**
 * PhoneFrame — Reusable Android phone mockup frame component.
 *
 * Usage:
 *   <PhoneFrame>
 *     <img src="..." alt="..." />
 *   </PhoneFrame>
 *
 *   <PhoneFrame>
 *     <div>Custom content</div>
 *   </PhoneFrame>
 */
export default function PhoneFrame({ children, className = '' }) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      className={`relative w-[280px] sm:w-[300px] ${className}`}
    >
      {/* Phone Frame */}
      <div className="relative bg-navy-500 rounded-[3rem] p-3 shadow-2xl shadow-primary-500/25 ring-1 ring-white/10">
        {/* Notch / Camera Bar */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-navy-500 rounded-b-2xl z-20 flex items-center justify-center gap-2">
          <div className="w-3 h-3 rounded-full bg-navy-900 ring-1 ring-white/10" />
          <div className="w-2 h-2 rounded-full bg-navy-900" />
        </div>

        {/* Screen Content */}
        <div className="relative rounded-[2.4rem] overflow-hidden bg-slate-950 border border-slate-800 shadow-inner">
          {children}
          {/* Glass Gloss Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
        </div>
      </div>

      {/* Glowing Background Ring */}
      <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 via-purple-500/20 to-cyan-400/20 rounded-[3.5rem] blur-2xl -z-10" />
    </motion.div>
  )
}

