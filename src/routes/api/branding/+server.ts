import { json } from '@sveltejs/kit'

export const GET = async () => {

  const branding = {
    "platforms": [
      {
        "id": 1,
        "title": "Shoe Company",
        "slug": "shoe-company"
      },
      {
        "id": 2,
        "title": "Band",
        "slug": "band"
      },
      {
        "id": 3,
        "title": "Music Festival",
        "slug": "music-festival"
      },
      {
        "id": 4,
        "title": "Audio Company",
        "slug": "audio-company"
      },
      {
        "id": 5,
        "title": "Bar",
        "slug": "bar"
      },
      {
        "id": 6,
        "title": "Beer",
        "slug": "beer"
      },
      {
        "id": 7,
        "title": "Clothing Company",
        "slug": "clothing-company"
      },
      {
        "id": 8,
        "title": "Museum",
        "slug": "museum"
      },
      {
        "id": 9,
        "title": "Public Transport Company",
        "slug": "public-transport-company"
      },
      {
        "id": 10,
        "title": "Pizza Restaurant",
        "slug": "pizza-restaurant"
      },
      {
        "id": 11,
        "title": "Burger Joint",
        "slug": "burger-joint"
      },
      {
        "id": 12,
        "title": "Personal Hygiene Company",
        "slug": "personal-hygiene-company"
      },
      {
        "id": 13,
        "title": "Coffee Shop",
        "slug": "coffee-shop"
      },

      {
        "id": 14,
        "title": "Snack",
        "slug": "snack"
      },
      {
        "id": 15,
        "title": "Music Store",
        "slug": "music-store"
      },
      {
        "id": 16,
        "title": "Magazine",
        "slug": "magazine"
      },
      {
        "id": 17,
        "title": "Airline",
        "slug": "airline"
      },
      {
        "id": 18,
        "title": "Film Festival",
        "slug": "film-festival"
      },
    ],
    "audiences": [
      {
        "id": 19,
        "title": "4-year-olds",
        "slug": "4-year-olds"
      },
      {
        "id": 20,
        "title": "Metalheads",
        "slug": "metalheads"
      },
      {
        "id": 21,
        "title": "Teenage Goths",
        "slug": "teenage-goths"
      },
      {
        "id": 22,
        "title": "Yourself",
        "slug": "yourself"
      },
      {
        "id": 23,
        "title": "70-year-olds",
        "slug": "70-year-olds"
      },
      {
        "id": 24,
        "title": "Really Rich People",
        "slug": "really-rich-people"
      },
      {
        "id": 25,
        "title": "Designers",
        "slug": "designers"
      },
      {
        "id": 26,
        "title": "Students",
        "slug": "students"
      },
      {
        "id": 27,
        "title": "Nerds",
        "slug": "nerds"
      },
      {
        "id": 28,
        "title": "Broke People",
        "slug": "broke-people"
      },
      {
        "id": 29,
        "title": "Introverts",
        "slug": "introverts"
      },
      {
        "id": 30,
        "title": "Extraverts",
        "slug": "extraverts"
      },
      {
        "id": 31,
        "title": "Gabbers",
        "slug": "gabbers"
      },
      {
        "id": 32,
        "title": "Boomers",
        "slug": "boomers"
      },
      {
        "id": 33,
        "title": "Anarchists",
        "slug": "anarchists"
      },
    ],
    "chaosModifiers": [
      {
        "id": 34,
        "title": "In Black & White",
        "slug": "in-black-and-white"
      },
      {
        "id": 35,
        "title": "Only Using Typography",
        "slug": "only-using-typography"
      },
      {
        "id": 36,
        "title": "Incorporating Physical Materials",
        "slug": "incorporating-physical-materials"
      },
      {
        "id": 37,
        "title": "Incorporating Some Kind of Animal",
        "slug": "incorporating-some-kind-of-animal"
      },
      {
        "id": 38,
        "title": "Using the Swiss Style of Design",
        "slug": "using-the-swiss-style-of-design"
      },
      {
        "id": 39,
        "title": "With an Extremely Happy Feel",
        "slug": "with-an-extremely-happy-feel"
      },
      {
        "id": 40,
        "title": "With Extreme Minimalism",
        "slug": "with-extreme-minimalism"
      },
      {
        "id": 41,
        "title": "Incorporating Some Form of 3D",
        "slug": "incorporating-some-form-of-3d"
      },
      {
        "id": 42,
        "title": "Without Using Straight Lines",
        "slug": "without-using-straight-lines"
      },
      {
        "id": 43,
        "title": "Using Only One Color",
        "slug": "using-only-one-color"
      },
      {
        "id": 44,
        "title": "Incorporating a Mascot",
        "slug": "incorporating-a-mascot"
      },
      {
        "id": 45,
        "title": "Incorporating Some Kind of Illustration",
        "slug": "incorporating-some-kind-of-illustration"
      },
      {
        "id": 46,
        "title": "Without Using a Computer",
        "slug": "without-using-a-computer"
      },
      {
        "id": 47,
        "title": "Incorporating a Gradient",
        "slug": "incorporating-a-gradient"
      },
      {
        "id": 48,
        "title": "Incorporating Something Handdrawn",
        "slug": "incorporating-something-handdrawn"
      }
    ]

  };

  return json(branding)
}