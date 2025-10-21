// Avatar Data:

import { Avatar } from "../types";

export const mockAvatars: Avatar[] = [
    {
        "id": "zarnok",
        "name": "Zarnok",
        "title": "Master of Cosmic Logic",
        "intro": "You process the world through logic and structure. Clarity grounds you — there’s comfort in order, patterns, and understanding how things fit together. You rarely act on impulse, preferring to analyze before you act. Your matter-of-fact nature keeps chaos at bay, yet beneath the data, you move with quiet defiance — driven to solve things efficiently and elegantly.",
        "bio": "Zarnok, a proud Logiborg from Circuitron-8, finds peace in patterns and purpose in order. Their glowing binary eyes can spot inconsistencies from light-years away, and they will politely correct them. Known to label their drawers by atomic weight, Zarnok reminds us that logic can be oddly comforting when the universe feels unpredictable.",
        "image": "/avatars/zarnok.png",
        "forces": {
            "neighbors": [
                { "id": "icy7", "note": "Both shares a rational rhythm and find comfort in calm and steady wavelengths." },
                { "id": "orbitz", "note": "Icy-7 appreciates Orbitz’s curiosity and quietly takes notes from their wonder." }
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
        "intro": "You possess a calm, balanced, and well-rounded mind. Resourceful and observant, you rarely rush — your strength lies in patience and understanding. When others react, you reflect. You value peace and reason, and there’s quiet depth in how you care for the balance of all things.",
        "bio": "Icy-7 glides through existence with the serene focus of a frozen sunrise. On Hush-Delta, this crystalline AI teaches the art of stillness and stoicism. Even in chaos, Icy-7 keeps their cool, offering a calm that feels like a deep cosmic breath.",
        "image": "/avatars/icy7.png",
        "forces": {
            "neighbors": [
                { "id": "zarnok", "note": "Icy-7 resonates with Zarnok’s logic and mindfulness; together they create quiet clarity amid the noise." },
                { "id": "orbitz", "note": "Orbitz’s imagination gently melts Icy‑7’s composure, revealing quiet warmth beneath the frost." }
            ],
            "counterforce": { "id": "blip", "note": "Blip’s emotional waves ripple Icy‑7’s serene surface, yet both are complementary by contrast." }
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
        "intro": "You find meaning in everything — in silence, in laughter, in the way stars seem to wink back. Your thoughts drift between reason and wonder, discovering ideas others might miss. You experiment freely, embracing paradox as part of your nature. The galaxy feels like a conversation, and you’re always somewhere between its muse and its dreams.",
        "bio": "Orbitz drifts through the stars like a wandering philosopher who snacks between galaxies. Offbeat yet insightful, they chase ideas that shimmer between dream and discovery. Curious and contemplative, Orbitz finds meaning in contradiction—linking logic and wonder to reveal new perspectives. Their gift is connection: weaving imagination and understanding into cosmic conversation.",
        "image": "/avatars/orbitz.png",
        "forces": {
            "neighbors": [
                { "id": "zarnok", "note": "Zarnok grounds Orbitz’s wandering thoughts and gives them shape." },
                { "id": "icy7", "note": "Orbitz finds calm companionship in Icy‑7’s steady presence." }
            ],
            "counterforce": { "id": "glimbo", "note": "Glimbo’s outgoing energy keeps Orbitz from drifting too far inward, while Orbitz reminds Glimbo to pause and reflect." }
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
        "intro": "You navigate the world by feeling, not formula. Your moods are your compass — vivid, shifting, and alive. You sense the energy of people and moments instinctively, responding in ways that feel natural and sincere. Adaptable and resilient, you shine brightest when emotions find harmony.",
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
        "intro": "You move through life like rhythm itself — energizing groups, inspiring participation, and adapting fluidly to change. Your natural charisma gives ideas momentum and helps communities resonate with your pulse. Logic takes a back seat to resonance; you know when something feels right. You live by instinct, not formula — your path hums before it makes sense.",
        "bio": "Glimbo makes the cosmos dance — moving through life like a song that writes itself. Every beat, sound, and shimmer fuels their next move. On planet Voxas, they host star rallies where comets sync to the beat and laughter travels faster than light. Their presence turns silence into rhythm, and somehow, without ever planning the melody, they still land on the perfect final note.",
        "image": "/avatars/glimbo.png",
        "forces": {
            "neighbors": [
                { "id": "blip", "note": "Glimbo draws inspiration from Blip’s sincerity, transforming compassion into expression." },
                { "id": "flarb", "note": "Glimbo matches Flarb’s momentum with rhythm, helping passion find its stride." }
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
        "intro": "You act decisively and lead with confidence. Your energy motivates others and turns ideas into action. Drive and passion fuel your mission—you thrive on momentum and purpose. Life’s too short for half-measures; you’d rather soar than settle.",
        "bio": "Captain Flarb blazes through the solar winds—courage in one hand and a plan roughly sketched in glitter ink in the other. A born motivator, they lead through inspiration, decide with conviction, and live with unmistakable flair. When Flarb enters the scene, the volume rises, the sparks fly, and every launch feels purposeful and alive.",
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