import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Dialog } from '../ui/dialog.tsx';
const theme = import.meta.env.VITE_APP_THEME;

const meta = {
    title: 'Base/Dialog Stories',
    component: Dialog,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    args: {
        isOpen: false,
        toggleDialog: () => {
            alert('Toogle modal');
        }
    },
    argTypes: {
        isOpen: {
            name: 'Open/Close State',
            description: 'Property used to show or hide the modal',
            table: {
                category: 'StoryBook'
            },
            control: 'boolean'
        },
        toggleDialog: {
            name: 'Open/Close modal Function',
            description: 'Property used to toogle or close modal',
            table: {
                category: 'StoryBook'
            }
        }
    }
} satisfies Meta<typeof Dialog>;

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
    render: ({ isOpen, toggleDialog, ...args }) => (
        <Dialog {...args} isOpen={isOpen} toggleDialog={toggleDialog}>
            <span>Modal Content</span>
        </Dialog>
    )
};
