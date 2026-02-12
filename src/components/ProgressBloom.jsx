import { motion } from 'framer-motion'

const PETAL_COUNT = 10
const PETAL_COLORS = [
  '#E8B4B8', '#A8C5A0', '#D4A84B', '#2B6CB0', '#E8B4B8',
  '#A8C5A0', '#D4A84B', '#2B6CB0', '#E8B4B8', '#A8C5A0',
]

export default function ProgressBloom({ current, total }) {
  const progress = Math.max(0, (current - 1) / (total - 1))
  const activePetals = Math.round(progress * PETAL_COUNT)

  return (
    <svg width="48" height="48" viewBox="0 0 48 48">
      {/* Center circle */}
      <motion.circle
        cx="24" cy="24" r="5"
        fill="#D4A84B"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200 }}
      />

      {/* Petals */}
      {Array.from({ length: PETAL_COUNT }).map((_, i) => {
        const angle = (i * 360) / PETAL_COUNT - 90
        const rad = (angle * Math.PI) / 180
        const cx = 24 + Math.cos(rad) * 16
        const cy = 24 + Math.sin(rad) * 16
        const isActive = i < activePetals

        return (
          <motion.ellipse
            key={i}
            cx={cx}
            cy={cy}
            rx="6"
            ry="4"
            fill={PETAL_COLORS[i]}
            opacity={isActive ? 0.9 : 0.15}
            transform={`rotate(${angle}, ${cx}, ${cy})`}
            initial={false}
            animate={{
              scale: isActive ? 1 : 0.6,
              opacity: isActive ? 0.9 : 0.15,
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 20,
              delay: isActive ? i * 0.05 : 0,
            }}
          />
        )
      })}

      {/* Percentage text */}
      <text
        x="24" y="25"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="7"
        fontWeight="600"
        fill="#3D3535"
        fontFamily="DM Sans, sans-serif"
      >
        {Math.round(progress * 100)}%
      </text>
    </svg>
  )
}
