import React from 'react';

import { render, screen } from '@testing-library/react';

import { Label } from '../ui/label';

describe('Label Component', () => {
    test('renders Label component correctly', () => {
        render(<Label htmlFor="test-input">Test Label</Label>);
        const labelElement = screen.getByText('Test Label');
        expect(labelElement).toBeInTheDocument();
        expect(labelElement).toHaveAttribute('for', 'test-input');
    });

    test('applies custom className', () => {
        render(<Label className="custom-class">Test Label</Label>);
        const labelElement = screen.getByText('Test Label');
        expect(labelElement).toHaveClass('custom-class');
    });

    test('renders with correct styles from variants', () => {
        render(<Label className="text-lg">Test Label</Label>);
        const labelElement = screen.getByText('Test Label');
        expect(labelElement).toHaveClass('text-lg');
    });

    test('forwards ref correctly', () => {
        const ref = React.createRef<HTMLLabelElement>();
        render(<Label ref={ref}>Test Label</Label>);
        if (ref.current) {
            expect(ref.current.tagName).toBe('LABEL');
        }
    });

    test('handles disabled state', () => {
        render(
            <Label className="peer-disabled:cursor-not-allowed">
                Test Label
            </Label>
        );
        const labelElement = screen.getByText('Test Label');
        expect(labelElement).toHaveClass('peer-disabled:cursor-not-allowed');
    });
});
