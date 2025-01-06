import { DropdownMenuProps } from '@radix-ui/react-dropdown-menu';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../ui/button';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '../ui/dropdown-menu';
const theme = import.meta.env.VITE_APP_THEME;
interface Item {
    text: string;
    isSubsection?: boolean;
}
interface StorybookDropdown extends DropdownMenuProps {
    items: Item[];
}
const meta = {
    title: 'Base/Dropdown',
    component: DropdownMenu,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    args: {
        items: [
            {
                text: 'My Account',
                isSubsection: true
            },
            {
                text: 'Profile'
            },
            {
                text: 'Settings'
            }
        ]
    },
    argTypes: {
        items: {
            name: 'Items',
            description: 'Property used to pass options to dropdown',
            table: {
                category: 'StoryBook'
            }
        }
    }
} satisfies Meta<StorybookDropdown>;

export default meta;
type Story = StoryObj<StorybookDropdown>;

export const Base: Story = {
    args: {},
    decorators: [
        StoryE => (
            <div className={theme}>
                <StoryE />
            </div>
        )
    ],
    render: ({ items, ...args }) => (
        <DropdownMenu {...args}>
            <DropdownMenuTrigger>
                <Button>Open</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className={theme}>
                {items.map(item => {
                    return item.isSubsection ? (
                        <>
                            <DropdownMenuLabel>{item.text}</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                        </>
                    ) : (
                        <DropdownMenuItem>{item.text}</DropdownMenuItem>
                    );
                })}
            </DropdownMenuContent>
        </DropdownMenu>
    )
};
