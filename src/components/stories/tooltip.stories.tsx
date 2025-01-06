import { TooltipProps } from '@radix-ui/react-tooltip';

import type { Meta, StoryObj } from '@storybook/react';

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from '../ui/tooltip';
interface StorybookTooltip extends TooltipProps {
    side: 'bottom' | 'right' | 'left' | 'top';
}
const theme = import.meta.env.VITE_APP_THEME;

const meta = {
    title: 'Base/Tooltip',
    component: Tooltip,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    args: {
        side: 'top'
    },
    argTypes: {
        side: { options: ['top', 'bottom', 'left', 'right'], control: 'select' }
    }
} satisfies Meta<StorybookTooltip>;

export default meta;
type Story = StoryObj<StorybookTooltip>;

export const Base: Story = {
    decorators: [
        StoryE => (
            <div className={theme}>
                <StoryE />
            </div>
        )
    ],
    render: ({ side }) => (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>Hover</TooltipTrigger>
                <TooltipContent side={side}>
                    <p>Add to library</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
};
