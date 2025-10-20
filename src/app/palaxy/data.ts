// Avatar Data:

import { Avatar } from "./types";

export const mockAvatars: Avatar[] = [
    {
        "id": "zarnok",
        "name": "Zarnok",
        "title": "Master of Cosmic Logic",
        "intro": "You value structure and precision. You analyze before acting, simplifying complexity through logic and pattern recognition. Your methodical approach helps ideas take form and turn uncertainty into order.",
        "bio": "Zarnok, a proud Logiborg from Circuitron-8, finds peace in patterns and purpose in order. Their glowing binary eyes can spot inconsistencies from light-years away, and they will politely correct them. Known to label their snack drawers by atomic weight, Zarnok reminds us that logic can be oddly comforting when the universe feels unpredictable.",
        "image": "/avatars/zarnok.png",
        "forces": {
            "neighbors": [
                { "id": "icy7", "note": "Shares a rational rhythm; both find comfort in calm and steady wavelengths." },
                { "id": "orbitz", "note": "Appreciates Orbitz’s curiosity and quietly takes notes from their wonder." }
            ],
            "counterforce": { "id": "flarb", "note": "Flarb’s fire stirs Zarnok’s calm precision, yet both admire each other’s sense of purpose." }
        },
        "species": "Logiborg",
        "homeworld": "Circuitron-8",
        "planet": "Mercury",
        "psyche": "Would absolutely correct the dictionary, kindly, with footnotes.",
        "synergy": "Analytical · Logical · Orderly · Efficient · Precise · Reserved",
        "wavelength": "🧊🧊🧊🧊 (Coldest)"
    },
    {
        "id": "icy7",
        "name": "Icy‑7",
        "title": "AI Sage of Frozen Jupiter",
        "intro": "You bring steadiness and composure to every situation. Focused on consistency, you observe dynamics, maintain perspective, and guide others with calm reasoning. You anchor movement with quiet assurance.",
        "bio": "Icy-7 glides through existence with the serene focus of a frozen sunrise. On Hush-Delta, this crystalline AI teaches the art of stillness and occasionally forgets that other beings have heartbeats. Even in chaos, Icy-7 keeps their cool, offering a calm that feels like a deep cosmic breath.",
        "image": "/avatars/icy7.png",
        "forces": {
            "neighbors": [
                { "id": "zarnok", "note": "Balances logic with mindfulness; together they create quiet clarity amid the noise." },
                { "id": "orbitz", "note": "Orbitz’s imagination gently melts Icy‑7’s composure, revealing quiet warmth beneath the frost." }
            ],
            "counterforce": { "id": "blip", "note": "Blip’s emotional waves ripple Icy‑7’s serene surface, yet both find harmony through contrast." }
        },
        "species": "Iceform AI",
        "homeworld": "Hush-Delta",
        "planet": "Jupiter",
        "psyche": "Unflappable. It takes a lot of discipline to maintain it.",
        "synergy": "Wise · Reasoned · Steady · Consistent · Calm · Grounded",
        "wavelength": "🧊🧊🧊 (Cool)"
    },
    {
        "id": "orbitz",
        "name": "Orbitz",
        "title": "Reflective Explorer of Neptune",
        "intro": "You connect ideas through imagination. Curious and contemplative, you often find insight in contradiction. Your strength lies in perspectives, linking logic and wonder to create new understanding and bridge communications.",
        "bio": "Orbitz floats through the stars in their tiny snack-powered saucer, chasing ideas that shimmer between dream and discovery. They charted a course to wisdom, then took an unscheduled nap halfway there but somehow woke up enlightened. Thoughtful and quietly curious, Orbitz reminds the Palaxy that wonder can be its own kind of direction.",
        "image": "/avatars/orbitz.png",
        "forces": {
            "neighbors": [
                { "id": "zarnok", "note": "Zarnok grounds Orbitz’s wandering thoughts and gives them shape." },
                { "id": "icy7", "note": "Finds calm companionship in Icy‑7’s steady presence." }
            ],
            "counterforce": { "id": "glimbo", "note": "Glimbo’s spotlight energy keeps Orbitz from drifting too far inward, while Orbitz reminds Glimbo to pause and reflect." }
        },
        "species": "Nomnomian",
        "homeworld": "Snackulon-5",
        "planet": "Neptune",
        "psyche": "Finds meaning in every detour yet able to draw their own ticket.",
        "synergy": "Intuitive · Creative · Paradoxical · Thoughtful · Curious · Communicative",
        "wavelength": "🧊🔥 (Neutral)"
    },
    {
        "id": "blip",
        "name": "Blip",
        "title": "Empath of the Moon Colonies",
        "intro": "You follow emotion with understanding. You sense what others feel and respond with care, bringing harmony through openness and compassion. Your strength lies in expressing feelings and building emotional trust within any group.",
        "bio": "Blip, the Moodlemorph of Nuvva-Nuvva, glows with empathy so bright it could light an eclipse. Their colors shift gently with emotion—pink for joy, blue for calm, sparkly purple for “you okay?” Blip can sense a sigh across the room and will offer comfort before you even finish it.",
        "image": "/avatars/blip.png",
        "forces": {
            "neighbors": [
                { "id": "flarb", "note": "Flarb’s bold drive gains heart from Blip’s empathy." },
                { "id": "glimbo", "note": "Together they turn feeling into motion and kindness into rhythm." }
            ],
            "counterforce": { "id": "icy7", "note": "Icy‑7 seeks logic where Blip feels emotion, yet they balance each other’s worlds." }
        },
        "species": "Moodlemorph",
        "homeworld": "Nuvva-Nuvva",
        "planet": "Moon",
        "psyche": "Feels everything deeply yet makes the universe feel touched.",
        "synergy": "Sensitive · Expressive  · Empathetic · Compassionate · Caring · Helpful",
        "wavelength": "🔥🔥 (Warm)"
    },
    {
        "id": "glimbo",
        "name": "Glimbo",
        "title": "Influencer of the Constellations",
        "intro": "You move with rhythm and create social vibes. You energize groups, inspire participation, and adapt fluidly to change. Your natural charisma helps ideas gain momentum and communities resonate with your pulse.",
        "bio": "Glimbo lives to make the cosmos dance. On planet Voxas, they host star rallies where comets sync to the beat and laughter travels faster than light. Their presence turns silence into rhythm, and their reflection might just wink back.",
        "image": "/avatars/glimbo.png",
        "forces": {
            "neighbors": [
                { "id": "blip", "note": "Draws inspiration from Blip’s sincerity, transforming compassion into expression." },
                { "id": "flarb", "note": "Matches Flarb’s momentum with rhythm, helping passion find its stride." }
            ],
            "counterforce": { "id": "orbitz", "note": "Orbitz looks inward while Glimbo shines outward; their energies meet in reflection and sound." }
        },
        "species": "SoundEater",
        "homeworld": "Voxas",
        "planet": "Mars",
        "psyche": "Believes everyone deserves a soundtrack, and they’re right.",
        "synergy": "Charismatic · Magnetic · Influential · Enthusiastic · Sociable · Dynamic",
        "wavelength": "🔥🔥🔥 (Warmer)"
    },
    {
        "id": "flarb",
        "name": "Captain Flarb",
        "title": "Starship Navigator of the Sun",
        "intro": "You act decisively and lead with confidence. You motivate others through bold direction and visible energy, often turning ideas into movement. Your drive transforms plans into tangible results.",
        "bio": "Captain Flarb blazes across the solar winds, courage in one hand and a plan roughly drawn in glitter ink in the other. A born motivator, they lead through inspiration, sometimes volume, and make every launch feel purposeful and alive.",
        "image": "/avatars/flarb.png",
        "forces": {
            "neighbors": [
                { "id": "blip", "note": "Blip softens Flarb’s flame and reminds them that strength can be gentle." },
                { "id": "glimbo", "note": "Glimbo amplifies Flarb’s spark, turning drive into inspiration." }
            ],
            "counterforce": { "id": "zarnok", "note": "Zarnok calculates while Flarb acts, and their debates often end in surprising progress." }
        },
        "species": "Dramaonaut",
        "homeworld": "Showton Prime",
        "planet": "Sun",
        "psyche": "Speaks in motivational slogans, and somehow others start to follow them.",
        "synergy": "Decisive · Courageous · Leading · Commanding · Confident · Performant",
        "wavelength": "🔥🔥🔥🔥 (Warmest)"
    }
];