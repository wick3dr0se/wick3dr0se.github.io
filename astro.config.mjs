import { defineConfig } from 'astro/config';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
    build: {
        format: 'file',
        trailingSlash: 'never'
    },
    server: {
        port: 6969,
        host: true
    },
    prefetch: {
        prefetchAll: true,
        defaultStrategy: 'hover'
    },
    experimental: {
        clientPrerender: true
    },
    image: {
        domains: ["astro-build"]
    },
    site: 'https://wick3dr0se.github.io',
    integrations: [icon()]
});