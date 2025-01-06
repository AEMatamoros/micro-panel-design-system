import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Separator } from '../ui/separator.tsx';

const theme = import.meta.env.VITE_APP_THEME;

const meta = {
    title: 'Base/Separator',
    component: Separator,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    args: {
        orientation: 'horizontal',
        decorative: false
    },
    argTypes: {
        orientation: {
            description: 'The orientation of the separator.',
            control: 'select',
            options: ['horizontal', 'vertical'],
            table: {
                category: 'Component',
                defaultValue: {
                    summary: 'horizontal'
                }
            }
        },
        decorative: {
            description:
                'When true, signifies that it is purely visual, carries no semantic meaning, and ensures it is not present in the accessibility tree.',
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
                <StoryE />
            </div>
        )
    ]
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
    render: props => (
        <div>
            <div className="space-y-1">
                <h4 className="text-sm font-medium leading-none">
                    Radix Primitives
                </h4>
                <p className="text-sm text-muted-foreground">
                    An open-source UI component library.
                </p>
            </div>
            <Separator {...props} className="my-4 text-gray-600" />
            <div className="flex h-5 items-center space-x-4 text-sm">
                <div>Blog</div>
                <Separator orientation="vertical" className="text-gray-600" />
                <div>Docs</div>
                <Separator orientation="vertical" className="text-gray-600" />
                <div>Source</div>
            </div>
        </div>
    )
};
