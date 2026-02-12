import { useState, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'

export default function Step8Slider({ onNext, onBack }) {
  const [sliderPos, setSliderPos] = useState(50)
  const containerRef = useRef(null)
  const dragging = useRef(false)

  const updatePosition = useCallback((clientX) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPos(pct)
  }, [])

  const handlePointerDown = (e) => {
    dragging.current = true
    e.target.setPointerCapture?.(e.pointerId)
    updatePosition(e.clientX)
  }

  const handlePointerMove = (e) => {
    if (!dragging.current) return
    updatePosition(e.clientX)
  }

  const handlePointerUp = () => {
    dragging.current = false
  }

  return (
    <div className="min-h-dvh flex flex-col items-center justify-center px-6 py-12">
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl sm:text-3xl font-heading font-bold text-center mb-2"
      >
        Meet Sara.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-warm-gray text-center mb-6 max-w-xs text-sm"
      >
        Drag the slider to see her transformation after 90 days of targeted brain nutrition.
      </motion.p>

      {/* Before/After Slider Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        className="relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden shadow-lg select-none touch-none cursor-ew-resize"
      >
        {/* AFTER side (full background) */}
        <div className="absolute inset-0 bg-gradient-to-br from-sage-light via-sage/30 to-cream">
          <div className="absolute inset-y-0 right-0 w-1/2 flex flex-col items-center justify-center p-4">
            <div className="w-16 h-16 rounded-full bg-sage/30 flex items-center justify-center mx-auto mb-3">
              <span className="text-3xl">😊</span>
            </div>
            <p className="font-heading font-semibold text-sage-dark">After</p>
            <p className="text-xs text-warm-gray mt-2">Clear-headed</p>
            <p className="text-xs text-warm-gray">Energized</p>
            <p className="text-xs text-warm-gray">Present with her kids</p>
          </div>
        </div>

        {/* BEFORE side (clipped overlay) */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-blush-light via-blush/30 to-cream-dark"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <div className="absolute inset-y-0 left-0 w-1/2 flex flex-col items-center justify-center p-4">
            <div className="w-16 h-16 rounded-full bg-blush/30 flex items-center justify-center mx-auto mb-3">
              <span className="text-3xl">😩</span>
            </div>
            <p className="font-heading font-semibold text-blush-dark">Before</p>
            <p className="text-xs text-warm-gray mt-2">Foggy & forgetful</p>
            <p className="text-xs text-warm-gray">Exhausted by 2pm</p>
            <p className="text-xs text-warm-gray">Missing moments</p>
          </div>
        </div>

        {/* Slider line + handle */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-20"
          style={{ left: `${sliderPos}%` }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-30 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center border-2 border-blue"
          style={{ left: `${sliderPos}%` }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16">
            <path d="M4 8H12M4 8L6 5.5M4 8L6 10.5M12 8L10 5.5M12 8L10 10.5" stroke="#2B6CB0" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          </svg>
        </div>
      </motion.div>

      {/* Testimonial quote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-6 max-w-sm text-center"
      >
        <p className="text-sm italic text-warm-gray leading-relaxed">
          "By week 6, I stopped losing my keys. By month 3, I felt like myself again."
        </p>
        <p className="text-xs text-warm-gray/70 mt-2">— Sara M., mom of 2</p>
      </motion.div>

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
          onClick={onNext}
          className="bg-blue text-white font-medium px-8 py-3 rounded-full shadow-md hover:bg-blue-light transition-colors cursor-pointer"
        >
          That could be me
        </motion.button>
      </div>
    </div>
  )
}
