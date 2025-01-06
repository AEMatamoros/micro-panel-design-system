import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Loader } from '../ui/loader';

const theme = import.meta.env.VITE_APP_THEME;

const meta = {
    title: 'Base/loader',
    component: Loader,
    tags: ['autodocs'],
    args: { variant: 'default' },
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'load']
        }
    },
    decorators: [
        StoryE => (
            <div className={theme}>
                <StoryE />
            </div>
        )
    ]
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
    render: ({ ...props }) => <Loader {...props}></Loader>
};
