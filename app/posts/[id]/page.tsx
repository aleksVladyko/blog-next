import { Accordions } from "@/components/Accordions";
import { getAuthorPost, getCommentsPostId, getData } from "@/services/getPosts";
import { Metadata } from "next";

type Props = {
    params: {
        id: string;
    };
};

export async function generateMetadata({
    params: { id },
}: Props): Promise<Metadata> {
    const post = await getData(id);

    return {
        title: post.title,
    };
}

export default async function Post({ params: { id } }: Props) {
    const post = await getData(id);
    const author = await getAuthorPost(id);
    const comments = await getCommentsPostId(id);

    return (
        <>
            <h1 style={{ color: "lightcoral" }}>Author: {author.username}</h1>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <div>
                Comments:
                <Accordions comments={comments} />
            </div>
        </>
    );
}
