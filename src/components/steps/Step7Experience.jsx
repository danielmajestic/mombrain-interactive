import { motion } from 'framer-motion'

const OPTIONS = [
  { id: 'never', label: 'Never tried supplements', emoji: '🆕' },
  { id: 'basic', label: 'Tried a few, nothing stuck', emoji: '😐' },
  { id: 'many', label: 'Tried many, still searching', emoji: '🔍' },
  { id: 'current', label: 'Currently taking something', emoji: '💊' },
]

export default function Step7Experience({ onNext, onBack, saveAnswer }) {
  const handleSelect = (id) => {
    saveAnswer('experience', id)
    onNext()
  }

  return (
    <div className="min-h-dvh flex flex-col items-center justify-center px-6 py-12">
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl sm:text-3xl font-heading font-bold text-center mb-3"
      >
        What's your supplement story?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-warm-gray text-center mb-8 max-w-sm text-sm"
      >
        This helps us understand what might work best for you.
      </motion.p>

      <div className="w-full max-w-sm space-y-3">
        {OPTIONS.map((item, i) => (
          <motion.button
            key={item.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            whileHover={{ scale: 1.02, x: 4 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleSelect(item.id)}
            className="w-full flex items-center gap-4 p-4 rounded-xl bg-white border border-cream-dark hover:border-sage hover:shadow-sm transition-all text-left cursor-pointer"
          >
            <span className="text-2xl">{item.emoji}</span>
            <span className="font-medium text-warm-dark">{item.label}</span>
          </motion.button>
        ))}
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        onClick={onBack}
        className="mt-8 text-sm text-warm-gray hover:text-warm-dark transition-colors cursor-pointer"
      >
        ← Back
      </motion.button>
    </div>
  )
}
