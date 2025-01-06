import React from 'react';

import { cva, type VariantProps } from 'class-variance-authority';

import { Link as RouterLink, LinkProps } from 'react-router-dom';

import { cn } from '../../lib/utils';

const customLinkVariants = cva(
    'flex items-center rounded-lg p-3 text-body-m font-bold text-secondary-900 disabled:text-secondary-500',
    {
        variants: {
            variant: {
                underline: '',
                external: ''
            }
        },
        defaultVariants: {
            variant: 'underline'
        }
    }
);

interface CustomLinkProps
    extends LinkProps,
        VariantProps<typeof customLinkVariants> {
    disabled?: boolean;
}

const CustomLink: React.FC<CustomLinkProps> = ({
    variant = 'underline',
    disabled,
    children,
    className,
    ...props
}) => {
    const classes = cn(customLinkVariants({ variant }), className, {
        'focus:border-md focus:border-secondary-400 focus:p-2': !disabled,
        'hover:underline': !disabled,
        'text-gray-500': disabled
    });

    if (disabled) {
        return (
            <span className={classes} aria-disabled="true">
                {children}
                {variant === 'external' && (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="inline-block"
                    >
                        <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" />
                    </svg>
                )}
            </span>
        );
    }
    return (
        <RouterLink {...props} className={classes}>
            {children}
            {variant === 'external' && (
                <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" />
            )}
        </RouterLink>
    );
};

export default CustomLink;
