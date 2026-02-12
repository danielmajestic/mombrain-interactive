import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'

export default function Step11Reveal({ onNext, onBack }) {
  const [flipped, setFlipped] = useState(false)

  const launchConfetti = useCallback(() => {
    const duration = 2000
    const end = Date.now() + duration

    const colors = ['#E8B4B8', '#A8C5A0', '#D4A84B', '#2B6CB0', '#FDF8F0']

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors,
      })
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors,
      })
      if (Date.now() < end) requestAnimationFrame(frame)
    }
    frame()
  }, [])

  const handleReveal = () => {
    setFlipped(true)
    launchConfetti()
  }

  return (
    <div className="min-h-dvh flex flex-col items-center justify-center px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-6"
      >
        <p className="text-sm uppercase tracking-widest text-gold mb-3">Your Match Is Ready</p>
        <h2 className="text-2xl sm:text-3xl font-heading font-bold">
          {flipped ? 'We found your perfect match!' : 'Tap to reveal your personalized result'}
        </h2>
      </motion.div>

      {/* 3D Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, type: 'spring' }}
        className="w-full max-w-xs perspective-[800px] mb-8"
      >
        <motion.div
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 80 }}
          style={{ transformStyle: 'preserve-3d' }}
          className="relative w-full aspect-[3/4]"
        >
          {/* Card Front */}
          <div
            className="absolute inset-0 rounded-2xl shadow-lg flex flex-col items-center justify-center p-6 cursor-pointer"
            style={{
              backfaceVisibility: 'hidden',
              background: 'linear-gradient(135deg, #2B6CB0, #1E4F85)',
            }}
            onClick={!flipped ? handleReveal : undefined}
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-center text-white"
            >
              <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🎁</span>
              </div>
              <p className="font-heading font-bold text-xl mb-2">Your Result</p>
              <p className="text-sm text-white/80">Tap to reveal</p>
            </motion.div>
          </div>

          {/* Card Back */}
          <div
            className="absolute inset-0 rounded-2xl shadow-lg flex flex-col items-center justify-center p-6 bg-white"
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
          >
            <div className="text-center">
              {/* Product placeholder */}
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-sage-light to-sage flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🧠</span>
              </div>
              <p className="text-sm uppercase tracking-widest text-blue mb-2">Recommended For You</p>
              <p className="font-heading font-bold text-xl text-warm-dark mb-1">EMPowerplus</p>
              <p className="font-heading text-sm text-gold">by TrueHope</p>
              <p className="text-xs text-warm-gray mt-3 leading-relaxed">
                A broad-spectrum micronutrient formula designed to support brain health, mood balance, and mental clarity.
              </p>

              <div className="flex items-center justify-center gap-1 mt-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} width="14" height="14" viewBox="0 0 14 14" fill="#D4A84B">
                    <path d="M7 1l1.8 3.6L13 5.3l-3 2.9.7 4.1L7 10.4 3.3 12.3l.7-4.1-3-2.9 4.2-.7z" />
                  </svg>
                ))}
                <span className="text-xs text-warm-gray ml-1">4.8/5</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* CTA after flip */}
      <AnimatePresence>
        {flipped && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onNext}
              className="bg-blue text-white font-medium px-8 py-3.5 rounded-full shadow-lg hover:bg-blue-light transition-colors cursor-pointer"
            >
              See My Full Results →
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {!flipped && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          onClick={onBack}
          className="mt-4 text-sm text-warm-gray hover:text-warm-dark transition-colors cursor-pointer"
        >
          ← Back
        </motion.button>
      )}
    </div>
  )
}
