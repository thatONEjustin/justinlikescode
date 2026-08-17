import { defineConfig, fontProviders } from 'astro/config';

import mdx from "@astrojs/mdx";
import netlify from '@astrojs/netlify';
import tailwindcss from '@tailwindcss/vite';

import alpinejs from '@astrojs/alpinejs';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    output: 'static',
    prefetch: true,
    site: process.env.MODE == 'dev' ? 'https://localhost:4321' : 'https://staging-justinlikescode.netlify.app',
    trailingSlash: 'never',
    integrations: [mdx(), alpinejs({ entrypoint: './src/alpine-entry' }), react()],
    image: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.justinlikescode.com',
            },
            {
                protofol: 'http',
                hostname: 'localhost',
                port: '1337'
            }
        ]
    },
    fonts: [
        {
            provider: fontProviders.fontsource(),
            name: "Roboto Slab",
            cssVariable: "--font-roboto-slab",
        }
    ],
    i18n: {
        locales: ['en', 'es'],
        defaultLocale: 'en',
    },
    adapter: netlify(),
    vite: {
        plugins: [
            tailwindcss(),
        ]
    }
});
