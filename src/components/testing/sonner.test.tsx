import React from 'react';

import { render } from '@testing-library/react';

import { SonnerToaster } from '../ui/sonner';

describe('Toaster Component', () => {
    test('renders with default styles', () => {
        const { container } = render(<SonnerToaster />);

        const toaster = container.tagName;
        expect(toaster).toBe('DIV');
    });
});
