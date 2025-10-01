import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                space: {
                    dark: "#0a0a0a",
                    light: "#f5f5f5",
                    accent: "#8b5cf6", // cosmic violet
                },
            },
            fontFamily: {
                headline: ['var(--font-headline)', 'Impact', 'Arial Black', 'sans-serif'],
                body: ['var(--font-body)', 'Trebuchet MS', 'Verdana', 'sans-serif'],
            },
        },

    },
    plugins: [],
};

export default config;
