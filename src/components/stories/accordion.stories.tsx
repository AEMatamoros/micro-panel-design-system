import React from 'react';

import {
    AccordionSingleProps,
    AccordionMultipleProps
} from '@radix-ui/react-accordion';

import type { Meta, StoryObj } from '@storybook/react';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from '../ui/accordion.tsx';

const theme = import.meta.env.VITE_APP_THEME;
interface Item {
    accordionTitle: string;
    accordionDescription: string;
}
interface StorybookAccordionSingle extends AccordionSingleProps {
    items: Item[];
}
interface StorybookAccordionMultiple extends AccordionMultipleProps {
    items: Item[];
}
const meta = {
    title: 'Base/Accordion',
    component: Accordion,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    args: {
        items: [
            {
                accordionTitle: 'Accordion Item Title 1',
                accordionDescription: 'Accordion Item Description 1'
            },
            {
                accordionTitle: 'Accordion Item Title 2',
                accordionDescription: 'Accordion Item Description 2'
            }
        ]
    },
    argTypes: {
        type: { options: ['single', 'multiple'], control: 'select' },
        items: {
            name: 'Items',
            description: 'Property used to pass options to Accordion',
            table: {
                category: 'StoryBook'
            }
        }
    }
} satisfies Meta<
    React.ForwardRefExoticComponent<
        (StorybookAccordionSingle | StorybookAccordionMultiple) &
            React.RefAttributes<HTMLDivElement>
    >
>;

export default meta;
type Story = StoryObj<
    React.ForwardRefExoticComponent<
        (StorybookAccordionSingle | StorybookAccordionMultiple) &
            React.RefAttributes<HTMLDivElement>
    >
>;

export const Base: Story = {
    args: {
        type: 'multiple'
    },
    decorators: [
        StoryE => (
            <div className={theme}>
                <StoryE />
            </div>
        )
    ],
    render: ({ items, ...props }) => (
        <Accordion {...props}>
            {items.map((item, index) => (
                <AccordionItem
                    key={`${index}-${item.accordionTitle}`}
                    value={`item-${index + 1}`}
                >
                    <AccordionTrigger hideIcon={false}>
                        {item.accordionTitle}
                    </AccordionTrigger>
                    <AccordionContent>
                        {item.accordionDescription}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
};
