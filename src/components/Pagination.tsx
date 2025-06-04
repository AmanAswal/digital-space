'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

export default function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="flex justify-center items-center space-x-4 mt-8">
      {currentPage > 1 && (
        <Link
          href={createPageURL(currentPage - 1)}
          className="px-4 py-2 text-sm rounded-md bg-neutral-800 hover:bg-neutral-700 transition-colors"
        >
          Previous
        </Link>
      )}
      
      <div className="flex space-x-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Link
            key={page}
            href={createPageURL(page)}
            className={`px-4 py-2 text-sm rounded-md transition-colors ${
              currentPage === page
                ? 'bg-emerald-600 text-white'
                : 'bg-neutral-800 hover:bg-neutral-700'
            }`}
          >
            {page}
          </Link>
        ))}
      </div>

      {currentPage < totalPages && (
        <Link
          href={createPageURL(currentPage + 1)}
          className="px-4 py-2 text-sm rounded-md bg-neutral-800 hover:bg-neutral-700 transition-colors"
        >
          Next
        </Link>
      )}
    </div>
  );
} 