import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

//
import {
    ResizablePanelGroup,
    ResizablePanel,
    ResizableHandle
} from '../ui/resizable';

const theme = import.meta.env.VITE_APP_THEME;

const meta = {
    title: 'Base/Resizable',
    component: ResizablePanelGroup,
    tags: ['autodocs'],
    args: {
        direction: 'horizontal'
    },
    argTypes: {
        direction: {
            description:
                'Use the direction prop to set the direction of the resizable panels.',
            control: 'select',
            options: ['horizontal', 'vertical'],
            table: {
                category: 'Component',
                defaultValue: {
                    summary: 'horizontal'
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
} satisfies Meta<typeof ResizablePanelGroup>;

export default meta;
type Story = StoryObj<typeof ResizablePanelGroup>;

export const Base: Story = {
    render: props => (
        <ResizablePanelGroup
            {...props}
            className="min-h-[200px] max-w-md rounded-lg border md:min-w-[450px]"
        >
            <ResizablePanel defaultSize={25}>
                <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">Header</span>
                </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={75}>
                <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">Content</span>
                </div>
            </ResizablePanel>
        </ResizablePanelGroup>
    )
};
