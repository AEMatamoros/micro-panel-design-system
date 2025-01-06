import React from 'react';

import { render, screen } from '@testing-library/react';

import { Progress } from '../ui/progress';

describe('Progress Component', () => {
    test('renders Progress component with correct value', () => {
        render(<Progress value={50} />);

        const progressIndicator = screen.getByRole('progressbar');
        expect(progressIndicator).toBeInTheDocument();
    });
});
