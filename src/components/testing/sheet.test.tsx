import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose,
    SheetHeader,
    SheetFooter,
    SheetTitle,
    SheetDescription
} from '../ui/sheet';

describe('Sheet Component', () => {
    test('renders SheetTrigger and opens Sheet on click', () => {
        render(
            <Sheet>
                <SheetTrigger>Open Sheet</SheetTrigger>
                <SheetContent>
                    <SheetClose>Close</SheetClose>
                    <SheetTitle>Sheet Title</SheetTitle>
                </SheetContent>
            </Sheet>
        );

        fireEvent.click(screen.getByText('Open Sheet'));

        expect(screen.getByText('Sheet Title')).toBeInTheDocument();
    });

    test('renders SheetOverlay correctly', () => {
        render(
            <Sheet>
                <SheetTrigger>Open Sheet</SheetTrigger>
                <SheetContent>
                    <SheetClose>Close</SheetClose>
                </SheetContent>
            </Sheet>
        );

        fireEvent.click(screen.getByText('Open Sheet'));

        expect(screen.getByRole('dialog')).toBeInTheDocument();
    });

    test('renders SheetHeader, SheetFooter, SheetTitle, and SheetDescription correctly', () => {
        render(
            <Sheet>
                <SheetTrigger>Open Sheet</SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Title</SheetTitle>
                        <SheetDescription>Description</SheetDescription>
                    </SheetHeader>
                    <SheetFooter>
                        <button>Footer Button</button>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        );

        fireEvent.click(screen.getByText('Open Sheet'));

        expect(screen.getByText('Title')).toBeInTheDocument();
        expect(screen.getByText('Description')).toBeInTheDocument();
        expect(screen.getByText('Footer Button')).toBeInTheDocument();
    });

    test('renders SheetClose button correctly', () => {
        render(
            <Sheet>
                <SheetTrigger>Open Sheet</SheetTrigger>
                <SheetContent>
                    <SheetClose>
                        <span>Close</span>
                    </SheetClose>
                </SheetContent>
            </Sheet>
        );

        expect(screen.getByText('Open Sheet')).toBeInTheDocument();
    });
});
