import * as React from 'react';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

import { cn } from '../../lib/utils';

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
    <AccordionPrimitive.Item
        ref={ref}
        className={cn('', className)}
        {...props}
    />
));
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & {
        hideIcon: boolean;
    }
>(({ className, children, hideIcon, ...props }, ref) => (
    <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger
            ref={ref}
            className={cn(
                'flex flex-1 items-center justify-between py-4 font-medium transition-all [&[data-state=open]>svg]:rotate-180',
                className
            )}
            {...props}
        >
            {children}
            {!hideIcon && (
                <ChevronDown className="h-4 w-4 shrink-0 text-primary transition-transform duration-200" />
            )}
        </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
        ref={ref}
        className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
        {...props}
    >
        <div className={cn('pb-4 pt-0', className)}>{children}</div>
    </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

type AccordionWrapperProps = {
    content: React.ReactNode;
    trigger: React.ReactNode;
    defaultValue?: string;
    hideIcon?: boolean;
};

const AccordionWrapper = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Item>,
    AccordionWrapperProps
>(({ content, trigger, hideIcon = false, defaultValue }, ref) => (
    <Accordion ref={ref} type="single" collapsible defaultValue={defaultValue}>
        <AccordionItem value={defaultValue ?? 'default'}>
            <AccordionTrigger hideIcon={hideIcon}>{trigger}</AccordionTrigger>
            <AccordionContent>{content}</AccordionContent>
        </AccordionItem>
    </Accordion>
));
AccordionWrapper.displayName = 'AccordionWrapper';

export {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
    AccordionWrapper
};
