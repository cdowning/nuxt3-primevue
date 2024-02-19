import * as path from 'path';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },

    typescript: {
        typeCheck: false,
        strict: false,
    },

    modules: ['@nuxtjs/tailwindcss', 'nuxt-primevue', '@nuxtjs/storybook'],

    css: ['~/assets/scss/main.scss'],

    tailwindcss: {
        exposeConfig: true,
        cssPath: '~/assets/scss/tailwind.scss',
    },

    primevue: {
        options: {
            unstyled: true,
        },
        importPT: { from: path.resolve(__dirname, './presets/') }, //import and apply preset
    },

    storybook: {
        url: 'http://localhost:6006',
        storybookRoute: '/__storybook__',
        port: 6006,
    },
});
