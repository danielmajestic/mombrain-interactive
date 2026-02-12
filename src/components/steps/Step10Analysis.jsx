import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const TESTIMONIALS = [
  { text: "I forgot my own PIN 3 times in one week. Now I'm managing household finances again.", name: 'Michelle K.', detail: 'Mom of 3' },
  { text: "The brain fog was so bad I couldn't follow a recipe. Two months in, I'm reading novels again.", name: 'Jessica T.', detail: 'Mom of 1' },
  { text: 'I thought I was getting early dementia. Turns out I was just depleted.', name: 'Amanda R.', detail: 'Mom of 2' },
  { text: "My husband noticed before I did — said it was like having the old me back.", name: 'Rachel S.', detail: 'Mom of 4' },
]

const ANALYSIS_STEPS = [
  'Reviewing your symptoms...',
  'Matching nutrient profile...',
  'Calculating optimal dosage...',
  'Personalizing your recommendation...',
]

export default function Step10Analysis({ onNext, answers }) {
  const [progress, setProgress] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [analysisStep, setAnalysisStep] = useState(0)

  useEffect(() => {
    const duration = 5000
    const interval = 50
    const increment = (interval / duration) * 100
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(timer)
          return 100
        }
        return Math.min(100, p + increment)
      })
    }, interval)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((t) => (t + 1) % TESTIMONIALS.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const timers = ANALYSIS_STEPS.map((_, i) =>
      setTimeout(() => setAnalysisStep(i), i * 1250)
    )
    return () => timers.forEach(clearTimeout)
  }, [])

  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(onNext, 800)
      return () => clearTimeout(timer)
    }
  }, [progress, onNext])

  const painCount = answers?.painPoints?.length || 3

  return (
    <div className="min-h-dvh flex flex-col items-center justify-center px-6 py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center max-w-sm"
      >
        <p className="text-sm uppercase tracking-widest text-blue mb-6">Analyzing Your Results</p>

        {/* Animated Brain SVG */}
        <div className="relative w-32 h-32 mx-auto mb-8">
          {/* Brain outline */}
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              d="M50 15 C30 15, 15 30, 15 50 C15 70, 30 85, 50 85 C70 85, 85 70, 85 50 C85 30, 70 15, 50 15"
              fill="none"
              stroke="#E8B4B8"
              strokeWidth="2"
              opacity="0.4"
            />
            {/* Brain fold lines */}
            <path d="M35 30 Q50 40, 50 50" fill="none" stroke="#E8B4B8" strokeWidth="1.5" opacity="0.3" />
            <path d="M65 30 Q50 40, 50 50" fill="none" stroke="#E8B4B8" strokeWidth="1.5" opacity="0.3" />
            <path d="M30 50 Q40 55, 50 50 Q60 45, 70 50" fill="none" stroke="#E8B4B8" strokeWidth="1.5" opacity="0.3" />
          </svg>

          {/* Fill overlay */}
          <div
            className="absolute inset-0 rounded-full overflow-hidden"
            style={{ clipPath: `inset(${100 - progress}% 0 0 0)` }}
          >
            <div className="w-full h-full bg-gradient-to-t from-sage via-sage-light to-blue/30 opacity-60 rounded-full" />
          </div>

          {/* Percentage overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-heading font-bold text-warm-dark">
              {Math.round(progress)}%
            </span>
          </div>
        </div>

        {/* Analysis step text */}
        <AnimatePresence mode="wait">
          <motion.p
            key={analysisStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-warm-gray text-sm mb-2"
          >
            {ANALYSIS_STEPS[analysisStep]}
          </motion.p>
        </AnimatePresence>

        {/* Stat callout */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-xs text-warm-gray/70 mb-8"
        >
          You selected {painCount} symptom{painCount !== 1 ? 's' : ''} — we're finding the best match
        </motion.p>

        {/* Progress bar */}
        <div className="w-full max-w-xs mx-auto h-1.5 bg-cream-dark rounded-full overflow-hidden mb-8">
          <motion.div
            className="h-full bg-gradient-to-r from-sage to-blue rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Rotating testimonials */}
        <div className="h-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <p className="text-sm italic text-warm-gray leading-relaxed">
                {TESTIMONIALS[currentTestimonial].text}
              </p>
              <p className="text-xs text-warm-gray/70 mt-2">
                — {TESTIMONIALS[currentTestimonial].name}, {TESTIMONIALS[currentTestimonial].detail}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  )
}
