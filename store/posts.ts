import { getAllPosts } from '@/services/getPosts'
import type { AllPosts } from '@/services/getPosts'
import { shallow } from 'zustand/shallow'
import { createWithEqualityFn } from 'zustand/traditional'

type UsePosts = {
  posts: AllPosts[]
  loading: boolean
  getAllPosts: () => Promise<void>
}

export const usePosts = createWithEqualityFn<UsePosts>()(
  (set) => ({
    posts: [],
    loading: false,
    getAllPosts: async () => {
      set({
        loading: true,
      })
      const posts = await getAllPosts()
      set({
        posts,
        loading: false,
      })
    },
  }),
  shallow,
)
