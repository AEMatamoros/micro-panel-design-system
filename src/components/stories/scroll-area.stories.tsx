import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { ScrollArea } from '../ui/scroll-area.tsx';
import { Separator } from '../ui/separator.tsx';

const theme = import.meta.env.VITE_APP_THEME;

const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

const meta = {
    title: 'Base/Scroll Area',
    component: ScrollArea,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    args: {
        type: 'hover',
        scrollHideDelay: 600
    },
    argTypes: {
        scrollHideDelay: {
            description:
                'If type is set to either "scroll" or "hover", this prop determines the length of time, in milliseconds, before the scrollbars are hidden after the user stops interacting with scrollbars.',
            control: 'number',
            table: {
                category: 'Component',
                defaultValue: {
                    summary: '600'
                }
            }
        },
        type: {
            description:
                'Describes the nature of scrollbar visibility, similar to how the scrollbar preferences in MacOS control visibility of native scrollbars.',
            control: 'select',
            options: ['hover', 'always', 'scroll', 'auto'],
            table: {
                category: 'Component',
                defaultValue: {
                    summary: 'hover'
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
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
    render: props => (
        <ScrollArea {...props} className="h-72 w-48 rounded-md border">
            <div className="p-4">
                <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                {tags.map(tag => (
                    <>
                        <div key={tag} className="text-sm">
                            {tag}
                        </div>
                        <Separator className="my-2" />
                    </>
                ))}
            </div>
        </ScrollArea>
    )
};
