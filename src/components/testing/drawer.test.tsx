import React from 'react';

import { render, screen } from '@testing-library/react';

import {
    Drawer,
    DrawerContent,
    DrawerClose,
    DrawerHeader,
    DrawerFooter,
    DrawerTitle,
    DrawerDescription
} from '../ui/drawer';

describe('Drawer Component', () => {
    test('renders Drawer with content', () => {
        render(
            <Drawer open={true} onOpenChange={() => {}}>
                Item
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>Title</DrawerTitle>
                        <DrawerClose />
                    </DrawerHeader>
                    <DrawerDescription>Description</DrawerDescription>
                    <DrawerFooter>
                        <button>Footer Button</button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        );

        expect(screen.getByText('Item')).toBeInTheDocument();
    });
});
