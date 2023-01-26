export const load = async ({ fetch, params }) => {
    const response = await fetch(`/api/design`)
    const json = await response.json()

    return {
        json
    }
}