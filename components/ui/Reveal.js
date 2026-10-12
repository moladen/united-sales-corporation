'use client';

import { motion } from 'framer-motion';

// Subtle fade-and-rise on scroll. Movement is removed for users who prefer
// reduced motion via <MotionConfig reducedMotion="user"> in MotionProvider.
export default function Reveal({ children, delay = 0, y = 18, className = '', as = 'div' }) {
  const Component = motion[as] || motion.div;
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
