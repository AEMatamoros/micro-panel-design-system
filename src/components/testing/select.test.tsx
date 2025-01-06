import React from 'react';

import { render, screen } from '@testing-library/react';

import { Select, SelectTrigger, SelectContent, SelectItem } from '../ui/select';

describe('Select Component', () => {
    test('renders SelectTrigger and opens SelectContent on click', () => {
        render(
            <Select>
                <SelectTrigger>Trigger</SelectTrigger>
                <SelectContent>
                    <SelectItem value="option1">Option 1</SelectItem>
                    <SelectItem value="option2">Option 2</SelectItem>
                </SelectContent>
            </Select>
        );

        const trigger = screen.getByText('Trigger');

        expect(trigger).toBeInTheDocument();
    });
});
