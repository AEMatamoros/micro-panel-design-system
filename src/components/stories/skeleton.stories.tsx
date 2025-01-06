import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Skeleton } from '../ui/skeleton.tsx';

const theme = import.meta.env.VITE_APP_THEME;

const meta = {
    title: 'Base/Skeleton',
    component: Skeleton,
    tags: ['autodocs'],
    args: {},
    argTypes: {},
    decorators: [
        StoryE => (
            <div className={theme}>
                <StoryE />
            </div>
        )
    ]
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
    render: () => (
        <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
            </div>
        </div>
    )
};

export const SkeletonCard: Story = {
    render: () => (
        <div className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
            </div>
        </div>
    )
};

export const SkeletonText: Story = {
    render: () => (
        <div>
            <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[250px]" />
            </div>
        </div>
    )
};

export const SkeletonList: Story = {
    render: () => (
        <ul>
            <li className="mb-4">
                <Skeleton className="mb-2 h-4 w-full" />
                <Skeleton className="h-4 w-1/2" />
            </li>
            <li className="mb-4">
                <Skeleton className="mb-2 h-4 w-full" />
                <Skeleton className="h-4 w-1/2" />
            </li>
            <li>
                <Skeleton className="mb-2 h-4 w-full" />
                <Skeleton className="h-4 w-1/2" />
            </li>
        </ul>
    )
};

export const SkeletonImage: Story = {
    render: () => (
        <div className="rounded-lg border p-4">
            <Skeleton className="mb-4 h-40 w-full" />
            <Skeleton className="mb-4 h-6 w-1/3" />
            <Skeleton className="mb-2 h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
        </div>
    )
};

export const SkeletonButton: Story = {
    render: () => <Skeleton className="h-10 w-32 rounded" />
};

export const SkeletonForm: Story = {
    render: () => (
        <form>
            <Skeleton className="mb-4 h-6 w-1/4" />
            <Skeleton className="mb-4 h-10 w-full" />
            <Skeleton className="mb-4 h-10 w-full" />
            <Skeleton className="h-10 w-1/2" />
        </form>
    )
};

export const SkeletonGrid: Story = {
    render: () => (
        <div className="grid grid-cols-2 gap-4">
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-24 w-full" />
        </div>
    )
};
