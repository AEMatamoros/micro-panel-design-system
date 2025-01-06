import * as React from 'react';

import * as AvatarPrimitive from '@radix-ui/react-avatar';

import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/utils';

const avatarVariants = cva(
    'flex h-full items-center justify-center overflow-hidden rounded-full',
    {
        variants: {
            variant: {
                default: '',
                outline: 'border-2 border-primary'
            },
            size: {
                default: 'h-10 w-10',
                small: 'h-8 w-8',
                large: 'h-12 w-12'
            }
        },
        defaultVariants: {
            variant: 'default',
            size: 'default'
        }
    }
);

const avatarImageVariants = cva('h-full w-full rounded-lg', {
    variants: {
        variant: {
            default: '',
            outline: ''
        },
        size: {
            default: 'h-full w-full'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});

const avatarFallbackVariants = cva(
    'flex h-full w-full items-center justify-center',
    {
        variants: {
            variant: {
                default: 'bg-primary text-white',
                outline: 'bg-white text-primary'
            },
            size: {
                default: 'h-10 w-10 text-lg leading-none',
                small: 'h-8 w-8 text-base',
                large: 'h-12 w-12 text-xl leading-loose'
            }
        },
        defaultVariants: {
            variant: 'default',
            size: 'default'
        }
    }
);

export interface AvatarProps
    extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>,
        VariantProps<typeof avatarVariants> {}

const Avatar = React.forwardRef<
    React.ElementRef<typeof AvatarPrimitive.Root>,
    AvatarProps
>(({ className, variant, size, ...props }, ref) => (
    <AvatarPrimitive.Root
        ref={ref}
        className={cn(avatarVariants({ variant, size, className }))}
        {...props}
    />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

export interface AvatarImageProps
    extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>,
        VariantProps<typeof avatarImageVariants> {}

const AvatarImage = React.forwardRef<
    React.ElementRef<typeof AvatarPrimitive.Image>,
    AvatarImageProps
>(({ className, variant, size, ...props }, ref) => (
    <AvatarPrimitive.Image
        ref={ref}
        className={cn(avatarImageVariants({ variant, size, className }))}
        {...props}
    />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

export interface AvatarFallbackProps
    extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>,
        VariantProps<typeof avatarFallbackVariants> {}

const AvatarFallback = React.forwardRef<
    React.ElementRef<typeof AvatarPrimitive.Fallback>,
    AvatarFallbackProps
>(({ className, variant, size, ...props }, ref) => (
    <AvatarPrimitive.Fallback
        ref={ref}
        className={cn(avatarFallbackVariants({ variant, size, className }))}
        {...props}
    />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export {
    Avatar,
    AvatarImage,
    AvatarFallback,
    avatarVariants,
    avatarFallbackVariants,
    avatarImageVariants
};
