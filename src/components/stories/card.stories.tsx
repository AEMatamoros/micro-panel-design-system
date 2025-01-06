import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from '../ui/card.tsx';

const theme = import.meta.env.VITE_APP_THEME;
interface StorybookCard extends React.HTMLAttributes<HTMLDivElement> {
    cardTitle: string;
    cardDescription: string;
    cardContent: string;
    cardFooter: string;
}
const meta = {
    title: 'Base/Card',
    component: Card,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    args: {
        cardTitle: 'Card Title',
        cardDescription: 'Card Description',
        cardContent: 'Card Content',
        cardFooter: 'Card Footer'
    },
    argTypes: {
        cardTitle: {
            name: 'Card Title',
            description: 'Property used to pass routing Card Title',
            table: {
                category: 'StoryBook'
            }
        },
        cardDescription: {
            name: 'Card Description',
            description: 'Property used to pass routing Card Description',
            table: {
                category: 'StoryBook'
            }
        },
        cardContent: {
            name: 'Card Content',
            description: 'Property used to pass routing Card Content',
            table: {
                category: 'StoryBook'
            }
        },
        cardFooter: {
            name: 'Card Footer',
            description: 'Property used to pass routing Card Footer',
            table: {
                category: 'StoryBook'
            }
        }
    }
} satisfies Meta<StorybookCard>;

export default meta;
type Story = StoryObj<StorybookCard>;

export const Base: Story = {
    args: {},
    decorators: [
        StoryE => (
            <div className={theme}>
                <StoryE />
            </div>
        )
    ],
    render: ({
        cardTitle,
        cardContent,
        cardDescription,
        cardFooter,
        ...args
    }) => (
        <Card className="w-[350px]" {...args}>
            <CardHeader>
                <CardTitle>{cardTitle}</CardTitle>
                <CardDescription>{cardDescription}</CardDescription>
            </CardHeader>
            <CardContent>
                <span>{cardContent}</span>
            </CardContent>
            \{' '}
            <CardFooter className="flex justify-between">
                <span>{cardFooter}</span>
            </CardFooter>
        </Card>
    )
};
