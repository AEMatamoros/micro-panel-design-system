import type { Preview } from '@storybook/react';
import '../src/style.css';
const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/
            }
        },
        options: {
            storySort: (a, b) => {
                return a.id === b.id
                    ? 0
                    : a.id.localeCompare(b.id, undefined, { numeric: true });
            }
        }
    }
};

export default preview;
