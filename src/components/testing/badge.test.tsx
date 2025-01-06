import * as React from 'react';

import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import { Badge } from '../ui/badge';

describe('Badge Component', () => {
    test('renders Badge with default variant', () => {
        render(<Badge>Default Badge</Badge>);

        const badge = screen.getByText('Default Badge');
        expect(badge).toBeInTheDocument();

        expect(badge).toHaveClass('bg-primary text-white border-transparent');
    });

    test('renders Badge with primary variant', () => {
        render(<Badge variant="primary">Primary Badge</Badge>);

        const badge = screen.getByText('Primary Badge');
        expect(badge).toBeInTheDocument();

        expect(badge).toHaveClass('bg-primary text-white border-transparent');
    });

    test('renders Badge with secondary variant', () => {
        render(<Badge variant="secondary">Secondary Badge</Badge>);

        const badge = screen.getByText('Secondary Badge');
        expect(badge).toBeInTheDocument();

        expect(badge).toHaveClass(
            'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-bold hover:font-extrabold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-white text-primary hover:text-primary-500 cursor-pointer'
        );
    });

    test('renders Badge with destructive variant', () => {
        render(<Badge variant="destructive">Destructive Badge</Badge>);

        const badge = screen.getByText('Destructive Badge');
        expect(badge).toBeInTheDocument();

        expect(badge).toHaveClass(
            'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-bold hover:font-extrabold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-transparent text-white'
        );
    });

    test('renders Badge with outline variant', () => {
        render(<Badge variant="outline">Outline Badge</Badge>);

        const badge = screen.getByText('Outline Badge');
        expect(badge).toBeInTheDocument();

        expect(badge).toHaveClass(
            'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-bold hover:font-extrabold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-primary border-primary'
        );
    });

    test('applies custom classes to Badge', () => {
        render(<Badge className="custom-badge">Custom Badge</Badge>);

        const badge = screen.getByText('Custom Badge');
        expect(badge).toHaveClass('custom-badge');
    });
});
