import * as React from 'react';

import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import { Alert, AlertTitle, AlertDescription } from '../ui/alert';

describe('Alert Component', () => {
    test('renders Alert with title and description', () => {
        render(
            <Alert>
                <AlertTitle>Warning</AlertTitle>
                <AlertDescription>This is a warning alert.</AlertDescription>
            </Alert>
        );

        expect(screen.getByText('Warning')).toBeInTheDocument();
        expect(
            screen.getByText('This is a warning alert.')
        ).toBeInTheDocument();
    });

    test('applies default variant styles', () => {
        render(
            <Alert>
                <AlertTitle>Info</AlertTitle>
                <AlertDescription>This is an info alert.</AlertDescription>
            </Alert>
        );

        const alert = screen.getByRole('alert');
        expect(alert).toHaveClass(
            'flex items-center justify-center h-16 relative w-full [&>svg]:mr-2 bg-secondary-200 text-secondary-900'
        );
    });

    test('applies destructive variant styles', () => {
        render(
            <Alert variant="error">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>This is an error alert.</AlertDescription>
            </Alert>
        );

        const alert = screen.getByRole('alert');
        expect(alert).toHaveClass(
            'flex items-center justify-center h-16 relative w-full [&>svg]:mr-2'
        );
    });

    test('applies custom classes correctly', () => {
        render(
            <Alert className="custom-alert">
                <AlertTitle className="custom-title">Custom Title</AlertTitle>
                <AlertDescription className="custom-description">
                    Custom description text.
                </AlertDescription>
            </Alert>
        );

        const alert = screen.getByRole('alert');
        expect(alert).toHaveClass('custom-alert');
        expect(screen.getByText('Custom Title')).toHaveClass('custom-title');
        expect(screen.getByText('Custom description text.')).toHaveClass(
            'custom-description'
        );
    });
});
