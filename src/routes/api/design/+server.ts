import { json } from '@sveltejs/kit'

export const GET = async () => {

    const design = {
        "audiences": [
            {
                "id": 1,
                "title": 'Cats'
            },
            {
                "id": 2,
                "title": 'Someone with one arm available'
            },
            {
                "id": 3,
                "title": 'The oldest person you know'
            },
        ],
        "platforms": [
            {
                "id": 1,
                "title": 'A smartwatch app'
            },
            {
                "id": 2,
                "title": 'A mobile banking app'
            },
        ],
        "chaosModifiers": [
            {
                "id": 1,
                "title": 'In black & white'
            },
            {
                "id": 2,
                "title": 'Using nothing but typography & lines'
            },
            {
                "id": 3,
                "title": 'Incorporating physical materials'
            },
        ],
    };
 
    return json(design)
}