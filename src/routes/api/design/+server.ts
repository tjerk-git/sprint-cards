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
            {
                "id": 4,
                "title": 'Someone who lost their glasses'
            },
            {
                "id": 5,
                "title": 'Someone from 1985'
            },
            {
                "id": 6,
                "title": 'The youngest (non-baby) person you know'
            },
            {
                "id": 7,
                "title": 'People with low literacy'
            },
            {
                "id": 8,
                "title": 'Very busy people'
            },
            {
                "id": 9,
                "title": "People who can't make choices"
            },
            {
                "id": 10,
                "title": 'Bob (you pick the Bob)'
            },
            {
                "id": 11,
                "title": 'Yourself'
            },
            {
                "id": 12,
                "title": 'Really rich people'
            },
            {
                "id": 13,
                "title": 'For your best friend'
            },
            {
                "id": 14,
                "title": 'Families'
            },
            {
                "id": 15,
                "title": 'For people with low digital skills'
            }
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
            {
                "id": 3,
                "title": 'An online shopping platform'
            },
            {
                "id": 4,
                "title": 'A music streaming service'
            },
            {
                "id": 5,
                "title": 'A movie streaming service'
            },
            {
                "id": 6,
                "title": 'A photo app'
            },
            {
                "id": 7,
                "title": 'A todo app'
            },
            {
                "id": 8,
                "title": 'A digital music instrument'
            },
            {
                "id": 9,
                "title": 'A map app'
            },
            {
                "id": 10,
                "title": 'A job marketplace'
            },
            {
                "id": 11,
                "title": 'A messaging app'
            },
            {
                "id": 12,
                "title": 'A weather app'
            },
            {
                "id": 13,
                "title": 'A language learning app'
            },
            {
                "id": 14,
                "title": 'A photo sharing app'
            },
            {
                "id": 15,
                "title": 'An ebook reader interface'
            }
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
            {
                "id": 4,
                "title": 'Without using rectangles'
            },
            {
                "id": 5,
                "title": 'Without using a professional design tool'
            },
            {
                "id": 6,
                "title": 'Without using words'
            },
            {
                "id": 7,
                "title": 'Designed for use in a pitch black environment'
            },
            {
                "id": 8,
                "title": 'Only using blue'
            },
            {
                "id": 9,
                "title": 'Incorporating some kind of animal in the design'
            },
            {
                "id": 10,
                "title": 'Using the Swiss Style of design'
            },
            {
                "id": 11,
                "title": 'In the style of De Stijl'
            },
            {
                "id": 12,
                "title": "That doesn't use clicking as an interaction"
            },
            {
                "id": 13,
                "title": 'With extreme minimalism'
            },
            {
                "id": 14,
                "title": 'More cowbell'
            },
            {
                "id": 15,
                "title": 'Using Skeumorphism'
            },
            {
                "id": 16,
                "title": 'Using some form of 3D'
            },
            {
                "id": 17,
                "title": 'With an extreme happy vibe'
            }
        ],
    };
 
    return json(design)
}