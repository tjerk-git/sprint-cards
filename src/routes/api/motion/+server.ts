import { json } from '@sveltejs/kit'

export const GET = async () => {

    const motion = {
        "platforms": [
            { "id": 1, "title": "2D Animation", "slug": "2d-animation" },
            { "id": 2, "title": "3D Animation", "slug": "3d-animation" },
            { "id": 3, "title": "Stop Motion Animation", "slug": "stop-motion-animation" },
            { "id": 4, "title": "Motion Graphics", "slug": "motion-graphics" },
            { "id": 5, "title": "Kinetic Typographic Animation", "slug": "kinetic-typographic-animation" },
            { "id": 6, "title": "Rotoscoped Animation", "slug": "rotoscoped-animation" },
            { "id": 7, "title": "Cel Animation", "slug": "cel-animation" },
            { "id": 8, "title": "Claymation", "slug": "claymation" },
            { "id": 9, "title": "Cutout Animation", "slug": "cutout-animation" },
            { "id": 10, "title": "Flipbook", "slug": "flipbook" },
            { "id": 11, "title": "Puppet Animation", "slug": "puppet-animation" },
            { "id": 12, "title": "Morphing Animation", "slug": "morphing-animation" },
            { "id": 13, "title": "Pixilation Animation", "slug": "pixilation-animation" },
            { "id": 14, "title": "Object Animation", "slug": "object-animation" },
        ],
        "audiences": [
            { "id": 15, "title": "Museum", "slug": "museum" },
            { "id": 16, "title": "Magic Show", "slug": "magic-show" },
            { "id": 17, "title": "VR Experience", "slug": "vr-experience" },
            { "id": 18, "title": "Political Campaign", "slug": "political-campaign" },
            { "id": 19, "title": "Paranormal Investigation Group", "slug": "paranormal-investigation-group" },
            { "id": 20, "title": "Fortune Teller", "slug": "fortune-teller" },
            { "id": 21, "title": "Educational TV Program", "slug": "educational-tv-program" },
            { "id": 22, "title": "Nature Documentary", "slug": "nature-documentary" },
            { "id": 23, "title": "Design Studio", "slug": "design-studio" },
            { "id": 24, "title": "Music Festival", "slug": "music-festival" },
            { "id": 25, "title": "Music Venue", "slug": "music-venue" },
            { "id": 26, "title": "School", "slug": "school" },
        ],
        "chaosModifiers": [
            { "id": 27, "title": "Horror Series Intro", "slug": "horror-series-intro" },
            { "id": 28, "title": "Film Festival", "slug": "film-festival" },
            { "id": 29, "title": "Using Only 2 Colors", "slug": "using-only-2-colors" },
            { "id": 30, "title": "In an Isometric Perspective", "slug": "in-an-isometric-perspective" },
            { "id": 31, "title": "Using Explosions", "slug": "using-explosions" },
            { "id": 32, "title": "Without Sound", "slug": "without-sound" },
            { "id": 33, "title": "Using Only Rectangles", "slug": "using-only-rectangles" },
            { "id": 34, "title": "Without Using Text", "slug": "without-using-text" },
            { "id": 35, "title": "Using Silhouettes", "slug": "using-silhouettes" },
            { "id": 36, "title": "For Small Children", "slug": "for-small-children" },
            { "id": 37, "title": "For Teenage Goths", "slug": "for-teenage-goths" },
            { "id": 38, "title": "For 70-year Olds", "slug": "for-70-year-olds" },
            { "id": 39, "title": "For Metalheads", "slug": "for-metalheads" },
            { "id": 40, "title": "For Very Busy People", "slug": "for-very-busy-people" },
            { "id": 41, "title": "In the Style of De Stijl", "slug": "in-the-style-of-de-stijl" },
            { "id": 42, "title": "With Extreme Minimalism", "slug": "with-extreme-minimalism" }
        ]
    };

    return json(motion)
}