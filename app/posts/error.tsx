"use client";
export default function ErrorWrapper({ error }: { error: Error }) {
    return <h1>Sorry {error.message}</h1>;
}
