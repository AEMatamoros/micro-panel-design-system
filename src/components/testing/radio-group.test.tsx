import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import { RadioGroup, RadioGroupItem } from '../ui/radio-group';

describe('RadioGroup Component', () => {
    test('renders RadioGroup component with radio items', () => {
        render(
            <RadioGroup>
                <RadioGroupItem value="option1" aria-label="Option 1" />
                <RadioGroupItem value="option2" aria-label="Option 2" />
            </RadioGroup>
        );

        const radioItems = screen.getAllByRole('radio');
        expect(radioItems).toHaveLength(2);
    });

    test('checks the correct radio button on click', () => {
        render(
            <RadioGroup>
                <RadioGroupItem value="option1" aria-label="Option 1" />
                <RadioGroupItem value="option2" aria-label="Option 2" />
            </RadioGroup>
        );

        const radioItem1 = screen.getByRole('radio', { name: 'Option 1' });
        const radioItem2 = screen.getByRole('radio', { name: 'Option 2' });

        fireEvent.click(radioItem2);
        expect(radioItem2).toHaveAttribute('aria-checked', 'true');
        expect(radioItem1).toHaveAttribute('aria-checked', 'false');

        fireEvent.click(radioItem1);
        expect(radioItem1).toHaveAttribute('aria-checked', 'true');
        expect(radioItem2).toHaveAttribute('aria-checked', 'false');
    });
});
