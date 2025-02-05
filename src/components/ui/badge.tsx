import * as React from 'react';

import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/utils';

const badgeVariants = cva(
    'inline-flex cursor-pointer items-center rounded-full border px-2.5 py-0.5 text-xs font-bold transition-colors hover:font-extrabold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
    {
        variants: {
            variant: {
                default:
                    'border-transparent bg-primary text-white hover:bg-primary/80 hover:font-extrabold',
                primary:
                    'border-transparent bg-primary text-white hover:bg-primary/80',
                secondary:
                    'border-transparent bg-white text-primary hover:text-primary-500',
                destructive: 'border-transparent bg-transparent text-white',
                login: 'bd-primary-50 border-primary-300 text-primary hover:text-primary-500 md:border-transparent md:bg-white',
                loginDestructive:
                    'border-transparent bg-transparent text-primary md:text-white',
                outline: 'border-primary text-primary'
            }
        },
        defaultVariants: {
            variant: 'default'
        }
    }
);

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
    return (
        <div className={cn(badgeVariants({ variant }), className)} {...props} />
    );
}

export { Badge, badgeVariants };
