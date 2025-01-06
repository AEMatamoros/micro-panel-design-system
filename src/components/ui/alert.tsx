import * as React from 'react';

import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/utils';

const alertVariants = cva(
    'relative flex h-16 w-full items-center justify-center [&>svg]:mr-2',
    {
        variants: {
            variant: {
                default:
                    'bg-secondary-200 fill-secondary-900 text-secondary-900',
                error: 'bg-primary-100 fill-primary-700 text-primary-700',
                warning: 'bg-warning-200 fill-warning-800 text-warning-800',
                success: 'bg-success-200 fill-success-800 text-success-800'
            }
        },
        defaultVariants: {
            variant: 'default'
        }
    }
);

type CloseButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const CloseButton: React.FC<CloseButtonProps> = props => {
    return (
        <button className="absolute right-5" aria-label="Close" {...props}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="fill-inherit text-inherit"
            >
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
        </button>
    );
};

// Define los íconos para cada variante
const iconMap = {
    default: null,
    error: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 512"
            className="text-inherit"
        >
            <path d="M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64l0 256c0 17.7 14.3 32 32 32s32-14.3 32-32L96 64zM64 480a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
        </svg>
    ),
    warning: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="text-inherit"
        >
            <path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
        </svg>
    ),
    success: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="text-inherit"
        >
            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
        </svg>
    )
};

const Alert = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant = 'default', children, ...props }, ref) => {
    const [isVisible, setIsVisible] = React.useState(true);

    if (!isVisible) return null;

    const IconToShow = iconMap[variant ?? 'default'] ?? iconMap.default;

    return (
        <div
            ref={ref}
            role="alert"
            className={cn(alertVariants({ variant }), className)}
            {...props}
        >
            {IconToShow}
            {children}
            <CloseButton onClick={() => setIsVisible(false)} />
        </div>
    );
});
Alert.displayName = 'Alert';

const AlertTitle = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn('text-body-m font-normal', className)}
        {...props}
    />
));
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn('text-sm [&_p]:leading-relaxed', className)}
        {...props}
    />
));
AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertTitle, AlertDescription };
