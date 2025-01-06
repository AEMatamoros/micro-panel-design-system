import React from 'react';

import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const textVariants = cva('', {
    variants: {
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
        { size: 'l', className: 'text-body-l' },
        { size: 'm', className: 'text-body-m' },
        { size: 's', className: 'text-body-s' },
        { size: 'xs', className: 'text-body-xs' }
    ]
});

interface TextProps
    extends React.HtmlHTMLAttributes<HTMLElement>,
        VariantProps<typeof textVariants> {}

const Text: React.FC<TextProps> = ({
    size = 'm',
    weight = 'normal',
    className,
    children,
    ...props
}) => {
    const textClass = cn(textVariants({ size, weight }), className);
    return (
        <p className={textClass} {...props}>
            {children}
        </p>
    );
};

export default Text;
