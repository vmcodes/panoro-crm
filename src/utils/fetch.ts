export default async function ownFetch(input: RequestInfo, info: RequestInit = {}) {
    console.log(input, info);
    const result = await fetch(input, {
        headers: {
            'Content-Type': 'application/json',
        },
        ...info,
    });

    return await result.json();
}
