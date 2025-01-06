import * as React from 'react';

import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import { Combobox } from '../ui/combobox';
const CCombobox = Combobox;

describe('Combobox Component', () => {
    test('renders Combobox', () => {
        render(
            <CCombobox
                id="frameworks"
                placeholder="Seleccione un Framework"
                noResults="No hay coincidencias"
                onSelect={() => {}}
                options={[
                    { label: 'Redux', value: 'redux' },
                    { label: 'Flutter', value: 'fluter' },
                    { label: 'Galaxia', value: 'galaxia' }
                ]}
            />
        );

        const Combobox = screen.getByText('Redux');
        expect(Combobox).toBeInTheDocument();
    });
});
