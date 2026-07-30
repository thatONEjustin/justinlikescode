import { defineConfig, passthroughImageService } from 'astro/config';

import mdx from "@astrojs/mdx";
import netlify from '@astrojs/netlify';
import tailwindcss from '@tailwindcss/vite';

import alpinejs from '@astrojs/alpinejs';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    output: 'static',
    prefetch: true,
    site: 'https://justinlikescode.netlify.app',
    trailingSlash: 'never',
    integrations: [mdx(), alpinejs({ entrypoint: './src/alpine-entry' }), react()],
    image: {
        remotePatterns: [{
            protocol: 'https',
            hostname: '**.justinlikescode.com',
        }]
    },
    adapter: netlify(),

    vite: {
        plugins: [
            tailwindcss(),
        ]
    }
});
