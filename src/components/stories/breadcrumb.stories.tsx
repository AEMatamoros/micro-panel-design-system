import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator
} from '../ui/breadcrumb.tsx';

const theme = import.meta.env.VITE_APP_THEME;
interface Items {
    text: string;
    path: string;
}
interface StorybookBreadCrumb extends React.ComponentPropsWithoutRef<'nav'> {
    items: Items[];
}

const meta = {
    title: 'Base/Breadcrump',
    component: Breadcrumb,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    args: {
        items: [
            {
                text: 'Home',
                path: 'Home'
            },
            {
                text: 'Components',
                path: 'Components'
            },
            {
                text: '...',
                path: 'Multiple Items'
            },
            {
                text: 'Breadcrump',
                path: 'Breadcrump'
            }
        ]
    },
    argTypes: {
        items: {
            name: 'Items',
            description: 'Property used to pass routing items',
            table: {
                category: 'StoryBook'
            }
        }
    }
} satisfies Meta<StorybookBreadCrumb>;

export default meta;
type Story = StoryObj<StorybookBreadCrumb>;

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
        <Breadcrumb {...args}>
            <BreadcrumbList>
                {items.map((item, index) => (
                    <BreadcrumbItem key={`${index}-${item.text}`}>
                        <BreadcrumbLink href={item.path}>
                            {item.text}
                        </BreadcrumbLink>
                        {index != items.length - 1 && <BreadcrumbSeparator />}
                    </BreadcrumbItem>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    )
};
