import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Popover } from '../ui/popover.tsx';

const theme = import.meta.env.VITE_APP_THEME;

const meta = {
    title: 'Base/Popover',
    component: Popover,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof Popover>;

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
