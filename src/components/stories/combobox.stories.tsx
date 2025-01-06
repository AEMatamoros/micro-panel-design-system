import type { Meta, StoryObj } from '@storybook/react';

import { Combobox } from '../ui/combobox';

const theme = import.meta.env.VITE_APP_THEME;

const meta = {
    title: 'Base/CustomCombobox',
    component: Combobox,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        id: 'frameworks',
        placeholder: 'Seleccione un Framework',
        noResults: 'No hay coincidencias',
        onSelect: value => {
            alert(`Selected value is ${value}`);
        },
        options: [
            { label: 'Redux', value: 'redux' },
            { label: 'Flutter', value: 'fluter' },
            { label: 'Galaxia', value: 'galaxia' }
        ]
    },
    decorators: [
        StoryE => (
            <div className={theme}>
                <StoryE></StoryE>
            </div>
        )
    ]
};
