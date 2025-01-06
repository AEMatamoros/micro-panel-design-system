import React from 'react';

import { render, screen } from '@testing-library/react';

import { Dialog } from '../ui/dialog';

describe('Dialog', () => {
    test('renders Dialog and triggers correctly', () => {
        render(
            <Dialog isOpen={true} toggleDialog={() => {}}>
                <span>Dialog Content</span>
            </Dialog>
        );
        expect(screen.getByText('Dialog Content')).toBeInTheDocument();
    });
});
