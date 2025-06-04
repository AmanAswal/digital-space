'use client';

import { motion } from 'framer-motion';

const variants = {
  initial: { 
    opacity: 0, 
    x: -20,
  },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  exit: { 
    opacity: 0, 
    x: 20,
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  }
};

const PageTransition = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full transform-gpu"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition; 