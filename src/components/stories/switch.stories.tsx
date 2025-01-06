import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Label } from '../ui/label.tsx';

import { Switch } from '../ui/switch.tsx';

const theme = import.meta.env.VITE_APP_THEME;

interface SwitchPropsStorybook
    extends React.ComponentPropsWithoutRef<typeof Switch> {
    labelSB: string;
}

const meta = {
    title: 'Base/Switch',
    component: Switch,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    args: {
        labelSB: 'Enable'
    },
    argTypes: {
        labelSB: {
            name: 'Switch Label',
            description: 'Property to add text to the switch label',
            table: {
                category: 'StoryBook',
                defaultValue: {
                    summary: 'Enable'
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
} satisfies Meta<SwitchPropsStorybook>;

export default meta;
type Story = StoryObj<SwitchPropsStorybook>;

export const Base: Story = {
    render: ({ labelSB, ...props }) => (
        <div className="flex items-center space-x-2">
            <Switch {...props} />
            <Label htmlFor="airplane-mode">{labelSB}</Label>
        </div>
    )
};
