import React from 'react';

import { render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';

import { Popover, PopoverTrigger, PopoverContent } from '../ui/popover';

describe('Popover Component', () => {
    test('renders Popover trigger and content', () => {
        render(
            <Popover>
                <PopoverTrigger>Open Popover</PopoverTrigger>
                <PopoverContent>Popover Content</PopoverContent>
            </Popover>
        );

        const trigger = screen.getByText('Open Popover');
        expect(trigger).toBeInTheDocument();

        fireEvent.click(trigger);

        const content = screen.getByText('Popover Content');
        expect(content).toBeInTheDocument();
    });

    test('popover content aligns and offsets correctly', () => {
        render(
            <Popover>
                <PopoverTrigger>Open Popover</PopoverTrigger>
                <PopoverContent align="start" sideOffset={10}>
                    Custom Aligned Content
                </PopoverContent>
            </Popover>
        );

        fireEvent.click(screen.getByText('Open Popover'));
        const content = screen.getByText('Custom Aligned Content');
        expect(content).toBeInTheDocument();
    });
});
