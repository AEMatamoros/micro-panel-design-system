import type { Meta, StoryObj } from '@storybook/react';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from '../ui/carousel.tsx';

const theme = import.meta.env.VITE_APP_THEME;

const meta: Meta<typeof Carousel> = {
    title: 'Base/Carousel',
    component: Carousel,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {}
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {},
    decorators: [
        StoryE => (
            <div className={theme}>
                <StoryE />
            </div>
        )
    ],
    render: args => (
        <Carousel className="w-full max-w-xs" {...args}>
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={`${index}-${_}`}>
                        <div className="p-1">
                            <span className="inline-block w-full text-center text-4xl font-semibold">
                                {index + 1}
                            </span>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
};
