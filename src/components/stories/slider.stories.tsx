import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Slider } from '../ui/slider.tsx';

const theme = import.meta.env.VITE_APP_THEME;

const meta = {
    title: 'Base/Slider',
    component: Slider,
    tags: ['autodocs'],
    args: {
        defaultValue: [10],
        max: 100,
        min: 0,
        step: 1,
        disabled: false,
        orientation: 'horizontal',
        inverted: false,
        minStepsBetweenThumbs: 0
    },
    argTypes: {
        defaultValue: {
            description:
                'The value of the slider when initially rendered. Use when you do not need to control the state of the slider.',
            control: 'object',
            table: {
                category: 'Component',
                defaultValue: {
                    summary: '[10]'
                }
            }
        },
        max: {
            description: 'The maximum value for the range.',
            control: 'number',
            table: {
                category: 'Component',
                defaultValue: {
                    summary: '100'
                }
            }
        },
        min: {
            description: 'The minimum value for the range.',
            control: 'number',
            table: {
                category: 'Component',
                defaultValue: {
                    summary: '0'
                }
            }
        },
        step: {
            description: 'The stepping interval.',
            control: 'number',
            table: {
                category: 'Component',
                defaultValue: {
                    summary: '1'
                }
            }
        },
        disabled: {
            description:
                'When true, prevents the user from interacting with the slider.',
            control: 'boolean',
            table: {
                category: 'Component',
                defaultValue: {
                    summary: 'false'
                }
            }
        },
        orientation: {
            description: 'The orientation of the slider.',
            control: 'select',
            options: ['horizontal', 'vertical'],
            table: {
                category: 'Component',
                defaultValue: {
                    summary: 'horizontal'
                }
            }
        },
        inverted: {
            description: 'Whether the slider is visually inverted.',
            control: 'boolean',
            table: {
                category: 'Component',
                defaultValue: {
                    summary: 'false'
                }
            }
        },
        minStepsBetweenThumbs: {
            description: 'The minimum permitted steps between multiple thumbs.',
            control: 'number',
            table: {
                category: 'Component',
                defaultValue: {
                    summary: '0'
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
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
    render: args => <Slider {...args} />
};
