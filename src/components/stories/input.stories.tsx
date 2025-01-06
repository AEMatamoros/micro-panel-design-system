import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '../ui/input.tsx';
import { Label } from '../ui/label.tsx';

const theme = import.meta.env.VITE_APP_THEME;

const meta = {
    title: 'Base/Input',
    component: Input,
    tags: ['autodocs'],
    args: {
        variant: 'default',
        type: 'text',
        error: false
    },
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'login', 'password']
        },
        error: {
            control: 'boolean'
        }
    },
    decorators: [
        StoryE => (
            <div className={theme}>
                <StoryE />
            </div>
        )
    ]
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
    render: args => {
        if (args.variant === 'login') {
            return (
                <div className="relative">
                    <Input id="nombre" placeholder=" " {...args} />
                    <Label
                        htmlFor="nombre"
                        className="absolute start-1 top-2 z-10 origin-[0] -translate-y-5 scale-75 transform bg-white px-2 font-medium text-secondary-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-5 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-secondary"
                    >
                        Contraseña
                    </Label>
                </div>
            );
        }
        return <Input type="email" placeholder="Email" {...args} />;
    }
};
