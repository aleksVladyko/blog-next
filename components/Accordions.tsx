"use client";
import Accordion from "react-bootstrap/Accordion";
const Accordions = ({ comments }: any) => {
    return (
        <Accordion flush>
            {comments.map(
                (comment: {
                    id: number;
                    name: string;
                    body: string;
                    email: string;
                }) => (
                    <Accordion.Item
                        key={comment.id}
                        eventKey={comment.id.toString()}
                    >
                        <Accordion.Header>{comment.email}</Accordion.Header>
                        <Accordion.Body>{comment.body}</Accordion.Body>
                    </Accordion.Item>
                )
            )}
        </Accordion>
    );
};
export { Accordions };
