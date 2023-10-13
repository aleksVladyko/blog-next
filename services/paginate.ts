import { AllPosts } from "./getPosts";

export const paginate = (
    posts: AllPosts[],
    pageNumber: number,
    pageSize: number
) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return posts.slice(startIndex, startIndex + pageSize); // 0, 9
};
