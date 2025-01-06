import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import ColorPalette from '../ui/colors';

const theme = import.meta.env.VITE_APP_THEME;

const meta = {
    title: 'Base/Colors',
    component: ColorPalette,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
} satisfies Meta<typeof ColorPalette>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
    decorators: [
        StoryE => (
            <div className={theme}>
                <StoryE>My Button</StoryE>
            </div>
        )
    ]
};
