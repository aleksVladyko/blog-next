import { Button } from "react-bootstrap";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "home page"
};
export default function Home() {
    return (
        <>
            <h1>Hi guys</h1>
            <p>
                Для получения списка постов{" "}
                <Button
                    variant="primary"
                    href="/posts"
                    className="text-decoration-none"
                >
                    Link
                </Button>
            </p>
        </>
    );
}
