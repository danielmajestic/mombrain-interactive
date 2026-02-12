import { motion } from 'framer-motion'

const OPTIONS = [
  { id: 'nothing', label: 'Nothing yet', desc: 'Haven\'t really tried anything specific', icon: '🤷‍♀️' },
  { id: 'coffee', label: 'Coffee & willpower', desc: 'Just powering through with caffeine', icon: '☕' },
  { id: 'vitamins', label: 'Basic vitamins', desc: 'Multivitamins or general supplements', icon: '💊' },
  { id: 'lifestyle', label: 'Lifestyle changes', desc: 'Sleep, exercise, diet adjustments', icon: '🧘‍♀️' },
  { id: 'specialized', label: 'Brain-specific supplements', desc: 'Nootropics, adaptogens, or specialized formulas', icon: '🧬' },
]

export default function Step5Behavior({ onNext, onBack, saveAnswer }) {
  const handleSelect = (id) => {
    saveAnswer('currentApproach', id)
    onNext()
  }

  return (
    <div className="min-h-dvh flex flex-col items-center justify-center px-6 py-12">
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl sm:text-3xl font-heading font-bold text-center mb-3"
      >
        What are you doing about it right now?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-warm-gray text-center mb-8 max-w-sm text-sm"
      >
        No wrong answers. We just want to understand where you are.
      </motion.p>

      <div className="w-full max-w-sm space-y-3">
        {OPTIONS.map((item, i) => (
          <motion.button
            key={item.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.08 }}
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleSelect(item.id)}
            className="w-full flex items-center gap-3 p-4 rounded-xl bg-white border border-cream-dark hover:border-blush hover:shadow-sm transition-all text-left cursor-pointer"
          >
            <span className="text-xl flex-shrink-0">{item.icon}</span>
            <div className="flex-1 min-w-0">
              <span className="font-medium text-warm-dark block">{item.label}</span>
              <span className="text-xs text-warm-gray">{item.desc}</span>
            </div>
            <svg width="16" height="16" viewBox="0 0 16 16" className="flex-shrink-0 text-warm-gray/40">
              <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
            </svg>
          </motion.button>
        ))}
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        onClick={onBack}
        className="mt-8 text-sm text-warm-gray hover:text-warm-dark transition-colors cursor-pointer"
      >
        ← Back
      </motion.button>
    </div>
  )
}
