import type { Preview } from '@storybook/vue3';

import '../assets/scss/variables.scss';
import '../assets/scss/tailwind.scss';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
};

export default preview;
