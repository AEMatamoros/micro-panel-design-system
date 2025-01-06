import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../ui/button.tsx';
import { Label } from '../ui/label.tsx';
import { Textarea, TextareaProps } from '../ui/textarea.tsx';

/* import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form.tsx';
import { useForm } from 'react-hook-form'; */

const theme = import.meta.env.VITE_APP_THEME;

interface TextareaPropsStoryBook extends TextareaProps {
    labelSB: string;
    textSB: string;
    buttonSB: string;
}

const meta = {
    title: 'Base/Text Area',
    component: Textarea,
    tags: ['autodocs'],
    args: {
        disabled: false,
        placeholder: 'Enter something',
        labelSB: 'Address',
        textSB: 'Description text for the component',
        buttonSB: 'Send'
    },
    argTypes: {
        disabled: {
            description: 'Property to disable the component',
            table: {
                category: 'Component',
                defaultValue: {
                    summary: 'false'
                }
            }
        },
        placeholder: {
            description: 'Property to add a placeholder to the component',
            control: 'text',
            table: {
                category: 'Component',
                defaultValue: {
                    summary: 'false'
                }
            }
        },
        buttonSB: {
            name: 'Button for the component',
            description: 'Property to add the text to the button',
            control: 'text',
            table: {
                category: 'StoryBook',
                defaultValue: {
                    summary: 'Address'
                }
            }
        },
        labelSB: {
            name: 'Label for the component',
            description:
                'Property to change the text of the label for storybook',
            control: 'text',
            table: {
                category: 'StoryBook',
                defaultValue: {
                    summary: 'Address'
                }
            }
        },
        textSB: {
            name: 'Description text',
            description: 'Property to add a descriptive text to the component',
            control: 'text',
            table: {
                category: 'StoryBook',
                defaultValue: {
                    summary: 'Dirección'
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
} satisfies Meta<TextareaPropsStoryBook>;

export default meta;
type Story = StoryObj<TextareaPropsStoryBook>;

export const Base: Story = {};

export const LabelTextarea: Story = {
    render: ({ labelSB, ...props }) => (
        <div className="grid w-full gap-1.5">
            <Label htmlFor="message">{labelSB}</Label>
            <Textarea {...props} />
        </div>
    )
};

export const TextWithTextarea: Story = {
    render: ({ labelSB, textSB, ...props }) => (
        <div className="grid w-full gap-1.5">
            <Label htmlFor="message-2">{labelSB}</Label>
            <Textarea {...props} />
            <p className="text-sm text-muted-foreground">{textSB}</p>
        </div>
    )
};

export const TextareaWithButton: Story = {
    render: ({ buttonSB, ...props }) => (
        <div className="grid w-full gap-2">
            <Textarea {...props} />
            <Button>{buttonSB}</Button>
        </div>
    )
};

/* export const TextareaForm: Story = {
    render: ({labelSB, buttonSB, textSB, ...props}) => {
        const formTextComp = useForm({});
        return (
            <Form {...formTextComp}>
                <form  className="w-2/3 space-y-6">
                    <FormField
                        name="bio"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{labelSB}</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Tell us a little bit about yourself"
                                        className="resize-none"
                                        {...props}
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription>
                                    {textSB}
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">{buttonSB}</Button>
                </form>
            </Form>
        )
    }
}
 */
