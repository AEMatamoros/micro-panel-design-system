import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import { Switch } from '../ui/switch';

describe('Switch Component', () => {
    test('renders correctly', () => {
        render(<Switch />);
        const switchElement = screen.getByRole('switch');
        expect(switchElement).toBeInTheDocument();
    });

    test('applies correct styles for unchecked state', () => {
        render(<Switch />);
        const switchElement = screen.getByRole('switch');
        expect(switchElement).toHaveClass('data-[state=unchecked]:bg-input');
        const thumb = switchElement.querySelector('.block');
        expect(thumb).toHaveClass('data-[state=unchecked]:translate-x-0');
    });

    test('applies correct styles for checked state', () => {
        render(<Switch defaultChecked />);
        const switchElement = screen.getByRole('switch');
        expect(switchElement).toHaveClass('data-[state=checked]:bg-primary');
        const thumb = switchElement.querySelector('.block');
        expect(thumb).toHaveClass('data-[state=checked]:translate-x-5');
    });

    test('handles click event to toggle state', () => {
        render(<Switch />);
        const switchElement = screen.getByRole('switch');
        expect(switchElement).toHaveClass('data-[state=unchecked]:bg-input');

        fireEvent.click(switchElement);
        expect(switchElement).toHaveClass('data-[state=checked]:bg-primary');

        fireEvent.click(switchElement);
        expect(switchElement).toHaveClass('data-[state=unchecked]:bg-input');
    });

    test('should be disabled', () => {
        render(<Switch disabled />);
        const switchElement = screen.getByRole('switch');
        expect(switchElement).toBeDisabled();
        expect(switchElement).toHaveClass(
            'disabled:cursor-not-allowed disabled:opacity-50'
        );
    });
});
