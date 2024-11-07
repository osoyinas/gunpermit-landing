'use client'

import React from 'react'
import { motion } from 'framer-motion'
import type { HTMLMotionProps } from 'framer-motion'

type StudyQuestionMotionProps = HTMLMotionProps<'div'>

const StudyQuestionMotion = React.forwardRef<HTMLHeadingElement, StudyQuestionMotionProps>(
  function StudyQuestionMotion ({ children, ...props }, ref) {
    return (
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-8"
      >
        {children}
      </motion.div>
    )
  }
)

export { StudyQuestionMotion }
