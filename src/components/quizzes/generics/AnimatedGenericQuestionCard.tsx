import { AnimatePresence, motion } from 'framer-motion'
import { ReactNode } from 'react'

export function AnimatedGenericQuestionCard (props: { children: ReactNode, className?: string }) {
  const { children } = props
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`flex-grow flex flex-col md:justify-center md:items-center ${props.className}`}
    >
      <AnimatePresence mode="wait">{children}</AnimatePresence>
    </motion.div>
  )
}
