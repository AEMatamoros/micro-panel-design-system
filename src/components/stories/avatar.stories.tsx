import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
    AvatarProps
} from '../ui/avatar.tsx';

const theme = import.meta.env.VITE_APP_THEME;
interface AvatarStorybook
    extends Omit<AvatarProps & React.RefAttributes<HTMLSpanElement>, 'ref'> {
    avatarInitials: string;
    avatarURLImage: string;
}

const meta = {
    title: 'Base/Avatar',
    component: Avatar,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    args: {
        variant: 'default',
        avatarInitials: 'CN',
        avatarURLImage: 'https://github.com/shadcn.png'
    },
    argTypes: {
        variant: {
            options: ['default', 'outline'],
            control: 'select'
        },
        size: {
            options: ['default', 'small', 'large'],
            control: 'select'
        },
        avatarInitials: {
            name: 'Avatar Initials',
            description: 'Property used to pass text to avatar',
            table: {
                category: 'StoryBook'
            }
        },
        avatarURLImage: {
            name: 'Items',
            description: 'Property used to pass image url for the avatar',
            table: {
                category: 'StoryBook'
            }
        }
    }
} satisfies Meta<AvatarStorybook>;

export default meta;
type Story = StoryObj<AvatarStorybook>;

export const Base: Story = {
    args: {},
    decorators: [
        StoryE => (
            <div className={theme}>
                <StoryE />
            </div>
        )
    ],
    render: ({ avatarInitials, avatarURLImage, variant, size, ...args }) => (
        <div className="flex gap-4">
            <Avatar {...args} size={size} variant={variant}>
                <AvatarFallback size={size} variant={variant}>
                    {avatarInitials}
                </AvatarFallback>
            </Avatar>
            <Avatar {...args}>
                <AvatarImage
                    src={avatarURLImage}
                    alt="@shadcn"
                    variant={variant}
                />
            </Avatar>
        </div>
    )
};
