import { CustomPagination } from "@/components/CustomPagination";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Posts",
  description: "All posts",
};

export default function Blog() {
   
    return (
        <>
            <h1>page posts</h1>
            <CustomPagination  />
        </>
    );
}
