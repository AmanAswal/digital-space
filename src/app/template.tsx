'use client';

import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';

const AnimatePresence = dynamic(
  () => import('framer-motion').then((mod) => mod.AnimatePresence),
  { ssr: true }
);

const PageTransition = dynamic(() => import('@/components/PageTransition'), {
  ssr: true
});

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