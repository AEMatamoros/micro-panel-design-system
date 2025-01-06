import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Pagination } from '../ui/pagination.tsx';

const theme = import.meta.env.VITE_APP_THEME;

const meta = {
    title: 'Base/Pagination',
    component: Pagination,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof Pagination>;

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
