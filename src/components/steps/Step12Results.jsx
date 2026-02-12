import { motion } from 'framer-motion'

const BENEFITS = [
  { icon: '🧠', label: 'Mental Clarity', desc: 'Cut through brain fog and think clearly again' },
  { icon: '⚡', label: 'Sustained Energy', desc: 'No more crashing by 2pm' },
  { icon: '😌', label: 'Mood Balance', desc: 'Feel more like yourself, less on edge' },
  { icon: '💪', label: 'Memory Support', desc: 'Remember names, dates, and where you left your keys' },
]

const TESTIMONIALS = [
  { text: 'I can finally hold a conversation without losing my train of thought.', name: 'Lauren B.', age: '38' },
  { text: 'My kids noticed the difference before I did. "Mom, you seem happier."', name: 'Danielle W.', age: '42' },
  { text: '3 weeks in and I woke up feeling genuinely clear-headed for the first time in years.', name: 'Christina M.', age: '35' },
]

export default function Step12Results({ answers }) {
  const painCount = answers?.painPoints?.length || 3
  const age = answers?.age || '35–44'

  return (
    <div className="min-h-dvh bg-cream">
      {/* Hero section */}
      <div className="bg-gradient-to-b from-blue/5 to-cream px-6 py-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-widest text-blue mb-4">Your Personalized Results</p>
          <h1 className="text-3xl sm:text-4xl font-heading font-bold leading-tight mb-4 max-w-md mx-auto">
            Based on your {painCount} symptoms, here's what we recommend
          </h1>
          <p className="text-warm-gray max-w-sm mx-auto text-sm leading-relaxed">
            For women {age} experiencing the symptoms you described,
            clinical research points to one comprehensive solution.
          </p>
        </motion.div>
      </div>

      {/* Product Card */}
      <div className="px-6 -mt-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl shadow-lg p-6 max-w-md mx-auto border border-cream-dark"
        >
          {/* Product image placeholder */}
          <div className="w-full aspect-square rounded-xl bg-gradient-to-br from-sage-light/50 via-cream to-blush-light/50 flex items-center justify-center mb-6">
            <div className="text-center">
              <div className="w-24 h-24 rounded-2xl bg-white/80 shadow-sm flex items-center justify-center mx-auto mb-3">
                <span className="text-5xl">🧠</span>
              </div>
              <p className="font-heading font-bold text-lg text-warm-dark">EMPowerplus</p>
              <p className="text-sm text-blue">by TrueHope</p>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} width="16" height="16" viewBox="0 0 14 14" fill="#D4A84B">
                  <path d="M7 1l1.8 3.6L13 5.3l-3 2.9.7 4.1L7 10.4 3.3 12.3l.7-4.1-3-2.9 4.2-.7z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-warm-gray">4.8 stars · 2,400+ reviews</span>
          </div>

          <p className="text-sm text-warm-gray text-center leading-relaxed mb-6">
            36 brain-essential nutrients in one formula. Backed by 35+ published research studies.
            The most-studied micronutrient supplement in the world for brain and mood support.
          </p>

          {/* Benefits */}
          <div className="space-y-3 mb-6">
            {BENEFITS.map((b, i) => (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="flex items-start gap-3"
              >
                <span className="text-lg flex-shrink-0">{b.icon}</span>
                <div>
                  <p className="font-medium text-sm text-warm-dark">{b.label}</p>
                  <p className="text-xs text-warm-gray">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Price */}
          <div className="text-center border-t border-cream-dark pt-5 mb-5">
            <p className="text-sm text-warm-gray mb-1">Special quiz price</p>
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-3xl font-heading font-bold text-warm-dark">$34.99</span>
              <span className="text-sm text-warm-gray line-through">$49.99</span>
            </div>
            <p className="text-xs text-sage-dark mt-1">Save 30% — quiz takers only</p>
          </div>

          {/* CTA buttons */}
          <motion.a
            href="#checkout"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="block w-full bg-blue text-white font-medium text-center py-4 rounded-full shadow-lg hover:bg-blue-light transition-colors mb-3"
          >
            Get My Personalized Formula
          </motion.a>

          <motion.a
            href="#checkout"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="block w-full bg-cream-dark text-warm-dark font-medium text-center py-3 rounded-full hover:bg-cream transition-colors text-sm"
          >
            Subscribe & Save 40% →
          </motion.a>

          <p className="text-xs text-warm-gray/60 text-center mt-4">
            Free shipping · 90-day money-back guarantee · Cancel anytime
          </p>
        </motion.div>
      </div>

      {/* Testimonials */}
      <div className="px-6 py-10">
        <p className="text-center font-heading font-semibold text-lg mb-6">
          Moms like you are saying...
        </p>
        <div className="space-y-4 max-w-md mx-auto">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.15 }}
              className="bg-white rounded-xl p-4 border border-cream-dark"
            >
              <p className="text-sm text-warm-dark italic leading-relaxed">"{t.text}"</p>
              <p className="text-xs text-warm-gray mt-2">— {t.name}, age {t.age}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Sticky bottom CTA */}
      <div className="sticky bottom-0 bg-cream/95 backdrop-blur-sm border-t border-cream-dark px-6 py-4">
        <motion.a
          href="#checkout"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="block w-full max-w-md mx-auto bg-blue text-white font-medium text-center py-3.5 rounded-full shadow-lg"
        >
          Claim My 30% Off →
        </motion.a>
        <p className="text-xs text-warm-gray/60 text-center mt-2">
          90-day guarantee · 35+ clinical studies
        </p>
      </div>
    </div>
  )
}
