import * as React from 'react';

import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/utils';

const buttonVariants = cva(
    'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    {
        variants: {
            variant: {
                default:
                    'border-0 bg-primary fill-white font-semibold text-white hover:bg-primary-500 focus:border-[2px] focus:border-secondary-400 active:bg-primary-700 disabled:bg-secondary-200 disabled:fill-secondary-500 disabled:text-secondary-600',
                primary:
                    'border-0 bg-primary fill-white font-semibold text-white hover:bg-primary-500 focus:border-[2px] focus:border-secondary-400 active:bg-primary-700 disabled:bg-secondary-200 disabled:fill-secondary-500 disabled:text-secondary-600',
                secondary:
                    'border-[2px] border-primary fill-primary font-semibold text-primary hover:border-primary-500 hover:fill-primary-500 hover:text-primary-500 focus:border-[4px] focus:border-secondary-400 active:text-primary-700 disabled:border-secondary-500 disabled:bg-secondary-200 disabled:fill-secondary-500 disabled:text-secondary-500',
                tertiary:
                    'fill-primary font-semibold text-primary hover:fill-primary-500 hover:text-primary-500 focus:border-[4px] focus:border-secondary-400 active:text-primary-700 disabled:border-secondary-500 disabled:bg-secondary-200 disabled:fill-secondary-500 disabled:text-secondary-500',
                outline:
                    'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
                ghost: 'bg-transparent hover:bg-accent hover:text-accent-foreground'
            },
            size: {
                default: 'h-[48px] gap-[8px] p-[12px] text-[16px]',
                md: 'h-[48px] gap-[8px] p-[12px] text-[16px]',
                sm: 'h-[34px] gap-[6px] p-[8px] text-[14px]',
                icon: 'h-[48px] w-[48px]',
                iconRounded: 'h-[48px] w-[48px] rounded-full',
                quickAction:
                    'flex h-[102px] w-[126px] flex-col items-center justify-center gap-[8px] font-bold'
            }
        },
        defaultVariants: {
            variant: 'default',
            size: 'default'
        }
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button';
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
