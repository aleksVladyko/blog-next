import { Post } from '@/components/Post'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Post',
  description: 'page post',
}
const page = () => {
  return <Post />
}
export default page
