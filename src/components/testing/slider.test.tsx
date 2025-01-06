import React from 'react';

import { render } from '@testing-library/react';

import { Slider } from '../ui/slider';

describe('Slider Component', () => {
    test('renders with default styles', () => {
        const { container } = render(
            <Slider
                defaultValue={[50]}
                max={100}
                step={1}
                className={'w-[60%]'}
            />
        );
        expect(container.tagName).toBe('DIV');
    });
});
