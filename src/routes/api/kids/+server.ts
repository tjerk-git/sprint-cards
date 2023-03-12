import { json } from '@sveltejs/kit'

export const GET = async () => {

    const design = {
        "audiences": [
            {
                "id": 1,
                "title": 'Met stoelen',
                "slug": 'People-with-terrible-internet-speed',
            },
            {
                "id": 2,
                "title": 'Met planten',
                "slug": 'Metalheads',
            },
            {
                "id": 3,
                "title": 'Op het schoolplein',
                "slug": 'Someone-with-one-arm',
            },
            {
                "id": 4,
                "title": 'In de hal',
                "slug": 'Someone-who-lost-their-glasses',
            },
            {
                "id": 5,
                "title": 'Met stiften',
                "slug": 'Someone-from-1985',
            },
            {
                "id": 6,
                "title": 'Met potloden',
                "slug": 'The-youngest-(non-baby)-person-you-know',
            },
            {
                "id": 7,
                "title": 'Met papier',
                "slug": 'People-with-low-literacy',
            },
            {
                "id": 8,
                "title": 'Met een meester of juf',
                "slug": 'Very-busy-people',
            },
            {
                "id": 9,
                "title": "Met een flesje water",
                "slug": 'People-who-cant-make-choices',
            },
            {
                "id": 10,
                "title": 'Met boeken',
                "slug": 'Bob-(you-pick-the-Bob)',
            },
            {
                "id": 11,
                "title": 'Met koffiefilters',
                "slug": 'Yourself',
            },
            {
                "id": 12,
                "title": 'Met een touw',
                "slug": 'Really-rich-people',
            },
            {
                "id": 13,
                "title": 'Met een liniaal',
                "slug": 'Your-best-friend'
            },
            {
                "id": 14,
                "title": 'Met tafels',
                "slug": 'Big-families'
            },
            {
                "id": 15,
                "title": 'Broodbakjes',
                "slug": 'People-with-low-digital-skills'
            },
        ],
        "platforms": [
            {
                "id": 1,
                "title": 'Waarbij je niet niet mag praten',
                "slug": "A-smartwatch-app",
            },
            {
                "id": 2,
                "title": 'Waarbij je iets moet gooien',
                "slug": "A-mobile-banking-app",
            },
            {
                "id": 3,
                "title": 'Waarbij je alleen het woord kikker mag zeggen',
                "slug": "An-online-shopping-platform",
            },
            {
                "id": 4,
                "title": 'Waarbij je altijd 1 hand op je hoofd moet houden',
                "slug": "A-music-streaming-service",
            },
            {
                "id": 5,
                "title": 'Waarbij je stil moet zijn',
                "slug": "A-movie-streaming-service",
            },
            {
                "id": 6,
                "title": 'Waarbij je 1.5 meter afstand moet houden',
                "slug": "A-photo-app",
            },
            {
                "id": 7,
                "title": 'Waarbij je geblinddoekt bent',
                "slug": "A-todo-app",
            },
            {
                "id": 8,
                "title": 'Waarbij je altijd een fiets vast moet houden',
                "slug": "A-digital-music-instrument",
            },
            {
                "id": 9,
                "title": 'Waarbij je elkaar moet vasthouden',
                "slug": "A-map-app",
            },
            {
                "id": 10,
                "title": 'Waarbij de vloer lava is',
                "slug": "A-recipe-website",
            },
        ],
        "chaosModifiers": [
            {
                "id": 1,
                "title": 'In black & white',
                "slug": "In-black-and-white",
            },
            {
                "id": 2,
                "title": 'Using nothing but typography & lines',
                "slug": "Using-nothing-but-typography-and-lines",
            },
            {
                "id": 3,
                "title": 'Incorporating physical materials',
                "slug": "Incorporating-physical-materials",
            },
            {
                "id": 4,
                "title": 'Without using rectangles',
                "slug": "Without-using-rectangles",
            },
            {
                "id": 5,
                "title": 'Without using a professional design tool',
                "slug": "Without-using-a-professional-design-tool",
            },
            {
                "id": 6,
                "title": 'Without using words',
                "slug": "Without-using-words",
            },
            {
                "id": 7,
                "title": 'Designed for use in a pitch black environment',
                "slug": "Designed-for-use-in-a-pitch-black-environment",
            },
            {
                "id": 8,
                "title": 'Only using blue',
                "slug": "Only-using-blue",
            },
            {
                "id": 9,
                "title": 'Incorporating some kind of animal in the design',
                "slug": "Incorporating-some-kind-of-animal-in-the-design",
            },
            {
                "id": 10,
                "title": 'Using the Swiss Style of design',
                "slug": "Using-the-Swiss-Style-of-design",
            },
            {
                "id": 11,
                "title": 'In the style of De Stijl',
                "slug": "In-the-style-of-De-Stijl",
            },
            {
                "id": 12,
                "title": "That doesn't use clicking as an interaction",
                "slug": "That-doesn't-use-clicking-as-an-interaction",
            },
            {
                "id": 13,
                "title": 'With extreme minimalism',
                "slug": "With-extreme-minimalism",
            },
            {
                "id": 14,
                "title": 'More cowbell',
                "slug": "More-cowbell",
            },
            {
                "id": 15,
                "title": 'Using Skeumorphism',
                "slug": "Using-Skeumorphism",
            },
            {
                "id": 16,
                "title": 'Using some form of 3D',
                "slug": "Using-some-form-of-3D",
            },
            {
                "id": 17,
                "title": 'With an extreme happy vibe',
                "slug": "With-an-extreme-happy-vibe",
            }
        ],
    };

    return json(design)
}