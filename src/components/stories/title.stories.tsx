import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Title } from '../ui/title';

const theme = import.meta.env.VITE_APP_THEME;

const meta = {
    title: 'Base/Title',
    component: Title,
    tags: ['autodocs'],
    args: {
        variant: 'display',
        size: 'm',
        weight: 'normal',
        children: 'This is a title'
    },
    argTypes: {
        variant: {
            description:
                'Defines the style of the text, such as display or heading. Use "display" for larger, more prominent text, and "heading" for section titles.',
            control: 'select',
            options: ['display', 'heading'],
            table: {
                category: 'Component',
                defaultValue: {
                    summary: 'display'
                }
            }
        },
        size: {
            description:
                'Specifies the size of the text, ranging from extra large (xl) to extra small (xs). Choose the size based on the visual prominence required.',
            control: 'select',
            options: ['xl', 'l', 'm', 's', 'xs'],
            table: {
                category: 'Component',
                defaultValue: {
                    summary: 'm'
                }
            }
        },
        weight: {
            description:
                'Sets the font weight, determining the thickness of the text. Options include normal, medium, and bold.',
            control: 'select',
            options: ['normal', 'medium', 'bold'],
            table: {
                category: 'Component',
                defaultValue: {
                    summary: 'normal'
                }
            }
        },
        children: {
            description:
                'Content of the title. This is the text that will be displayed inside the title component.',
            table: {
                category: 'Component',
                defaultValue: {
                    summary: 'This is a title'
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
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof Title>;

export const Base: Story = {};
