import * as React from 'react';

import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import { Carousel } from '../ui/carousel';

describe('Carousel Component', () => {
    test('renders Carousel component', () => {
        render(<Carousel>Item</Carousel>);
        const carousel = screen.getByText('Item');
        expect(carousel).toBeInTheDocument();
    });
});
