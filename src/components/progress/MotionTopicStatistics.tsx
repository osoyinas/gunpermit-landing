'use client'

import React from 'react'
import { motion } from 'framer-motion'
import type { HTMLMotionProps } from 'framer-motion'

type MotionTopicStatisticsProps = HTMLMotionProps<'div'>

const MotionTopicStatistics = React.forwardRef<HTMLDivElement, MotionTopicStatisticsProps>(
  function MotionDiv ({ children, ...props }, ref) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        {...props}
        ref={ref}
      >
        {children}
      </motion.div>
    )
  }
)

const MotionTopicItem = React.forwardRef<HTMLDivElement, MotionTopicStatisticsProps>(
  function MotionDiv ({ children, ...props }, ref) {
    return (
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        {...props}
        ref={ref}
      >
        {children}
      </motion.div>
    )
  }
)

export { MotionTopicStatistics, MotionTopicItem }
