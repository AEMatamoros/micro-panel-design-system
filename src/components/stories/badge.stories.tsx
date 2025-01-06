import type { Meta, StoryObj } from '@storybook/react';

import { Badge, BadgeProps } from '../ui/badge.tsx';

const theme = import.meta.env.VITE_APP_THEME;

interface StorybookBadge extends BadgeProps {
    text: string;
}

const meta = {
    title: 'Base/Badge',
    component: Badge,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    args: {
        text: 'Design System Badge'
    },
    argTypes: {
        text: {
            name: 'Badge Text',
            description: 'Property used to pass text to badge',
            table: {
                category: 'StoryBook'
            }
        },
        variant: {
            options: [
                'default',
                'primary',
                'secondary',
                'destructive',
                'outline',
                'login',
                'loginDestructive'
            ],
            control: 'select'
        }
    }
} satisfies Meta<StorybookBadge>;

export default meta;
type Story = StoryObj<StorybookBadge>;

export const Base: Story = {
    decorators: [
        StoryE => (
            <div className={theme}>
                <StoryE />
            </div>
        )
    ],
    render: ({ text, ...args }) => <Badge {...args}>{text}</Badge>
};
