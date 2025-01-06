import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from '../ui/checkbox.tsx';

const theme = import.meta.env.VITE_APP_THEME;

const meta = {
    title: 'Base/Checkbox',
    component: Checkbox,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {},
    decorators: [
        StoryE => (
            <div className={theme}>
                <StoryE />
            </div>
        )
    ]
};
