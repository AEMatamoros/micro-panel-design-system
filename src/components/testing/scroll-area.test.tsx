import React from 'react';

import { render, screen } from '@testing-library/react';

import { ScrollArea } from '../ui/scroll-area';

describe('ScrollArea', () => {
    test('renders ScrollArea component correctly with children', () => {
        render(
            <ScrollArea>
                <div>Content</div>
            </ScrollArea>
        );

        const content = screen.getByText('Content');
        expect(content).toBeInTheDocument();
    });
});
