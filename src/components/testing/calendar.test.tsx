import * as React from 'react';

import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import { Calendar, CalendarProps } from '../ui/calendar';

describe('Calendar Component', () => {
    const renderCalendar = (props: Partial<CalendarProps> = {}) => {
        render(<Calendar {...props} />);
    };

    test('renders Calendar component', () => {
        renderCalendar();
        const calendar = screen.getByRole('grid');
        expect(calendar).toBeInTheDocument();
    });

    test('displays navigation buttons', () => {
        renderCalendar();
        const prevButton = screen.getByRole('button', {
            name: /previous month/i
        });
        const nextButton = screen.getByRole('button', { name: /next month/i });

        expect(prevButton).toBeInTheDocument();
        expect(nextButton).toBeInTheDocument();
    });

    test('renders with correct default classes', () => {
        renderCalendar();

        const days = screen.getAllByRole('gridcell');
        days.forEach(day => {
            expect(day).toHaveClass(
                'h-9 w-9 p-0 font-normal aria-selected:opacity-100 hover:bg-primary hover:text-white cursor-pointer'
            );
        });
    });

    test('disables days correctly', () => {
        const disabledDays = [{ before: new Date() }];
        renderCalendar({ disabled: disabledDays });

        const disabledDay = screen.getAllByRole('gridcell')[0];
        expect(disabledDay).toHaveClass('text-muted-foreground opacity-50');
    });
});
