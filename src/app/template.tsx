'use client';

import { AnimatePresence } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import { usePathname } from 'next/navigation';

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="overflow-hidden">
      <AnimatePresence mode="wait">
        <PageTransition key={pathname}>
          <div className="px-4">
            {children}
          </div>
        </PageTransition>
      </AnimatePresence>
    </div>
  );
} 