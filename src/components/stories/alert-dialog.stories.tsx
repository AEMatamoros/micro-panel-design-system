import { AlertDialogProps } from '@radix-ui/react-alert-dialog';
import type { Meta, StoryObj } from '@storybook/react';

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from '../ui/alert-dialog';

import { Button } from '../ui/button';

interface AlertDialogStorybook extends AlertDialogProps {
    buttonText: string;
    alertDialogTitle: string;
    alertDialogDescription: string;
    alertDialogCancel: string;
    alertDialogAction: string;
}

const theme = import.meta.env.VITE_APP_THEME;

const meta = {
    title: 'Base/Alert Dialog',
    component: AlertDialog,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    args: {
        buttonText: 'Show Dialog',
        alertDialogTitle: 'Dialog Title',
        alertDialogDescription: 'Dialog Description',
        alertDialogCancel: 'Cancel',
        alertDialogAction: 'Confirm'
    },
    argTypes: {
        buttonText: {
            name: 'Open Button ',
            description: 'Property used to pass text to the open dialog button',
            table: {
                category: 'StoryBook'
            }
        },
        alertDialogTitle: {
            name: 'Alert Dialog Title',
            description: 'Property used to pass alert dialog title text',
            table: {
                category: 'StoryBook'
            }
        },
        alertDialogDescription: {
            name: 'Alert Dialog Description',
            description: 'Property used to pass alert dialog title text',
            table: {
                category: 'StoryBook'
            }
        },
        alertDialogAction: {
            name: 'Alert Confirm Action Button Text',
            description: 'Property used to pass text to dialog action button',
            table: {
                category: 'StoryBook'
            }
        },
        alertDialogCancel: {
            name: 'Alert Cancel Action Button Text',
            description: 'Property used to pass text to dialog cancel button',
            table: {
                category: 'StoryBook'
            }
        }
    }
} satisfies Meta<AlertDialogStorybook>;

export default meta;
type Story = StoryObj<AlertDialogStorybook>;

export const Alert: Story = {
    args: {},
    decorators: [
        StoryE => (
            <div className={theme}>
                <StoryE />
            </div>
        )
    ],
    render: ({
        buttonText,
        alertDialogTitle,
        alertDialogDescription,
        alertDialogCancel,
        alertDialogAction,
        ...args
    }) => (
        <AlertDialog {...args}>
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button variant="primary">{buttonText}</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>{alertDialogTitle}</AlertDialogTitle>
                        <AlertDialogDescription>
                            {alertDialogDescription}
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>
                            {alertDialogCancel}
                        </AlertDialogCancel>
                        <AlertDialogAction>
                            {alertDialogAction}
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </AlertDialog>
    )
};
