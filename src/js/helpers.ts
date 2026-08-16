const API_URL = import.meta.env.SECRET_API_URL;
const BEARER_TOKEN = `Bearer ${import.meta.env.SECRET_API_TOKEN}`

export async function getData(endpoint: string): Promise<Response> {
    return await fetch(`${API_URL}/api/${endpoint}`, {
        method: "GET",
        headers: {
            "Authorization": BEARER_TOKEN,
        },
    })
}

export function blogDate(date: Date): string {
    return new Date(date).toLocaleDateString("en-US")
}

export function capitalizeString(stringInput: string) {
    return stringInput.charAt(0).toUpperCase() + stringInput.slice(1)
}
