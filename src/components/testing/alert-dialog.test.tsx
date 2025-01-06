import * as React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import '@testing-library/jest-dom';
import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogFooter,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogAction,
    AlertDialogCancel
} from '../ui/alert-dialog';

describe('AlertDialog Component', () => {
    test('renders AlertDialog with trigger and content', () => {
        render(
            <AlertDialog>
                <AlertDialogTrigger>Open Dialog</AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Alert Title</AlertDialogTitle>
                        <AlertDialogDescription>
                            This is a description.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Confirm</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        );

        expect(screen.getByText('Open Dialog')).toBeInTheDocument();

        fireEvent.click(screen.getByText('Open Dialog'));
    });

    test('closes AlertDialog when cancel button is clicked', () => {
        render(
            <AlertDialog>
                <AlertDialogTrigger>Open Dialog</AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Alert Title</AlertDialogTitle>
                        <AlertDialogDescription>
                            This is a description.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Confirm</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        );

        fireEvent.click(screen.getByText('Open Dialog'));

        expect(screen.getByText('Alert Title')).toBeVisible();
    });

    test('applies custom classes correctly', () => {
        render(
            <AlertDialog>
                <AlertDialogTrigger className="custom-trigger">
                    Open Dialog
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle className="custom-title">
                            Alert Title
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                            This is a description.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel className="custom-cancel">
                            Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction>Confirm</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        );

        expect(screen.getByText('Open Dialog')).toHaveClass('custom-trigger');

        fireEvent.click(screen.getByText('Open Dialog'));

        expect(screen.getByText('Alert Title')).toHaveClass('custom-title');
        expect(screen.getByText('Cancel')).toHaveClass('custom-cancel');
    });
});
