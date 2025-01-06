import React from 'react';

import { render } from '@testing-library/react';

import { Skeleton } from '../ui/skeleton';

describe('Skeleton Component', () => {
    test('renders with default styles', () => {
        const { container } = render(<Skeleton />);

        const skeleton = container.querySelector('div');
        expect(skeleton).toBeInTheDocument();
        expect(skeleton).toHaveClass('animate-pulse rounded-md bg-primary/10');
    });

    test('renders with additional class names', () => {
        const { container } = render(<Skeleton className="custom-class" />);

        const skeleton = container.querySelector('div');
        expect(skeleton).toBeInTheDocument();
        expect(skeleton).toHaveClass('custom-class');
        expect(skeleton).toHaveClass('animate-pulse rounded-md bg-primary/10');
    });

    test('renders with additional props', () => {
        const { container } = render(<Skeleton data-testid="skeleton" />);

        const skeleton = container.querySelector('div');
        expect(skeleton).toBeInTheDocument();
        expect(skeleton).toHaveAttribute('data-testid', 'skeleton');
    });
});
