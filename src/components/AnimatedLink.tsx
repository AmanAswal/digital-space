'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface AnimatedLinkProps {
  href: string;
  label: string;
  className?: string;
}

export default function AnimatedLink({ href, label, className }: AnimatedLinkProps) {
  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      style={{ display: 'inline-block' }}
    >
      <Link
        href={href}
        target="_blank"
        className={`underline ${className}`}
      >
        {label}
      </Link>
    </motion.span>
  );
} 