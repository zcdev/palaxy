import { Question } from "@/types/index";

export const questions: Question[] = [
    {
        // Q1 // 'blip', 'orbitz', 'flarb', 'glimbo' // 'Open to connection'
        text: "I can make real friends online, and I would even chat with someone from another planet.",
        weights: { zarnok: 0, luna7: 0.25, orbitz: 1, blip: 1, glimbo: 0.5, flarb: 0.5 },
        isReversed: false,
    },
    {
        // Q2 // 'luna7', 'orbitz', 'blip' // 'Idealism, cosmic faith, or morality'
        text: "I believe in karma and the good deeds written in the laws of the universe.",
        weights: { zarnok: 0, luna7: 0.25, orbitz: 1, blip: 1, glimbo: 0.5, flarb: 0.5 },
        isReversed: false,
    },
    {
        // Q3 // 'blip', 'glimbo' // 'Loyalty or optimism'
        text: "If I could live another life, I’d probably choose to meet the same friends again.",
        weights: { zarnok: 1, luna7: 1, orbitz: 1, blip: 0.25, glimbo: 0, flarb: 0 },
        isReversed: false,
    },
    {
        // Q4 // 'luna7', 'orbitz', 'zarnok' // 'Introvert'
        text: "I enjoy traveling alone and can find peace in my own space shuttle.",
        weights: { zarnok: 0, luna7: 0.25, orbitz: 0.5, blip: 1, glimbo: 1, flarb: 1 },
        isReversed: true,
    },
    {
        // Q5 // 'luna7', 'orbitz' // 'Reflective or intuitive'
        text: "I think people enter my life for reasons, and the universe rarely needs to explain itself.",
        weights: { zarnok: 0, luna7: 0.5, orbitz: 1, blip: 0.75, glimbo: 0.5, flarb: 0.5 },
        isReversed: false,
    },
    {
        // Q6 // 'blip', 'glimbo' // 'Warm or generous'
        text: "I believe true friends share everything, even their last slice of asteroid pizza.",
        weights: { zarnok: 0, luna7: 0.25, orbitz: 0.75, blip: 1, glimbo: 1, flarb: 1 },
        isReversed: false,
    },
    {
        // Q7 // 'flarb' // 'Dramatic and thrill-seeking'
        text: "My best friendships often form during chaos, collisions, or cosmic accidents.",
        weights: { zarnok: 0, luna7: 0, orbitz: 0.75, blip: 0.5, glimbo: 0.5, flarb: 1 },
        isReversed: false,
    },
    {
        // Q8 // 'flarb' // 'Confident and determined'
        text: "I am fierce, intense, and decisive. Once I make up my mind, that’s it.",
        weights: { zarnok: 0, luna7: 0, orbitz: 0, blip: 0, glimbo: 0, flarb: 1 },
        isReversed: false,
    },
    {
        // Q9 // 'blip' // 'Emotional attachment'
        text: "When I like someone, I stand by them, even if my crew raises an eyebrow.",
        weights: { zarnok: 0, luna7: 0.5, orbitz: 0.5, blip: 1, glimbo: 0.75, flarb: 0.5 },
        isReversed: false,
    },
    {
        // Q10 // 'orbitz' // 'Emotionally reflective acceptance'
        text: "When a friendship ends, I see it as a cosmic realignment — the universe changing my orbit.",
        weights: { zarnok: 0, luna7: 0, orbitz: 1, blip: 1, glimbo: 0.5, flarb: 0.75 },
        isReversed: false,
    },
    {
        // Q11 // 'zarnok', 'luna7' // 'Analytical detachment'
        text: "When friends argue, I tend to analyze the situation without taking things personally.",
        weights: { zarnok: 1, luna7: 1, orbitz: 0.25, blip: 0, glimbo: 0, flarb: 0 },
        isReversed: true,
    },
    {
        // Q12 // 'zarnok', 'orbitz' // 'Independent judgment'
        text: "I do not evaluate friends based on their popularity.",
        weights: { zarnok: 1, luna7: 0.75, orbitz: 0.5, blip: 0, glimbo: 0, flarb: 0 },
        isReversed: true,
    },
    {
        // Q13 // 'zarnok', 'luna7' // 'Rational helper'
        text: "When a friend reaches out with their issues, I offer fixes rather than validating their feelings.",
        weights: { zarnok: 1, luna7: 0.75, orbitz: 0.25, blip: 0, glimbo: 0, flarb: 0.25 },
        isReversed: true,
    },
    {
        // Q14 // 'zarnok' // 'Logic absolutism'
        text: "What really matters to me at the end of the day is that people make sense, not that they make friends.",
        weights: { zarnok: 1, luna7: 0.5, orbitz: 0.5, blip: 0, glimbo: 0, flarb: 0 },
        isReversed: true,
    },
    {
        // Q15 // 'glimbo' // 'Influencer'
        text: "I’m vocal about my opinions, and people resonate with me like a sonic wave because it’s contagious.",
        weights: { zarnok: 0, luna7: 0, orbitz: 0, blip: 0, glimbo: 1, flarb: 0.75 },
        isReversed: false,
    },
    {
        // Q16 // 'flarb', 'glimbo' // 'Extrovert or charisma detection'
        text: "I often light up a room and end up being the center of the universe.",
        weights: { zarnok: 0, luna7: 0, orbitz: 0, blip: 0, glimbo: 1, flarb: 1 },
        isReversed: false,
    },
    {
        // Q17 // 'flarb' // 'Cinematic chaos captain'
        text: "Life’s a zero-gravity drama — the highs and lows are made up for the epic scenes, and I’m the one writing the script.",
        weights: { zarnok: 0, luna7: 0, orbitz: 0, blip: 0, glimbo: 0.75, flarb: 1 },
        isReversed: false,
    },
    {
        // Q18 // 'flarb', 'glimbo' // 'Extrovert and bold'
        text: "I venture out to meet other extraterrestrials and never shy away from making new friends I’ve just met.",
        weights: { zarnok: 0, luna7: 0, orbitz: 0, blip: 0, glimbo: 1, flarb: 1 },
        isReversed: false,
    },
    {
        // Q19 // 'flarb' // 'Decisive chaos'
        text: "When the stars start colliding, I don’t panic — I pilot the storm.",
        weights: { zarnok: 0, luna7: 0.25, orbitz: 0.25, blip: 0.5, glimbo: 0.5, flarb: 1 },
        isReversed: false,
    },
    {
        // Q20 // 'glimbo' // 'Contagious charisma'
        text: "I spark cosmic joy wherever I go — even the quiet stars start dancing.",
        weights: { zarnok: 0, luna7: 0, orbitz: 0.25, blip: 0.5, glimbo: 1, flarb: 0.5 },
        isReversed: false,
    },
];
