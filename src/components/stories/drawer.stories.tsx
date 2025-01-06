import { DialogProps } from '@radix-ui/react-dialog';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../ui/button.tsx';

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
} from '../ui/drawer.tsx';

interface StorybookDrawer extends DialogProps {
    showButtonText: string;
    closeButtonText: string;
    drawerTitle: string;
    drawerDescription: string;
    drawerContent: string;
    drawerFooter: string;
}
const theme = import.meta.env.VITE_APP_THEME;

const meta = {
    title: 'Base/Drawer',
    component: Drawer,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    args: {
        showButtonText: 'Show Drawer',
        closeButtonText: 'Close Drawer',
        drawerTitle: 'Drawer Title',
        drawerDescription: 'Drawer Description',
        drawerContent: 'Cancel',
        drawerFooter: 'Confirm'
    },
    argTypes: {
        showButtonText: {
            name: 'Open Button ',
            description: 'Property used to pass text to the open dialog button',
            table: {
                category: 'StoryBook'
            }
        },
        closeButtonText: {
            name: 'Open Button ',
            description: 'Property used to pass text to the open dialog button',
            table: {
                category: 'StoryBook'
            }
        },
        drawerTitle: {
            name: 'Drawer Title',
            description: 'Property used to pass dialog title text',
            table: {
                category: 'StoryBook'
            }
        },
        drawerDescription: {
            name: 'Drawer Description',
            description: 'Property used to pass dialog title text',
            table: {
                category: 'StoryBook'
            }
        },
        drawerContent: {
            name: 'Confirm Action Button Text',
            description: 'Property used to pass text to dialog action button',
            table: {
                category: 'StoryBook'
            }
        },
        drawerFooter: {
            name: 'Cancel Action Button Text',
            description: 'Property used to pass text to dialog cancel button',
            table: {
                category: 'StoryBook'
            }
        }
    }
} satisfies Meta<StorybookDrawer>;

export default meta;
type Story = StoryObj<StorybookDrawer>;

export const Base: Story = {
    args: {},
    decorators: [
        StoryE => (
            <div className={theme}>
                <StoryE />
            </div>
        )
    ],
    render: ({
        showButtonText,
        closeButtonText,
        drawerTitle,
        drawerDescription,
        drawerContent,
        drawerFooter,
        ...args
    }) => (
        <Drawer {...args}>
            <DrawerTrigger asChild>
                <Button variant="outline">{showButtonText}</Button>
            </DrawerTrigger>
            <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader>
                        <DrawerTitle>{drawerTitle}</DrawerTitle>
                        <DrawerDescription>
                            {drawerDescription}
                        </DrawerDescription>
                    </DrawerHeader>
                    <div className="p-4 pb-0">{drawerContent}</div>
                    <DrawerFooter>
                        {drawerFooter}
                        <DrawerClose asChild>
                            <Button variant="outline">{closeButtonText}</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
};
