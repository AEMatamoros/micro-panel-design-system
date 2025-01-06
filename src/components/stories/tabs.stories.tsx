import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card.tsx';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '../ui/tabs.tsx';

const theme = import.meta.env.VITE_APP_THEME;

interface TabsPropsStorybook
    extends React.ComponentPropsWithoutRef<typeof Tabs> {
    tabs: {
        key: string;
        tab: string;
        title: string;
        text: string;
    }[];
}

const meta = {
    title: 'Base/Tabs',
    component: Tabs,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    args: {
        orientation: 'vertical',
        tabs: [
            {
                key: 'accounts',
                tab: 'Accounts',
                title: 'Accounts',
                text: 'Account Contents'
            },
            {
                key: 'transactions',
                tab: 'Transactions',
                title: 'Transactions',
                text: 'Transaction content'
            }
        ]
    },
    argTypes: {
        orientation: {
            description: 'Property to change the orientation of tabs',
            control: 'select',
            options: ['horizontal', 'vertical'],
            table: {
                category: 'Component'
            }
        },
        tabs: {
            description: 'Property to form the structure of the tabs',
            table: {
                category: 'Storybook'
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
} satisfies Meta<TabsPropsStorybook>;

export default meta;
type Story = StoryObj<TabsPropsStorybook>;

export const Base: Story = {
    render: ({ tabs, ...props }) => (
        <Tabs
            orientation={props.orientation}
            defaultValue="accounts"
            className="w-[400px]"
        >
            <TabsList className="grid w-full grid-cols-2">
                {tabs.map((itemTab, index) => {
                    return (
                        <TabsTrigger
                            key={`${index}-${itemTab.title}`}
                            value={itemTab.key}
                        >
                            {itemTab.tab}
                        </TabsTrigger>
                    );
                })}
            </TabsList>
            {tabs.map((itemTab, index) => {
                return (
                    <TabsContent
                        key={`${index}-${itemTab.title}`}
                        value={itemTab.key}
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle>{itemTab.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <p>{itemTab.text}</p>
                            </CardContent>
                        </Card>
                    </TabsContent>
                );
            })}
        </Tabs>
    )
};
