// app/writings/page.tsx

import { getPaginatedPosts } from '@/lib/posts'
import PostPreview from '@/components/PostPreview'
import Pagination from '@/components/Pagination'

// Add route segment config
export const dynamic = 'force-static'
export const revalidate = 3600 // revalidate every hour

interface PageProps {
  searchParams?: { page?: string }
}

export default async function WritingsPage({ searchParams }: PageProps) {
  const param = await searchParams;
  const currentPage = Number(param?.page) || 1
  const { posts, totalPages } = await getPaginatedPosts(currentPage)

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Writings</h1>
      <div className="space-y-4">
        {posts.map((post) => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </div>
      {totalPages > 1 && (
        <Pagination totalPages={totalPages} currentPage={currentPage} />
      )}
    </div>
  )
}
