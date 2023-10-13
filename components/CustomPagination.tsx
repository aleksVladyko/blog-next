"use client";
import { AllPosts, getAllPosts } from "@/services/getPosts";
import { paginate } from "@/services/paginate";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SetStateAction, useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";

const CustomPagination = () => {
    const router = useRouter();
    const [posts, setPosts] = useState<AllPosts[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const pageSize = 10;
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(posts.length / pageSize); i++) {
        pageNumbers.push(i);
    }


    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const fetchedPosts = await getAllPosts();
                setPosts(fetchedPosts);
            } catch (error) {
                console.error("Unable to fetch posts:", error);
            }
        };

        fetchPosts();
    }, []);

    const handlePageChange = (pageNumber: SetStateAction<number>) => {
        router.push(`/posts/?page=${pageNumber}`);
        setCurrentPage(pageNumber);
    };

    const paginatedPosts = paginate(posts, currentPage, pageSize);

    return (
        <>
            {!paginatedPosts ? (
                <h2>Loading</h2>
            ) : (
                paginatedPosts.map((item: AllPosts) => {
                    return (
                        <p key={item.id}>
                            <Link href={`/posts/${item.id}`}>{item.title}</Link>
                        </p>
                    );
                })
            )}
            <Pagination className="d-flex justify-content-center ">
                <Pagination.First
                    onClick={() => handlePageChange(1)}
                    disabled={currentPage === 1}
                />
                <Pagination.Prev
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                />

                {pageNumbers.map((number) => (
                    <Pagination.Item
                        key={number}
                        active={number === currentPage}
                        onClick={() => handlePageChange(number)}
                    >
                        {number}
                    </Pagination.Item>
                ))}

                <Pagination.Next
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={
                        currentPage === Math.ceil(posts.length - 1 / pageSize)
                    }
                />

                <Pagination.Last
                    onClick={() =>
                        handlePageChange(Math.ceil(posts.length / pageSize))
                    }
                    disabled={
                        currentPage === Math.ceil(posts.length - 1 / pageSize)
                    }
                />
            </Pagination>
        </>
    );
};

export { CustomPagination };
