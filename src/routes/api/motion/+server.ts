import { json } from '@sveltejs/kit'

export const GET = async () => {

    const design = {
        "platforms": [
            {
                "id": 1,
                "title": '2D animation',
                "slug": '2D-animation',
            },
            {
                "id": 2,
                "title": '3D-animation',
                "slug": '3D-animation',
            },
            {
                "id": 3,
                "title": 'Stop-motion',
                "slug": 'Stop-motion',
            }
            ,
            {
                "id": 4,
                "title": 'Motion graphic animation',
                "slug": 'Motion-graphic-animation',
            },
            {
                "id": 5,
                "title": 'Kinetic typography video',
                "slug": 'Kinetic-typography-video',
            },
            {
                "id": 6,
                "title": 'Rotoscoped animation',
                "slug": 'Rotoscoped-animation',
            },
            {
                "id": 7,
                "title": 'Cel animation',
                "slug": 'Cel-animation',
            },
            {
                "id": 8,
                "title": 'Clay animation',
                "slug": 'Clay-animation',
            },
            {
                "id": 9,
                "title": 'Cut-out animation',
                "slug": 'Cut-out-animation',
            },
            {
                "id": 10,
                "title": 'Dubstep',
                "slug": 'Dubstep',
            },
            
        ],
        "audiences": [
            {
                "id": 1,
                "title": 'Cryptocurrency companies',
                "slug": 'Cryptocurrency-companies',
            },
            {
                "id": 2,
                "title": 'Magic shows or illusions',
                "slug": 'Magic-shows-or-illusions',
            },
            {
                "id": 3,
                "title": 'Museums for interactive exhibits',
                "slug": 'Museums-for-interactive-exhibits',
            },
            {
                "id": 4,
                "title": 'Virtual reality experiences',
                "slug": 'Virtual-reality-experiences',
            },
            {
                "id": 5,
                "title": 'Adult entertainment industry',
                "slug": 'Adult-entertainment-industry',
            },
            {
                "id": 6,
                "title": 'Political campaigns',
                "slug": 'Political-campaigns',
            },
            {
                "id": 7,
                "title": 'Paranormal investigation groups',
                "slug": 'Paranormal-investigation-groups',
            },
            {
                "id": 8,
                "title": 'Religious organizations for animated gospel stories',
                "slug": 'Religious-organizations-for-animated-gospel-stories',
            },
            {
                "id": 9,
                "title": 'Medical simulation companies',
                "slug": 'Medical-simulation-companies',
            },
            {
                "id": 10,
                "title": 'Fortune-telling or astrology services',
                "slug": 'Fortune-telling-or-astrology-services',
            },
        ],
        "chaosModifiers": [
            {
                "id": 1,
                "title": 'Using only 2 or 3 colors',
                "slug": 'Using-only-2-or-3-colors'
            },
            {
                "id": 2,
                "title": 'In isometric projection',
                "slug": 'In-isometric-projection'
            },
            {
                "id": 3,
                "title": 'Using explosions or particle systems',
                "slug": 'Using-explosions-or-particle-systems'
            },
            {
                "id": 4,
                "title": 'That can be understood in silence',
                "slug": 'That-can-be-understood-in-silence'
            },
            {
                "id": 5,
                "title": 'Using only rectangles and squares',
                "slug": 'Using-only-rectangles-and-squares'
            },
            {
                "id": 7,
                "title": 'Without the use of text (spoken and written)',
                "slug": 'Without-the-use-of-text-(spoken-and-written)'
            },
            {
                "id": 8,
                "title": 'Using silhouettes',
                "slug": 'Using-silhouettes'
            },
        ],
    };

    return json(design)
}