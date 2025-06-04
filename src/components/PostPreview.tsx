import Link from 'next/link'
import { format } from 'date-fns'
import type { Post } from '@/lib/posts'

export default function PostPreview({ post }: { post: Post }) {
  return (
    <Link 
      href={`/writings/${post.slug}`}
      className="block p-6 mb-6 rounded-lg border border-neutral-800 hover:border-neutral-700 transition-colors"
    >
      <article>
        <div className="flex justify-between items-baseline mb-2">
          <h2 className="text-xl font-extralight text-neutral-100">
            {post.title}
          </h2>
          <time className="text-sm text-neutral-400">
            {format(new Date(post.date), 'MMMM d, yyyy')}
          </time>
        </div>
        <p className="text-neutral-300">
          {post.description}
        </p>
      </article>
    </Link>
  )
} 