import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export function AnimatedGenericQuestionOption (props: {
  index: number;
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.2 + props.index * 0.1, duration: 0.3 }}
      className={`w-full bg-primary/5 hover:bg-primary/10 px-4 flex items-center justify-start rounded-xl gap-4 transition-colors ${props.className}`}
    >
      {props.children}
    </motion.div>
  )
}
