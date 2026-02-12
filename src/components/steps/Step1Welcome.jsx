import { motion } from 'framer-motion'

export default function Step1Welcome({ onNext }) {
  return (
    <div className="min-h-dvh flex flex-col items-center justify-center px-6 py-12 text-center">
      {/* Decorative top element */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-6"
      >
        <svg width="64" height="64" viewBox="0 0 64 64" className="mx-auto">
          <circle cx="32" cy="32" r="28" fill="none" stroke="#A8C5A0" strokeWidth="2" opacity="0.5" />
          <circle cx="32" cy="32" r="20" fill="none" stroke="#E8B4B8" strokeWidth="2" opacity="0.5" />
          <text x="32" y="36" textAnchor="middle" fontSize="24">🧠</text>
        </svg>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-sm uppercase tracking-widest text-warm-gray mb-4 font-body"
      >
        A 2-minute quiz
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-3xl sm:text-4xl font-heading font-bold leading-tight mb-4 max-w-md"
      >
        Is "Mom Brain" stealing your sharpest years?
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="text-base sm:text-lg text-warm-gray max-w-sm mb-8 leading-relaxed"
      >
        Forgetting words mid-sentence. Walking into rooms with no idea why.
        Feeling like your brain is wrapped in cotton wool.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="text-sm text-warm-gray mb-8 italic"
      >
        You're not imagining it — and you're not alone.
      </motion.p>

      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        onClick={onNext}
        className="bg-blue text-white font-body font-medium text-lg px-10 py-4 rounded-full shadow-lg hover:bg-blue-light transition-colors cursor-pointer"
      >
        Take the Quiz
      </motion.button>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-6 text-xs text-warm-gray/60"
      >
        No email required. Instant results.
      </motion.p>
    </div>
  )
}
