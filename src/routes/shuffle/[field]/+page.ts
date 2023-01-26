
export const load = async ({ fetch, params }) => {

    const response = await fetch(`/api/${params.field}`)
    const json = await response.json()

    return {
        json
    }
}