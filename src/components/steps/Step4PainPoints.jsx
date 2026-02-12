import { useState } from 'react'
import { motion } from 'framer-motion'

const PAIN_POINTS = [
  { id: 'memory', label: 'Memory lapses', desc: 'Forgetting names, appointments, why you walked into a room', icon: '🧩' },
  { id: 'focus', label: 'Can\'t focus', desc: 'Starting tasks but never finishing them', icon: '🎯' },
  { id: 'fatigue', label: 'Mental fatigue', desc: 'Exhausted even after sleeping', icon: '😮‍💨' },
  { id: 'mood', label: 'Mood swings', desc: 'Irritable, anxious, or just "off"', icon: '🎭' },
  { id: 'words', label: 'Word-finding', desc: 'That word is right on the tip of your tongue...', icon: '💬' },
  { id: 'overwhelm', label: 'Overwhelm', desc: 'Simple decisions feel impossible', icon: '🌊' },
]

export default function Step4PainPoints({ onNext, onBack, saveAnswer }) {
  const [selected, setSelected] = useState([])

  const toggle = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    )
  }

  const handleContinue = () => {
    saveAnswer('painPoints', selected)
    onNext()
  }

  return (
    <div className="min-h-dvh flex flex-col items-center justify-center px-6 py-12">
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl sm:text-3xl font-heading font-bold text-center mb-3"
      >
        Which of these sound familiar?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-warm-gray text-center mb-6 text-sm"
      >
        Select all that apply — no judgment here.
      </motion.p>

      <div className="w-full max-w-sm space-y-3">
        {PAIN_POINTS.map((item, i) => (
          <motion.button
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 + i * 0.08 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => toggle(item.id)}
            className={`w-full flex items-start gap-3 p-4 rounded-xl border-2 transition-all text-left cursor-pointer ${
              selected.includes(item.id)
                ? 'border-blue bg-blue/5 shadow-sm'
                : 'border-cream-dark bg-white hover:border-blush-light'
            }`}
          >
            <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
            <div className="flex-1 min-w-0">
              <span className="font-medium text-warm-dark block">{item.label}</span>
              <span className="text-xs text-warm-gray">{item.desc}</span>
            </div>
            <div className={`w-5 h-5 rounded-md border-2 flex-shrink-0 mt-0.5 flex items-center justify-center transition-colors ${
              selected.includes(item.id) ? 'bg-blue border-blue' : 'border-warm-gray/30'
            }`}>
              {selected.includes(item.id) && (
                <motion.svg
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  width="12" height="12" viewBox="0 0 12 12"
                >
                  <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
                </motion.svg>
              )}
            </div>
          </motion.button>
        ))}
      </div>

      <div className="flex items-center gap-4 mt-8">
        <button
          onClick={onBack}
          className="text-sm text-warm-gray hover:text-warm-dark transition-colors cursor-pointer"
        >
          ← Back
        </button>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleContinue}
          disabled={selected.length === 0}
          className={`font-medium px-8 py-3 rounded-full transition-all cursor-pointer ${
            selected.length > 0
              ? 'bg-blue text-white shadow-md hover:bg-blue-light'
              : 'bg-cream-dark text-warm-gray cursor-not-allowed'
          }`}
        >
          Continue
        </motion.button>
      </div>
    </div>
  )
}
