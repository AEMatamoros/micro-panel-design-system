import React, { useEffect, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Progress } from '../ui/progress.tsx';

const theme = import.meta.env.VITE_APP_THEME;

const meta = {
    title: 'Base/Progress',
    component: Progress,
    tags: ['autodocs'],
    argTypes: {},
    args: {},
    decorators: [
        StoryE => (
            <div className={theme}>
                <StoryE />
            </div>
        )
    ]
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
    render: () => {
        const ProgressWithHook = () => {
            const [progress, setProgress] = useState(13);

            useEffect(() => {
                const timer = setTimeout(() => setProgress(66), 500);
                return () => clearTimeout(timer);
            }, []);

            return <Progress value={progress} className="w-[60%]" />;
        };
        return <ProgressWithHook />;
    }
};
