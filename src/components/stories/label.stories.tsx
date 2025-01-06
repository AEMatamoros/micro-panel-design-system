import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Label } from '../ui/label.tsx';

const theme = import.meta.env.VITE_APP_THEME;

const meta = {
    title: 'Base/Label',
    component: Label,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    args: {
        size: 'm',
        weight: 'normal',
        children: 'My Label'
    },
    argTypes: {
        size: {
            description: '',
            control: 'select',
            options: ['m', 's'],
            table: {
                category: 'Component',
                defaultValue: {
                    summary: 'm'
                }
            }
        },
        weight: {
            description: '',
            control: 'select',
            options: ['normal', 'medium', 'bold'],
            table: {
                category: 'Component',
                defaultValue: {
                    summary: 'normal'
                }
            }
        },
        children: {
            description: '',
            table: {
                category: 'Component',
                defaultValue: {
                    summary: 'My Label'
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
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
