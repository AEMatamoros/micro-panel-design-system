import * as React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import '@testing-library/jest-dom';
import { Checkbox } from '../ui/checkbox';

describe('Checkbox Component', () => {
    test('renders Checkbox component', () => {
        render(<Checkbox />);
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeInTheDocument();
    });

    test('Checkbox is unchecked by default', () => {
        render(<Checkbox />);
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).not.toBeChecked();
    });

    test('Checkbox can be checked and unchecked', () => {
        render(<Checkbox />);
        const checkbox = screen.getByRole('checkbox');
        fireEvent.click(checkbox);
        expect(checkbox).toBeChecked();
        fireEvent.click(checkbox);
        expect(checkbox).not.toBeChecked();
    });

    test('Checkbox handles disabled state', () => {
        render(<Checkbox disabled />);
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeDisabled();
    });

    test('Checkbox applies custom className', () => {
        render(<Checkbox className="custom-class" />);
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toHaveClass('custom-class');
    });
});
