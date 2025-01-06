import * as React from 'react';

import * as LabelPrimitive from '@radix-ui/react-label';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/utils';

const labelVariants = cva('', {
    variants: {
        size: {
            m: '',
            s: ''
        },
        weight: {
            normal: 'font-normal',
            medium: 'font-medium',
            bold: 'font-bold'
        }
    },
    compoundVariants: [
        { size: 'm', className: 'text-label-m' },
        { size: 's', className: 'text-label-s' }
    ],
    defaultVariants: {
        size: 'm',
        weight: 'normal'
    }
});

const Label = React.forwardRef<
    React.ElementRef<typeof LabelPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
        VariantProps<typeof labelVariants>
>(({ className, size, weight, ...props }, ref) => (
    <LabelPrimitive.Root
        ref={ref}
        className={cn(labelVariants({ size, weight }), className)}
        {...props}
    />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
