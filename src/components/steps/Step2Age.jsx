import { motion } from 'framer-motion'

const AGE_RANGES = [
  { label: '25–34', desc: 'New mom energy', emoji: '👶' },
  { label: '35–44', desc: 'Peak juggle mode', emoji: '🎯' },
  { label: '45–54', desc: 'Shifting seasons', emoji: '🌿' },
  { label: '55+', desc: 'Wisdom years', emoji: '✨' },
]

export default function Step2Age({ onNext, onBack, saveAnswer }) {
  const handleSelect = (age) => {
    saveAnswer('age', age)
    onNext()
  }

  return (
    <div className="min-h-dvh flex flex-col items-center justify-center px-6 py-12">
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl sm:text-3xl font-heading font-bold text-center mb-3"
      >
        First, what season of life are you in?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-warm-gray text-center mb-8 max-w-sm"
      >
        Mom brain hits differently at every age. We'll tailor your results.
      </motion.p>

      <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
        {AGE_RANGES.map((item, i) => (
          <motion.button
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => handleSelect(item.label)}
            className="bg-white rounded-2xl p-5 shadow-sm border border-cream-dark hover:border-blush hover:shadow-md transition-all cursor-pointer text-left"
          >
            <span className="text-2xl mb-2 block">{item.emoji}</span>
            <span className="text-lg font-heading font-semibold block">{item.label}</span>
            <span className="text-sm text-warm-gray">{item.desc}</span>
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
