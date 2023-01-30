import { json } from '@sveltejs/kit'

export const GET = async () => {

    const design = {
        "platforms": [
            {
                "id": 1,
                "title": 'Hip-hop',
                "slug": 'Hip-hop',
            },
            {
                "id": 2,
                "title": 'Blues',
                "slug": 'Blues',
            },
            {
                "id": 3,
                "title": 'Pop',
                "slug": 'Pop',
            }
            ,
            {
                "id": 4,
                "title": 'Country',
                "slug": 'Country',
            },
            {
                "id": 5,
                "title": 'Rock',
                "slug": 'Rock',
            },
            {
                "id": 6,
                "title": 'Bolero',
                "slug": 'Bolero',
            },
            {
                "id": 7,
                "title": 'Metal',
                "slug": 'Metal',
            },
            {
                "id": 8,
                "title": 'Jazz',
                "slug": 'Jazz',
            },
            {
                "id": 9,
                "title": 'Reggae',
                "slug": 'Reggae',
            },
            {
                "id": 10,
                "title": 'Dubstep',
                "slug": 'Dubstep',
            },
            {
                "id": 11,
                "title": 'Trap',
                "slug": 'Trap',
            },
            {
                "id": 12,
                "title": 'EDM',
                "slug": 'EDM',
            },
            {
                "id": 13,
                "title": 'Grunge',
                "slug": 'Grunge',
            },
            {
                "id": 14,
                "title": 'Lo-fi',
                "slug": 'Lo-fi',
            },
            {
                "id": 15,
                "title": 'Punk',
                "slug": 'Punk',
            },
            {
                "id": 16,
                "title": 'Reggaeton',
                "slug": 'Reggaeton',
            },
            {
                "id": 17,
                "title": 'Lullaby',
                "slug": 'Lullaby',
            },
            {
                "id": 18,
                "title": 'Salsa',
                "slug": 'Salsa',
            },
            {
                "id": 19,
                "title": 'Trip hop',
                "slug": 'Trip hop',
            },
            {
                "id": 20,
                "title": 'Jungle',
                "slug": 'Jungle',
            },
            {
                "id": 21,
                "title": 'Funk',
                "slug": 'Funk',
            },            
        ],
        "audiences": [
            {
                "id": 1,
                "title": 'Jingle',
                "slug": 'Jingle',
            },
            {
                "id": 2,
                "title": 'Soundtrack',
                "slug": 'Soundtrack',
            },
            {
                "id": 3,
                "title": 'Beat',
                "slug": 'Beat',
            },
            {
                "id": 4,
                "title": 'Podcast intro',
                "slug": 'Podcast-intro',
            },
            {
                "id": 5,
                "title": 'Song',
                "slug": 'Song',
            },
            {
                "id": 6,
                "title": 'Loop',
                "slug": 'Loop',
            },
            {
                "id": 7,
                "title": 'Trippy Soundscape',
                "slug": 'Trippy Soundscape',
            },
            {
                "id": 8,
                "title": 'Generic copyright free track',
                "slug": 'Generic-copyright-free-track',
            },
            {
                "id": 9,
                "title": 'Anthem',
                "slug": 'Anthem',
            },
            {
                "id": 10,
                "title": 'Motivational track',
                "slug": 'Motivational-track',
            },
            {
                "id": 11,
                "title": 'Workout track',
                "slug": 'Workout-track',
            },
            {
                "id": 12,
                "title": 'Meditation track',
                "slug": 'Meditation-track',
            },
            {
                "id": 13,
                "title": 'Sports final celebration track',
                "slug": 'Sports-final-celebration-track',
            },
            {
                "id": 14,
                "title": 'World-cup song',
                "slug": 'World-cup-song',
            },
            {
                "id": 15,
                "title": 'Campfire song',
                "slug": 'Campfire-song',
            },
            {
                "id": 16,
                "title": 'Mating ritual track',
                "slug": 'Mating-ritual-track',
            },
        ],
        "chaosModifiers": [
            {
                "id": 1,
                "title": 'For birds',
                "slug": 'For-birds'
            },
            {
                "id": 2,
                "title": 'For aliens',
                "slug": 'For-aliens'
            },
            {
                "id": 3,
                "title": 'Dutch people',
                "slug": 'Dutch-people'
            },
            {
                "id": 4,
                "title": 'German people',
                "slug": 'German-people'
            },
            {
                "id": 5,
                "title": 'Children',
                "slug": 'Children'
            },
            {
                "id": 7,
                "title": 'Parents',
                "slug": 'Parents'
            },
            {
                "id": 8,
                "title": 'Lawyers',
                "slug": 'Lawyers'
            },
            {
                "id": 9,
                "title": 'Hooligans',
                "slug": 'Hooligans'
            },
        ],
    };

    return json(design)
}