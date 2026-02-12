import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Step3FogReveal({ onNext, onBack }) {
  const [fogCleared, setFogCleared] = useState(false)

  const handleClearFog = () => {
    setFogCleared(true)
    setTimeout(onNext, 2200)
  }

  return (
    <div className="min-h-dvh flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-cream-dark/30 to-cream" />

      {/* FOG LAYERS */}
      <AnimatePresence>
        {!fogCleared && (
          <>
            <motion.div
              exit={{ opacity: 0, filter: 'blur(30px)' }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="fog-layer absolute inset-0 z-10"
              style={{
                background: 'radial-gradient(ellipse at 30% 40%, rgba(200,195,185,0.7) 0%, transparent 60%)',
              }}
            />
            <motion.div
              exit={{ opacity: 0, filter: 'blur(25px)' }}
              transition={{ duration: 1.8, ease: 'easeOut', delay: 0.2 }}
              className="fog-layer absolute inset-0 z-10"
              style={{
                background: 'radial-gradient(ellipse at 70% 60%, rgba(190,185,175,0.6) 0%, transparent 55%)',
                animationDelay: '-3s',
              }}
            />
            <motion.div
              exit={{ opacity: 0, filter: 'blur(20px)' }}
              transition={{ duration: 2, ease: 'easeOut', delay: 0.4 }}
              className="fog-layer absolute inset-0 z-10"
              style={{
                background: 'radial-gradient(ellipse at 50% 50%, rgba(210,205,195,0.5) 0%, transparent 50%)',
                animationDelay: '-6s',
              }}
            />
          </>
        )}
      </AnimatePresence>

      {/* Content revealed under fog */}
      <div className="relative z-20 text-center max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4">
            {fogCleared ? 'The fog is lifting.' : 'This is what mom brain feels like.'}
          </h2>

          {!fogCleared && (
            <p className="text-warm-gray mb-2">
              Everything's there — you just can't quite reach it through the haze.
            </p>
          )}
        </motion.div>

        {/* Hidden clarity message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: fogCleared ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-6"
        >
          <div className="bg-white/80 rounded-2xl p-6 shadow-sm border border-sage-light">
            <p className="text-lg font-heading font-semibold text-sage-dark mb-2">
              Clarity is possible.
            </p>
            <p className="text-warm-gray text-sm leading-relaxed">
              77% of mothers report noticeable cognitive changes after pregnancy.
              The good news? Your brain is remarkably adaptable — it just needs the right support.
            </p>
          </div>
        </motion.div>

        {/* Clear fog button */}
        {!fogCleared && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleClearFog}
            className="mt-8 bg-sage text-white font-medium px-8 py-3.5 rounded-full shadow-md hover:bg-sage-dark transition-colors cursor-pointer"
          >
            ✨ Clear the fog
          </motion.button>
        )}

        {fogCleared && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-4 text-sm text-sage-dark font-medium"
          >
            Let's find out what's behind yours...
          </motion.p>
        )}
      </div>

      {/* Back button */}
      {!fogCleared && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={onBack}
          className="absolute bottom-8 text-sm text-warm-gray hover:text-warm-dark transition-colors cursor-pointer z-30"
        >
          ← Back
        </motion.button>
      )}
    </div>
  )
}
