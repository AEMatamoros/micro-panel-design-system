import React from 'react';

import { render } from '@testing-library/react';

import { Separator } from '../ui/separator';

describe('Separator Component', () => {
    test('renders horizontal separator', () => {
        const { container } = render(<Separator orientation="horizontal" />);
        const separator = container.firstChild;

        expect(separator).toHaveClass('h-[1px]');
        expect(separator).toHaveClass('w-full');
    });

    test('renders vertical separator', () => {
        const { container } = render(<Separator orientation="vertical" />);
        const separator = container.firstChild;

        expect(separator).toHaveClass('h-full');
        expect(separator).toHaveClass('w-[1px]');
    });

    test('applies custom className', () => {
        const { container } = render(<Separator className="custom-class" />);
        const separator = container.firstChild;

        expect(separator).toHaveClass('custom-class');
    });
});
