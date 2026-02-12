import { motion } from 'framer-motion'

const FORMATS = [
  { id: 'capsules', label: 'Capsules', desc: 'Quick and easy — just swallow with water', icon: '💊', color: '#2B6CB0' },
  { id: 'powder', label: 'Powder', desc: 'Mix into your morning smoothie or coffee', icon: '🥤', color: '#A8C5A0' },
  { id: 'gummies', label: 'Gummies', desc: 'Tastes like a treat, works like a supplement', icon: '🍬', color: '#E8B4B8' },
  { id: 'any', label: 'No preference', desc: 'Whatever works best for my brain', icon: '✨', color: '#D4A84B' },
]

export default function Step9Preference({ onNext, onBack, saveAnswer }) {
  const handleSelect = (id) => {
    saveAnswer('format', id)
    onNext()
  }

  return (
    <div className="min-h-dvh flex flex-col items-center justify-center px-6 py-12">
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl sm:text-3xl font-heading font-bold text-center mb-3"
      >
        How would you prefer to take it?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-warm-gray text-center mb-8 max-w-sm text-sm"
      >
        We'll match you with the format that fits your lifestyle.
      </motion.p>

      <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
        {FORMATS.map((item, i) => (
          <motion.button
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + i * 0.1, type: 'spring' }}
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => handleSelect(item.id)}
            className="bg-white rounded-2xl p-5 shadow-sm border border-cream-dark hover:shadow-md transition-all cursor-pointer text-center"
            style={{ '--hover-color': item.color }}
          >
            <span className="text-3xl mb-3 block">{item.icon}</span>
            <span className="font-heading font-semibold text-warm-dark block mb-1">{item.label}</span>
            <span className="text-xs text-warm-gray leading-snug">{item.desc}</span>
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
