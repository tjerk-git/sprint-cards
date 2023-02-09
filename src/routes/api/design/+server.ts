import { json } from '@sveltejs/kit'

export const GET = async () => {

    const design = {
        "audiences": [
            {
                "id": 1,
                "title": 'People with terrible internet speed',
                "slug": 'People-with-terrible-internet-speed',
            },
            {
                "id": 2,
                "title": 'Metalheads',
                "slug": 'Metalheads',
            },
            {
                "id": 3,
                "title": 'Someone with one arm',
                "slug": 'Someone-with-one-arm',
            },
            {
                "id": 4,
                "title": 'Someone who lost their glasses',
                "slug": 'Someone-who-lost-their-glasses',
            },
            {
                "id": 5,
                "title": 'Someone from 1985',
                "slug": 'Someone-from-1985',
            },
            {
                "id": 6,
                "title": 'The youngest (non-baby) person you know',
                "slug": 'The-youngest-(non-baby)-person-you-know',
            },
            {
                "id": 7,
                "title": 'People with low literacy',
                "slug": 'People-with-low-literacy',
            },
            {
                "id": 8,
                "title": 'Very busy people',
                "slug": 'Very-busy-people',
            },
            {
                "id": 9,
                "title": "People who can't make choices",
                "slug": 'People-who-cant-make-choices',
            },
            {
                "id": 10,
                "title": 'Bob (you pick the Bob)',
                "slug": 'Bob-(you-pick-the-Bob)',
            },
            {
                "id": 11,
                "title": 'Yourself',
                "slug": 'Yourself',
            },
            {
                "id": 12,
                "title": 'Really rich people',
                "slug": 'Really-rich-people',
            },
            {
                "id": 13,
                "title": 'Your best friend',
                "slug": 'Your-best-friend'
            },
            {
                "id": 14,
                "title": 'Big families',
                "slug": 'Big-families'
            },
            {
                "id": 15,
                "title": 'People with low digital skills',
                "slug": 'People-with-low-digital-skills'
            },
            {
                "id": 16,
                "title": 'Teenage Goths',
                "slug": 'Teenage-Goths'
            }
        ],
        "platforms": [
            {
                "id": 1,
                "title": 'A smartwatch app',
                "slug": "A-smartwatch-app",
            },
            {
                "id": 2,
                "title": 'A mobile banking app',
                "slug": "A-mobile-banking-app",
            },
            {
                "id": 3,
                "title": 'An online shopping platform',
                "slug": "An-online-shopping-platform",
            },
            {
                "id": 4,
                "title": 'A music streaming service',
                "slug": "A-music-streaming-service",
            },
            {
                "id": 5,
                "title": 'A movie streaming service',
                "slug": "A-movie-streaming-service",
            },
            {
                "id": 6,
                "title": 'A photo app',
                "slug": "A-photo-app",
            },
            {
                "id": 7,
                "title": 'A todo app',
                "slug": "A-todo-app",
            },
            {
                "id": 8,
                "title": 'A digital music instrument',
                "slug": "A-digital-music-instrument",
            },
            {
                "id": 9,
                "title": 'A map app',
                "slug": "A-map-app",
            },
            {
                "id": 10,
			    "title": 'A recipe website',
                "slug": "A-recipe-website",
            },
            {
                "id": 11,
                "title": 'A messaging app',
                "slug": "A-messaging-app",
            },
            {
                "id": 12,
                "title": 'A weather app',
                "slug": "A-weather-app",
            },
            {
                "id": 13,
                "title": 'A language learning app',
                "slug": "A-language-learning-app",
            },
            {
                "id": 14,
			          "title": 'A digital game',
                "slug": "A-digital-game",
            },
            {
                "id": 15,
                "title": 'An ebook reader',
                "slug": "An-ebook-reader",
            }
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