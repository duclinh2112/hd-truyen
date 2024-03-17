import { get } from '@/utils/libs/axios'

export const getAllPosts = async () => {
  const response = await get('https://jsonplaceholder.typicode.com/posts')
  return response
}
