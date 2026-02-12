import { motion } from 'framer-motion'

const NUTRIENTS = [
  { name: 'Vitamin D3', role: 'Neuroprotection', color: '#D4A84B' },
  { name: 'Omega-3 DHA', role: 'Brain cell membranes', color: '#2B6CB0' },
  { name: 'Magnesium', role: 'Stress regulation', color: '#A8C5A0' },
  { name: 'B-Complex', role: 'Energy & mood', color: '#E8B4B8' },
  { name: 'Iron', role: 'Oxygen to the brain', color: '#D4969B' },
  { name: 'Choline', role: 'Memory & focus', color: '#8BAF82' },
]

export default function Step6Education({ onNext, onBack }) {
  return (
    <div className="min-h-dvh flex flex-col items-center justify-center px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-md"
      >
        <p className="text-sm uppercase tracking-widest text-blue mb-3">The Science</p>
        <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4">
          Your brain didn't break. It got depleted.
        </h2>
        <p className="text-warm-gray text-sm leading-relaxed mb-8">
          Pregnancy and postpartum drain critical brain nutrients.
          Your body prioritized your baby — now it's time to replenish what was borrowed.
        </p>
      </motion.div>

      {/* Nutrient cards */}
      <div className="w-full max-w-sm space-y-2.5">
        {NUTRIENTS.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.1, type: 'spring', stiffness: 100 }}
            className="flex items-center gap-3 bg-white rounded-xl p-3.5 border border-cream-dark"
          >
            <div
              className="w-3 h-3 rounded-full flex-shrink-0"
              style={{ backgroundColor: item.color }}
            />
            <div className="flex-1 min-w-0">
              <span className="font-medium text-sm text-warm-dark">{item.name}</span>
            </div>
            <span className="text-xs text-warm-gray">{item.role}</span>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-6 text-sm text-warm-gray text-center max-w-xs italic"
      >
        The right combination matters more than any single ingredient.
      </motion.p>

      <div className="flex items-center gap-4 mt-8">
        <button
          onClick={onBack}
          className="text-sm text-warm-gray hover:text-warm-dark transition-colors cursor-pointer"
        >
          ← Back
        </button>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={onNext}
          className="bg-blue text-white font-medium px-8 py-3 rounded-full shadow-md hover:bg-blue-light transition-colors cursor-pointer"
        >
          I want to know more
        </motion.button>
      </div>
    </div>
  )
}
