import { CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export function GenericQuizQuestionContent (props: { children: ReactNode }) {
  return (
    <CardContent className="p-4 md:p-6 lg:p-8 flex-grow overflow-y-hidden w-full">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="space-y-6 h-full flex flex-col justify-center"
      >
        {props.children}
      </motion.div>
    </CardContent>
  )
}
