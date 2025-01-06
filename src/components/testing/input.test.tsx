import React from 'react';

import { render, screen } from '@testing-library/react';

import { Input } from '../ui/input';

describe('Input Component', () => {
    test('renders Input component correctly', () => {
        render(<Input placeholder="Enter text" />);
        const inputElement = screen.getByPlaceholderText('Enter text');
        expect(inputElement).toBeInTheDocument();
    });

    test('applies custom className', () => {
        render(<Input placeholder="Enter text" className="custom-class" />);
        const inputElement = screen.getByPlaceholderText('Enter text');
        expect(inputElement).toHaveClass('custom-class');
    });

    test('handles disabled state', () => {
        render(<Input placeholder="Enter text" disabled />);
        const inputElement = screen.getByPlaceholderText('Enter text');
        expect(inputElement).toBeDisabled();
    });

    test('renders with the correct type attribute', () => {
        render(<Input type="password" placeholder="Enter password" />);
        const inputElement = screen.getByPlaceholderText('Enter password');
        expect(inputElement).toHaveAttribute('type', 'password');
    });

    test('renders error class correctly', () => {
        render(
            <Input type="password" error={true} placeholder="Enter password" />
        );
        const inputElement = screen.getByPlaceholderText('Enter password');
        expect(inputElement).toHaveClass('border-[1px] border-primary');
    });

    test('renders error class correctly', () => {
        render(
            <Input type="password" error={true} placeholder="Enter password" />
        );
        const inputElement = screen.getByPlaceholderText('Enter password');
        expect(inputElement).toHaveClass('border-[1px] border-primary');
    });
});
