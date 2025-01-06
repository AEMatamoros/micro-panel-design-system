import { render, screen, fireEvent } from '@testing-library/react';

import '@testing-library/jest-dom';
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent
} from '../ui/accordion';

describe('Accordion Component', () => {
    test('renders Accordion with items and triggers', () => {
        render(
            <Accordion type="single" defaultValue="item-1">
                <AccordionItem value="item-1">
                    <AccordionTrigger>Item 1</AccordionTrigger>
                    <AccordionContent>Content 1</AccordionContent>
                </AccordionItem>
            </Accordion>
        );

        expect(screen.getByText('Item 1')).toBeInTheDocument();
        expect(screen.getByText('Content 1')).toBeInTheDocument();
    });

    test('toggles Accordion content when trigger is clicked', () => {
        render(
            <Accordion type="single" defaultValue="item-1">
                <AccordionItem value="item-1">
                    <AccordionTrigger>Item 1</AccordionTrigger>
                    <AccordionContent>Content 1</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Item 2</AccordionTrigger>
                    <AccordionContent>Content 2</AccordionContent>
                </AccordionItem>
            </Accordion>
        );

        const item2Trigger = screen.getByText('Item 2');
        fireEvent.click(item2Trigger);

        expect(screen.getByText('Content 2')).toBeVisible();
    });

    test('applies custom classes correctly', () => {
        render(
            <Accordion type="single" defaultValue="item-1">
                <AccordionItem value="item-1" className="custom-item-class">
                    <AccordionTrigger className="custom-trigger-class custom-trigger-class">
                        Item 1
                    </AccordionTrigger>
                    <AccordionContent className="custom-content-class">
                        Content 1
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        );

        expect(screen.getByText('Item 1')).toHaveClass('custom-trigger-class');
        expect(screen.getByText('Content 1')).toHaveClass(
            'custom-content-class'
        );
    });
});
