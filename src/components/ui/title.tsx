import React from 'react';

import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/utils';

const titleVariants = cva('', {
    variants: {
        variant: {
            display: '',
            heading: ''
        },
        size: {
            xl: '',
            l: '',
            m: '',
            s: '',
            xs: ''
        },
        weight: {
            normal: 'font-normal',
            medium: 'font-medium',
            bold: 'font-bold'
        }
    },
    compoundVariants: [
        // Variants for 'display'
        { variant: 'display', size: 'l', className: 'text-display-l' },
        { variant: 'display', size: 'm', className: 'text-display-m' },
        { variant: 'display', size: 's', className: 'text-display-s' },
        { variant: 'display', size: 'xs', className: 'text-display-xs' },
        { variant: 'display', size: 'xl', className: 'text-display-xl' },

        // Variants for 'heading'
        { variant: 'heading', size: 'xl', className: 'text-heading-xl' },
        { variant: 'heading', size: 'l', className: 'text-heading-l' },
        { variant: 'heading', size: 'm', className: 'text-heading-m' },
        { variant: 'heading', size: 's', className: 'text-heading-s' },
        { variant: 'heading', size: 'xs', className: 'text-heading-xs' }
    ],
    defaultVariants: {
        variant: 'display',
        size: 'm',
        weight: 'normal'
    }
});

interface TitleProps
    extends React.HTMLAttributes<HTMLHeadingElement>,
        VariantProps<typeof titleVariants> {
    children?: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({
    variant = 'display',
    size = 'm',
    weight = 'normal',
    children,
    className,
    ...props
}) => {
    const classes = cn(titleVariants({ variant, size, weight }), className);

    switch (size) {
        case 'xl':
            return (
                <h1 className={classes} {...props}>
                    {children}
                </h1>
            );
        case 'l':
            return (
                <h2 className={classes} {...props}>
                    {children}
                </h2>
            );
        case 'm':
            return (
                <h3 className={classes} {...props}>
                    {children}
                </h3>
            );
        case 's':
            return (
                <h4 className={classes} {...props}>
                    {children}
                </h4>
            );
        case 'xs':
            return (
                <h5 className={classes} {...props}>
                    {children}
                </h5>
            );
    }
};

export { Title };
