import { json } from '@sveltejs/kit'

export const GET = async () => {

    const design = {
        "platforms": [
            { "id": 1, "title": "Smartwatch App", "slug": "smartwatch-app" },
            { "id": 2, "title": "Mobile Banking App", "slug": "mobile-banking-app" },
            { "id": 3, "title": "Online Shopping Platform", "slug": "online-shopping-platform" },
            { "id": 4, "title": "Music Streaming Service", "slug": "music-streaming-service" },
            { "id": 5, "title": "Movie Streaming Service", "slug": "movie-streaming-service" },
            { "id": 6, "title": "Photo App", "slug": "photo-app" },
            { "id": 7, "title": "Todo App", "slug": "todo-app" },
            { "id": 8, "title": "Digital Music Instrument", "slug": "digital-music-instrument" },
            { "id": 9, "title": "Map App", "slug": "map-app" },
            { "id": 10, "title": "Recipe Website", "slug": "recipe-website" },
            { "id": 11, "title": "Messaging App", "slug": "messaging-app" },
            { "id": 12, "title": "Weather App", "slug": "weather-app" },
            { "id": 13, "title": "Language Learning App", "slug": "language-learning-app" },
            { "id": 14, "title": "Digital Game", "slug": "digital-game" },
            { "id": 15, "title": "Ebook Reader", "slug": "ebook-reader" },
            { "id": 16, "title": "People with Terrible Internet Speed", "slug": "people-with-terrible-internet-speed" },
        ],
        "audiences": [
            { "id": 17, "title": "Metalheads", "slug": "metalheads" },
            { "id": 18, "title": "Someone with One Arm", "slug": "someone-with-one-arm" },
            { "id": 19, "title": "The Oldest Person You Know", "slug": "the-oldest-person-you-know" },
            { "id": 20, "title": "The Youngest (Non-Baby) Person You Know", "slug": "the-youngest-non-baby-person-you-know" },
            { "id": 21, "title": "Someone Who Lost Their Glasses", "slug": "someone-who-lost-their-glasses" },
            { "id": 22, "title": "Someone from 1985", "slug": "someone-from-1985" },
            { "id": 23, "title": "People with Low Literacy", "slug": "people-with-low-literacy" },
            { "id": 24, "title": "Very Busy People", "slug": "very-busy-people" },
            { "id": 25, "title": "People Who Can't Make Choices", "slug": "people-who-cant-make-choices" },
            { "id": 26, "title": "Bob (You Pick the Bob)", "slug": "bob-you-pick-the-bob" },
            { "id": 27, "title": "Yourself", "slug": "yourself" },
            { "id": 28, "title": "Your Best Friend", "slug": "your-best-friend" },
            { "id": 29, "title": "Really Rich People", "slug": "really-rich-people" },
            { "id": 30, "title": "Big Families", "slug": "big-families" },
            { "id": 31, "title": "Teenage Goths", "slug": "teenage-goths" },
        ],
        "chaosModifiers": [
            { "id": 32, "title": "In Black & White", "slug": "in-black-and-white" },
            { "id": 33, "title": "Using Typography & Lines", "slug": "using-typography-and-lines" },
            { "id": 34, "title": "Incorporating Physical Materials", "slug": "incorporating-physical-materials" },
            { "id": 35, "title": "Without Using Rectangles", "slug": "without-using-rectangles" },
            { "id": 36, "title": "Without Using a Professional Design Tool", "slug": "without-using-a-professional-design-tool" },
            { "id": 37, "title": "Without Using Words", "slug": "without-using-words" },
            { "id": 38, "title": "Designed for Use in a Pitch Black Environment", "slug": "designed-for-use-in-a-pitch-black-environment" },
            { "id": 39, "title": "Only Using Blue", "slug": "only-using-blue" },
            { "id": 40, "title": "Incorporating Some Kind of Animal in the Design", "slug": "incorporating-some-kind-of-animal-in-the-design" },
            { "id": 41, "title": "Using the Swiss Style of Design", "slug": "using-the-swiss-style-of-design" },
            { "id": 42, "title": "In the Style of De Stijl", "slug": "in-the-style-of-de-stijl" },
            { "id": 43, "title": "Using Skeumorphism", "slug": "using-skeumorphism" },
            { "id": 44, "title": "That Doesn't Use Clicking as an Interaction", "slug": "doesnt-use-clicking-as-an-interaction" },
            { "id": 45, "title": "With an Extremely Happy Feel", "slug": "with-an-extremely-happy-feel" },
            { "id": 46, "title": "With Extreme Minimalism", "slug": "with-extreme-minimalism" },
            { "id": 47, "title": "Using Some Form of 3D", "slug": "using-some-form-of-3d" }
        ]
    };

    return json(design)
}