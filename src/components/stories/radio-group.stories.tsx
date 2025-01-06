import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { RadioGroup } from '../ui/radio-group.tsx';

const theme = import.meta.env.VITE_APP_THEME;

const meta = {
    title: 'Base/Radio Group',
    component: RadioGroup,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof RadioGroup>;

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
