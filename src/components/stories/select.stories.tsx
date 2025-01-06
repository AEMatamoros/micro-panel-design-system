import { SelectProps } from '@radix-ui/react-select';
import type { Meta, StoryObj } from '@storybook/react';

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectValue,
    SelectTrigger
} from '../ui/select.tsx';

const theme = import.meta.env.VITE_APP_THEME;

interface SelectPropsStoryBook extends SelectProps {
    selectItemsSB: { key: string; value: string }[];
    labelSB: string;
    placeholder: string;
    sticky: 'partial' | 'always';
    position: 'item-aligned' | 'popper' | undefined;
    side: 'bottom' | 'right' | 'top' | 'left' | undefined;
    sideOffset: number;
    align: 'start' | 'center' | 'end' | undefined;
    alignOffset: number;
}

const meta = {
    title: 'Base/Select',
    component: Select,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    args: {},
    argTypes: {},
    decorators: [
        StoryE => (
            <div className={theme}>
                <StoryE />
            </div>
        )
    ]
} satisfies Meta<SelectPropsStoryBook>;

export default meta;
type Story = StoryObj<SelectPropsStoryBook>;

export const Base: Story = {
    args: {
        placeholder: 'Select a fruit',
        position: 'item-aligned',
        side: 'bottom',
        sideOffset: 0,
        align: 'start',
        alignOffset: 0,
        sticky: 'partial',
        disabled: false,
        labelSB: 'Fruits',
        selectItemsSB: [
            {
                key: 'apple',
                value: 'Apple'
            },
            {
                key: 'banana',
                value: 'Banana'
            },
            {
                key: 'blueberry',
                value: 'Blueberry'
            },
            {
                key: 'grapes',
                value: 'Grapes'
            },
            {
                key: 'pineapple',
                value: 'Pineapple'
            }
        ]
    },
    argTypes: {
        disabled: {
            description:
                'When true, prevents the user from interacting with the item.',
            control: 'boolean',
            table: {
                category: 'Component',
                subcategory: 'SelectContent',
                defaultValue: {
                    summary: 'false'
                }
            }
        },
        sticky: {
            description:
                'The sticky behavior on the align axis. "partial" will keep the content in the boundary as long as the trigger is at least partially in the boundary whilst "always" will keep the content in the boundary regardless. Only available when position is set to popper.',
            control: 'select',
            options: ['partial', 'always'],
            table: {
                category: 'Component',
                subcategory: 'SelectContent',
                defaultValue: {
                    summary: 'partial'
                }
            }
        },
        alignOffset: {
            description:
                'An offset in pixels from the "start" or "end" alignment options. Only available when position is set to popper.',
            control: 'number',
            table: {
                category: 'Component',
                subcategory: 'SelectContent',
                defaultValue: {
                    summary: '0'
                }
            }
        },
        align: {
            description:
                'The preferred alignment against the anchor. May change when collisions occur. Only available when position is set to popper.',
            control: 'select',
            options: ['start', 'center', 'end'],
            table: {
                category: 'Component',
                subcategory: 'SelectContent',
                defaultValue: {
                    summary: 'start'
                }
            }
        },
        sideOffset: {
            description:
                'The distance in pixels from the anchor. Only available when position is set to popper.',
            control: 'number',
            table: {
                category: 'Component',
                subcategory: 'SelectContent',
                defaultValue: {
                    summary: '0'
                }
            }
        },
        side: {
            description:
                'The preferred side of the anchor to render against when open. Will be reversed when collisions occur and avoidCollisions is enabled. Only available when position is set to popper.',
            control: 'select',
            options: ['bottom', 'right', 'top', 'left'],
            table: {
                category: 'Component',
                subcategory: 'SelectContent',
                defaultValue: {
                    summary: 'bottom'
                }
            }
        },
        position: {
            description:
                'The positioning mode to use, item-aligned is the default and behaves similarly to a native MacOS menu by positioning content relative to the active item. popper positions content in the same way as our other primitives, for example Popover or DropdownMenu.',
            control: 'select',
            options: ['item-aligned', 'popper'],
            table: {
                category: 'Component',
                subcategory: 'SelectContent',
                defaultValue: {
                    summary: 'item-aligned'
                }
            }
        },
        placeholder: {
            description:
                'The content that will be rendered inside the Select.Value when no value or defaultValue is set.',
            control: 'text',
            table: {
                category: 'Component',
                subcategory: 'SelectValue',
                defaultValue: {
                    summary: 'Select a fruit'
                }
            }
        },
        labelSB: {
            description:
                'This property is to set text to label of the component',
            control: 'text',
            table: {
                category: 'StoryBook',
                defaultValue: {
                    summary: 'Fruits'
                }
            }
        },
        selectItemsSB: {
            description: 'This property is to set the select items',
            control: 'object',
            table: {
                category: 'StoryBook'
            }
        }
    },
    render: ({ placeholder, selectItemsSB, labelSB, disabled, ...props }) => (
        <div className="flex min-h-52 items-center justify-center">
            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent {...props}>
                    <SelectGroup>
                        <SelectLabel>{labelSB}</SelectLabel>
                        {selectItemsSB.map((selectItem, index) => (
                            <SelectItem
                                key={`${index}-${selectItem.value}`}
                                disabled={disabled}
                                value={selectItem.key}
                            >
                                {selectItem.value}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
};
