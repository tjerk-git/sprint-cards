import { json } from '@sveltejs/kit'

export const GET = async () => {

    const audio = {
        "platforms": [
            { "id": 1, "title": "Hiphop", "slug": "hiphop" },
            { "id": 2, "title": "Blues", "slug": "blues" },
            { "id": 3, "title": "Pop", "slug": "pop" },
            { "id": 4, "title": "Country", "slug": "country" },
            { "id": 5, "title": "Rock", "slug": "rock" },
            { "id": 6, "title": "Bossa Nova", "slug": "bossa-nova" },
            { "id": 7, "title": "Metal", "slug": "metal" },
            { "id": 8, "title": "Jazz", "slug": "jazz" },
            { "id": 9, "title": "Reggae", "slug": "reggae" },
            { "id": 10, "title": "Dubstep", "slug": "dubstep" },
            { "id": 11, "title": "Trap", "slug": "trap" },
            { "id": 12, "title": "Dance", "slug": "dance" },
            { "id": 13, "title": "Grunge", "slug": "grunge" },
            { "id": 14, "title": "Lo-fi", "slug": "lo-fi" },
            { "id": 15, "title": "Reggaeton", "slug": "reggaeton" },
            { "id": 16, "title": "Funk", "slug": "funk" },
            { "id": 17, "title": "Salsa", "slug": "salsa" },
            { "id": 18, "title": "Trip-hop", "slug": "trip-hop" },
            { "id": 19, "title": "Drum & Bass", "slug": "drum-and-bass" },
            { "id": 20, "title": "Electronic", "slug": "electronic" },
            { "id": 21, "title": "Easy Listening", "slug": "easy-listening" },
            { "id": 22, "title": "Soul", "slug": "soul" }
        ],
        "audiences": [
            { "id": 23, "title": "Jingle", "slug": "jingle" },
            { "id": 24, "title": "Soundtrack", "slug": "soundtrack" },
            { "id": 25, "title": "Beat", "slug": "beat" },
            { "id": 26, "title": "Lullaby", "slug": "lullaby" },
            { "id": 27, "title": "Podcast intro", "slug": "podcast-intro" },
            { "id": 28, "title": "Song", "slug": "song" },
            { "id": 29, "title": "Loop", "slug": "loop" },
            { "id": 30, "title": "Soundscape", "slug": "soundscape" },
            { "id": 31, "title": "Theme song", "slug": "theme-song" },
            { "id": 32, "title": "Motivational song", "slug": "motivational-song" },
            { "id": 33, "title": "Workout song", "slug": "workout-song" },
            { "id": 34, "title": "Campfire song", "slug": "campfire-song" }
        ],
        "chaosModifiers": [
            { "id": 35, "title": "Politicians", "slug": "politicians" },
            { "id": 36, "title": "Yourself", "slug": "yourself" },
            { "id": 37, "title": "Dads", "slug": "dads" },
            { "id": 38, "title": "Kids", "slug": "kids" },
            { "id": 39, "title": "Angsty teenagers", "slug": "angsty-teenagers" },
            { "id": 40, "title": "Parents", "slug": "parents" },
            { "id": 41, "title": "Lawyers", "slug": "lawyers" },
            { "id": 42, "title": "Football fans", "slug": "football-fans" },
            { "id": 43, "title": "Very busy people", "slug": "very-busy-people" },
            { "id": 44, "title": "Your best friend", "slug": "your-best-friend" },
            { "id": 45, "title": "70-year olds", "slug": "70-year-olds" },
            { "id": 46, "title": "Cartoon characters", "slug": "cartoon-characters" },
            { "id": 47, "title": "Moms", "slug": "moms" },
            { "id": 48, "title": "Babies", "slug": "babies" },
            { "id": 49, "title": "Robots", "slug": "robots" }
        ]
    };

    return json(audio)
}