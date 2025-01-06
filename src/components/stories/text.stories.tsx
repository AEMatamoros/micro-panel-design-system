import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Text from '../ui/text';

const theme = import.meta.env.VITE_APP_THEME;

const meta = {
    title: 'Base/Text',
    component: Text,
    tags: ['autodocs'],
    args: {
        size: 'm',
        weight: 'normal',
        children: 'sample text'
    },
    argTypes: {
        size: {
            control: 'select',
            options: ['l', 'm', 's', 'xs', 'xl'],
            description:
                'Sets the size of the text. Available sizes vary based on the variant.',
            table: {
                category: 'Componente',
                defaultValue: {
                    summary: 'm'
                }
            }
        },
        weight: {
            control: 'select',
            options: ['normal', 'medium', 'bold'],
            description:
                'Specifies the weight (thickness) of the text. Options include normal, medium, and bold.',
            defaultValue: 'normal',
            table: {
                category: 'Componente',
                defaultValue: {
                    summary: 'normal'
                }
            }
        },
        children: {
            control: 'text',
            description:
                'The content to be displayed within the text component.',
            table: {
                category: 'Componente',
                defaultValue: {
                    summary: ''
                }
            }
        }
    },
    decorators: [
        StoryE => (
            <div className={theme}>
                <StoryE />
            </div>
        )
    ]
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof Text>;

export const Base: Story = {};
