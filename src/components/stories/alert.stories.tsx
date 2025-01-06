import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Alert, AlertTitle } from '../ui/alert.tsx';

const theme = import.meta.env.VITE_APP_THEME;

interface AlertStoriesProps
    extends React.ComponentPropsWithoutRef<typeof Alert> {
    alertTitle: string;
    alertDescription: string;
}
const meta = {
    title: 'Base/Alert',
    component: Alert,
    tags: ['autodocs'],
    args: {
        variant: 'default',
        alertTitle: 'This is an error. It may be accompanied by a link.',
        alertDescription: 'Alert Description!'
    },
    argTypes: {
        variant: {
            description: '',
            control: 'select',
            options: ['default', 'error', 'warning', 'success'],
            table: {
                category: 'Component'
            }
        },
        alertTitle: {
            name: 'Alert Title',
            description: 'Property used to show a title in alert.',
            table: {
                category: 'StoryBook',
                defaultValue: {
                    summary: 'Habilitar'
                }
            }
        },
        alertDescription: {
            name: 'Alert Description',
            description: 'Property used to show a description in alert.',
            table: {
                category: 'StoryBook',
                defaultValue: {
                    summary: 'Habilitar'
                }
            }
        }
    }
} satisfies Meta<AlertStoriesProps>;

export default meta;
type Story = StoryObj<AlertStoriesProps>;

export const Base: Story = {
    args: {},
    decorators: [
        StoryE => (
            <div className={theme}>
                <StoryE />
            </div>
        )
    ],
    render: ({ alertTitle, ...props }) => (
        <Alert {...props}>
            <AlertTitle>{alertTitle}</AlertTitle>
        </Alert>
    )
};
