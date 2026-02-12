import { useState, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import ProgressBloom from './components/ProgressBloom'
import Step1Welcome from './components/steps/Step1Welcome'
import Step2Age from './components/steps/Step2Age'
import Step3FogReveal from './components/steps/Step3FogReveal'
import Step4PainPoints from './components/steps/Step4PainPoints'
import Step5Behavior from './components/steps/Step5Behavior'
import Step6Education from './components/steps/Step6Education'
import Step7Experience from './components/steps/Step7Experience'
import Step8Slider from './components/steps/Step8Slider'
import Step9Preference from './components/steps/Step9Preference'
import Step10Analysis from './components/steps/Step10Analysis'
import Step11Reveal from './components/steps/Step11Reveal'
import Step12Results from './components/steps/Step12Results'

const TOTAL_STEPS = 12

const pageVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? '-50%' : '50%',
    opacity: 0,
  }),
}

const pageTransition = {
  type: 'tween',
  ease: 'easeInOut',
  duration: 0.4,
}

export default function App() {
  const [step, setStep] = useState(1)
  const [direction, setDirection] = useState(1)
  const [answers, setAnswers] = useState({})

  const goNext = useCallback(() => {
    if (step < TOTAL_STEPS) {
      setDirection(1)
      setStep((s) => s + 1)
    }
  }, [step])

  const goBack = useCallback(() => {
    if (step > 1) {
      setDirection(-1)
      setStep((s) => s - 1)
    }
  }, [step])

  const saveAnswer = useCallback((key, value) => {
    setAnswers((prev) => ({ ...prev, [key]: value }))
  }, [])

  const stepProps = { onNext: goNext, onBack: goBack, saveAnswer, answers }

  const steps = {
    1: <Step1Welcome {...stepProps} />,
    2: <Step2Age {...stepProps} />,
    3: <Step3FogReveal {...stepProps} />,
    4: <Step4PainPoints {...stepProps} />,
    5: <Step5Behavior {...stepProps} />,
    6: <Step6Education {...stepProps} />,
    7: <Step7Experience {...stepProps} />,
    8: <Step8Slider {...stepProps} />,
    9: <Step9Preference {...stepProps} />,
    10: <Step10Analysis {...stepProps} goToStep={(s) => { setDirection(1); setStep(s) }} />,
    11: <Step11Reveal {...stepProps} />,
    12: <Step12Results {...stepProps} />,
  }

  return (
    <div className="min-h-dvh bg-cream flex flex-col">
      {/* Progress Bloom - hidden on step 1 and 12 */}
      {step > 1 && step < 12 && (
        <div className="fixed top-4 right-4 z-50">
          <ProgressBloom current={step} total={TOTAL_STEPS} />
        </div>
      )}

      {/* Step counter */}
      {step > 1 && step < 12 && (
        <div className="fixed top-4 left-4 z-50">
          <span className="text-xs font-body text-warm-gray tracking-wide">
            {step} of {TOTAL_STEPS}
          </span>
        </div>
      )}

      {/* Main content area */}
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={step}
            custom={direction}
            variants={pageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={pageTransition}
            className="min-h-dvh"
          >
            {steps[step]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
