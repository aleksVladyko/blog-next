'use client'

import { AllPosts } from '@/services/getPosts'
import { usePosts } from '@/store/posts'
import Link from 'next/link'
import { useEffect } from 'react'

const Post = () => {
  const [posts, loading, getAllPosts] = usePosts((state) => [
    state.posts,
    state.loading,
    state.getAllPosts,
  ])
  useEffect(() => {
    getAllPosts()
  }, [getAllPosts])

  return (
    <div>
      {!loading &&
        posts.map((post: AllPosts) => (
          <p key={post.id}>
            <Link
              href={`/posts/${post.id}`}
            >{`${post.id}. ${post.title}`}</Link>
          </p>
        ))}
    </div>
  )
}
export { Post }
