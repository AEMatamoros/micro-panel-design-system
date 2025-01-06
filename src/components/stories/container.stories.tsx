import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Container } from '../ui/container';

const theme = import.meta.env.VITE_APP_THEME;

const meta = {
    title: 'Base/Container',
    component: Container,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    args: {},
    argTypes: {}
} satisfies Meta<typeof Container>;

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
    ],
    render: ({ className, ...props }) => (
        <Container className={className} {...props}></Container>
    )
};
