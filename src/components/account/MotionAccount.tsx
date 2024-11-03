'use client'

import React from 'react'
import { motion } from 'framer-motion'
import type { HTMLMotionProps } from 'framer-motion'

type MotionAccountProps = HTMLMotionProps<'div'>

const MotionAccount = React.forwardRef<HTMLHeadingElement, MotionAccountProps>(
  function MotionH1 ({ children, ...props }, ref) {
    return (
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        {children}
      </motion.div>
    )
  }
)

export { MotionAccount }
