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

export function categoryIcon(categoryId: string = ''): string {
    let icon = ""
    switch (categoryId) {
        case "ecommerce":
            icon = "nf-fa-cart_shopping"
            break;
        case "b2b":
            icon = "nf-md-handshake"
            break;
        case "medical":
            icon = "nf-fa-laptop_medical"
            break;
        case "government":
            icon = "nf-cod-law"
            break;
        case "banking/credit":
            icon = "nf-fa-bank"
            break;
        default:
            icon = "nf-md-developer_board"
    }

    return icon
}

export function getTechStackIcon(technology: string): string {
    if (technology == null) return ""
    return (() => {
        switch (technology.toLowerCase().replaceAll(' ', '').replaceAll('.', '')) {
            case "tailwindcss":
                return "nf-dev-tailwindcss"
            case "wordpress":
                return "nf-dev-wordpress"
            case "woocommerce":
                return "nf-dev-woocommerce"
            case "sass":
                return "nf-md-sass"
            case "react":
                return "nf-md-react"
            case "astro":
                return "nf-md-astro"
            case "alpinejs":
                return "nf-dev-alpinejs"
            case "jquery":
                return "nf-dev-jquery"
            case "vuejs":
                return "nf-seti-vue"
            case "nextjs":
                return "nf-dev-nextjs"
            case "bootstrap":
                return "nf-dev-bootstrap"
            case "laravel":
                return "nf-dev-laravel"
            case "angular":
                return "nf-dev-angular"
            case "iconicframework":
                return "nf-dev-ionic"
            case "craftcms":
                return "nf-md-alpha_c_circle"
            case "shopify":
            case "craftcommerce":
                return "nf-md-alpha_s_circle"
            default:
                return "nf-dev-terminal"
        }
    })()
}
