import { format } from 'date-fns'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getPostBySlug, getAllPosts } from '@/lib/posts'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function Post({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="max-w-2xl mx-auto py-16">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
        <time className="text-neutral-400">
          {format(new Date(post.date), 'MMMM d, yyyy')}
        </time>
      </header>
      <div className="prose prose-invert prose-neutral max-w-none">
        <MDXRemote source={post.content} />
      </div>
    </article>
  )
} 