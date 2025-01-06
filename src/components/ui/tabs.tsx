import * as React from 'react';

import * as TabsPrimitive from '@radix-ui/react-tabs';

import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/utils';

const Tabs = TabsPrimitive.Root;

const tabListVariants = cva(
    'inline-flex items-center justify-center rounded-lg p-1 text-muted-foreground',
    {
        variants: {
            variant: {
                default: 'h-9 bg-transparent',
                white: 'h-10 w-full bg-white'
            }
        },
        defaultVariants: {
            variant: 'default'
        }
    }
);

const TabsList = React.forwardRef<
    React.ElementRef<typeof TabsPrimitive.List>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> &
        VariantProps<typeof tabListVariants>
>(({ className, variant, ...props }, ref) => (
    <TabsPrimitive.List
        ref={ref}
        className={cn(tabListVariants({ variant }), className)}
        {...props}
    />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const tabTriggerVariants = cva(
    'inline-flex items-center whitespace-nowrap font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow',
    {
        variants: {
            variant: {
                default:
                    'justify-center rounded-md px-3 py-1 text-sm text-primary',
                white: 'h-[30px] w-full items-center justify-between rounded-[10px] px-5 py-[9px] text-xs text-[#1F1F1F]'
            }
        },
        defaultVariants: {
            variant: 'default'
        }
    }
);

const TabsTrigger = React.forwardRef<
    React.ElementRef<typeof TabsPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> &
        VariantProps<typeof tabTriggerVariants>
>(({ className, variant, ...props }, ref) => (
    <TabsPrimitive.Trigger
        ref={ref}
        className={cn(tabTriggerVariants({ variant }), className)}
        {...props}
    />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
    React.ElementRef<typeof TabsPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
    <TabsPrimitive.Content
        ref={ref}
        className={cn(
            'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
            className
        )}
        {...props}
    />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
