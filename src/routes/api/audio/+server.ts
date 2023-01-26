import { json } from '@sveltejs/kit'

export const GET = async () => {

    const design = {
        "audiences": [
            {
                "id": 1,
                "title": 'Audio!'
            },
            {
                "id": 2,
                "title": 'Audio'
            },
        ],
        "platforms": [
            {
                "id": 1,
                "title": 'Hip hop'
            },
            {
                "id": 2,
                "title": 'Rock'
            },
        ],
        "chaosModifiers": [
            {
                "id": 1,
                "title": 'No loops'
            },
            {
                "id": 2,
                "title": 'Stuff'
            }
        ],
    };

    return json(design)
}