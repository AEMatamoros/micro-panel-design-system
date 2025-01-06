import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import { Toggle } from '../ui/toggle';

const renderToggle = (props: React.ComponentProps<typeof Toggle>) => {
    return render(<Toggle {...props}>Toggle</Toggle>);
};

describe('Toggle Component', () => {
    test('renders Toggle component correctly', () => {
        renderToggle({});
        expect(screen.getByText('Toggle')).toBeInTheDocument();
    });

    test('applies default styles', () => {
        renderToggle({});
        const toggle = screen.getByText('Toggle');
        expect(toggle).toHaveClass(
            'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground'
        );
    });

    test('applies variant styles', () => {
        renderToggle({ variant: 'outline' });
        const toggle = screen.getByText('Toggle');
        expect(toggle).toHaveClass(
            'border border-input bg-transparent hover:bg-accent hover:text-accent-foreground'
        );
    });

    test('applies size styles', () => {
        renderToggle({ size: 'sm' });
        const toggle = screen.getByText('Toggle');
        expect(toggle).toHaveClass('h-9 px-2.5');
    });

    test('handles toggle state change', () => {
        const onClick = jest.fn();
        render(<Toggle onClick={onClick}>Toggle</Toggle>);

        fireEvent.click(screen.getByText('Toggle'));
        expect(onClick).toHaveBeenCalled();
    });
});
