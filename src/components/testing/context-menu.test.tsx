import React from 'react';

import { render, screen } from '@testing-library/react';

import {
    ContextMenu,
    ContextMenuTrigger,
    ContextMenuContent,
    ContextMenuItem
} from '../ui/context-menu';

describe('ContextMenu', () => {
    test('renders ContextMenu and triggers correctly', () => {
        render(
            <ContextMenu>
                <ContextMenuTrigger>
                    <button>Open Menu</button>
                </ContextMenuTrigger>
                <ContextMenuContent>
                    <ContextMenuItem>Item 1</ContextMenuItem>
                    <ContextMenuItem>Item 2</ContextMenuItem>
                </ContextMenuContent>
            </ContextMenu>
        );

        expect(screen.getByText('Open Menu')).toBeInTheDocument();
    });
});
