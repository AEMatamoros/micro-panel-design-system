import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import { Textarea } from '../ui/textarea';

describe('Textarea Component', () => {
    test('renders Textarea component correctly', () => {
        render(<Textarea placeholder="Enter text here" />);
        const textarea = screen.getByPlaceholderText('Enter text here');
        expect(textarea).toBeInTheDocument();
        expect(textarea).toHaveClass(
            'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
        );
    });

    test('handles user input correctly', () => {
        render(<Textarea placeholder="Enter text here" />);
        const textarea = screen.getByPlaceholderText('Enter text here');

        fireEvent.change(textarea, { target: { value: 'New text' } });
        expect(textarea).toHaveValue('New text');
    });

    test('supports disabled state', () => {
        render(<Textarea placeholder="Enter text here" disabled />);
        const textarea = screen.getByPlaceholderText('Enter text here');

        expect(textarea).toBeDisabled();
        expect(textarea).toHaveClass(
            'disabled:cursor-not-allowed disabled:opacity-50'
        );
    });

    test('supports custom className', () => {
        render(
            <Textarea placeholder="Enter text here" className="custom-class" />
        );
        const textarea = screen.getByPlaceholderText('Enter text here');
        expect(textarea).toHaveClass('custom-class');
    });
});
