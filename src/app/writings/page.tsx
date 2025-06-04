import { getPaginatedPosts } from '@/lib/posts'
import PostPreview from '@/components/PostPreview'
import Pagination from '@/components/Pagination'

export default function WritingsPage({
  searchParams,
}: {
  searchParams?: { page?: string }
}) {
  const currentPage = Number(searchParams?.page) || 1
  const { posts, totalPages, currentPage: page } = getPaginatedPosts(currentPage)

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Writings</h1>
      <div className="space-y-4">
        {posts.map((post) => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </div>
      {totalPages > 1 && (
        <Pagination totalPages={totalPages} currentPage={page} />
      )}
    </div>
  )
}