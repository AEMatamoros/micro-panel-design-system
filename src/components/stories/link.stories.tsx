import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { MemoryRouter } from 'react-router-dom';

import CustomLink from '../ui/link';

const theme = import.meta.env.VITE_APP_THEME;

const meta = {
    title: 'Base/customLink',
    component: CustomLink,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    args: {
        variant: 'underline',
        children: 'This is a link',
        to: '/home',
        disabled: false
    },
    argTypes: {
        variant: {
            description:
                'Controls whether the link displays an underline or an external icon.',
            control: 'select',
            options: ['underline', 'external'],
            table: {
                category: 'Component',
                defaultValue: {
                    summary: 'underline'
                }
            }
        },
        children: {
            description: 'The text or content to be displayed within the link.',
            control: 'text',
            table: {
                category: 'Component',
                defaultValue: {
                    summary: 'This is a link'
                }
            }
        },
        to: {
            description: 'The destination URL or path for the link.',
            control: 'text',
            table: {
                category: 'Component'
            }
        },
        disabled: {
            description: 'When true, the link is disabled and not interactive.',
            control: 'boolean',
            table: {
                category: 'Component',
                defaultValue: {
                    summary: 'false'
                }
            }
        }
    },
    decorators: [
        StoryE => (
            <div className={theme}>
                <MemoryRouter basename="/">
                    <StoryE />
                </MemoryRouter>
            </div>
        )
    ]
} satisfies Meta<typeof CustomLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
    render: args => <CustomLink {...args} />
};
