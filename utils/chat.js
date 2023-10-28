import { headers } from "next/headers";

export async function getUser() {
    const url = `${process.env.URL}/api/getCurrentUser`;

    try {
        const res = await fetch(
            url,
            {
                method: "GET",
                headers: headers(),
            },
            { next: { revalidate: 0 } }
        );
        return await res.json();
    } catch (error) {
        console.log(error);
        return null;
    }
}

// Client helper functions
