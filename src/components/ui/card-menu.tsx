import React from 'react';

import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

//Variants container
const cardMenuVariants = cva('', {
    variants: {
        variant: {
            default:
                'mx-auto grid w-max grid-cols-3 gap-4 bg-transparent md:gap-16'
        }
    },
    defaultVariants: {
        variant: 'default'
    }
});

export interface CardMenuButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export interface CardMenuItems {
    icon: React.ReactNode;
    descriptions: string;
    handleViewNavigation: () => void;
}

export interface CardMenuProps
    extends React.HtmlHTMLAttributes<HTMLDivElement>,
        VariantProps<typeof cardMenuVariants> {
    items: CardMenuItems[];
}

const CardMenu = React.forwardRef<HTMLDivElement, CardMenuProps>(
    ({ className, variant, items, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(cardMenuVariants({ variant, className }))}
            {...props}
        >
            {items.map((menu, index) => (
                <CardMenuButton
                    key={`${index}-${menu.descriptions}`}
                    onClick={() => {
                        menu.handleViewNavigation();
                    }}
                >
                    <CardMenuIcon>{menu.icon}</CardMenuIcon>
                    <CardMenuDescription>
                        {menu.descriptions}
                    </CardMenuDescription>
                </CardMenuButton>
            ))}
        </div>
    )
);
CardMenu.displayName = 'CardMenuContainer';

const CardMenuButton = React.forwardRef<HTMLButtonElement, CardMenuButtonProps>(
    ({ className, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    'h-20 w-20 rounded-lg shadow-lg ml:h-28 ml:w-28',
                    className
                )}
                {...props}
            />
        );
    }
);

CardMenuButton.displayName = 'CardMenuButton';

const CardMenuIcon = React.forwardRef<
    HTMLDivElement,
    React.HtmlHTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn('mx-auto w-max fill-primary', className)}
        {...props}
    />
));
CardMenuIcon.displayName = 'CardMenuIcon';

const CardMenuDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HtmlHTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn(
            'px-1 text-body-xs font-bold text-secondary-700 ms:px-2 md:text-body-s',
            className
        )}
        {...props}
    />
));
CardMenuDescription.displayName = 'CardMenuDescription';

export { CardMenu };
