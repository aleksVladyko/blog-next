export type AllPosts = {
  userId: number
  id: number
  title: string
  body: string
}
export const getAllPosts = async (): Promise<AllPosts[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60,
    },
  })
  if (!response.ok) throw new Error('Unable to fetch posts.')

  return response.json()
}
export async function getData(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  )

  return response.json()
}
export async function getCommentsPostId(id: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
    {
      next: {
        revalidate: 60,
      },
    },
  )
  return res.json()
}
export async function getAuthorPost(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  return res.json()
}
