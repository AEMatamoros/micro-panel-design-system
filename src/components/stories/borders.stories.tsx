import { ReactNode } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

const theme = import.meta.env.VITE_APP_THEME;

const Container = ({
    children,
    className
}: {
    children: ReactNode;
    className: string;
}) => <div className={className}>{children}</div>;
const meta = {
    title: 'Base/Borders',
    component: Container,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof Container>;

export const Base: Story = {
    render: ({ ...props }) => (
        <Container {...props} className={`grid grid-cols-3 gap-4 ${theme}`}>
            <h2 className="col-span-3">Border Radius</h2>
            <div className="flex h-60 w-60 items-center justify-center rounded-lg border-lg border-secondary-500">
                rounded-lg
            </div>
            <div className="flex h-60 w-60 items-center justify-center rounded-md border-md border-secondary-500">
                rounded-md
            </div>
            <div className="flex h-60 w-60 items-center justify-center rounded-sm border-sm border-secondary-500">
                rounded-sm
            </div>
        </Container>
    )
};
