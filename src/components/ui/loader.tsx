import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

interface IPropsLoader extends VariantProps<typeof loaderVariants> {
    className?: string;
}

const loaderVariants = cva('loader', {
    variants: {
        variant: {
            default: 'flex w-[112px] justify-between',
            load: 'fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center gap-2 bg-[rgba(52,52,52,0.6)]'
        }
    },
    defaultVariants: {
        variant: 'default'
    }
});

export function Loader({ variant, className }: Readonly<IPropsLoader>) {
    return (
        <div className={cn(loaderVariants({ variant, className }))}>
            <span className="h-3 w-3 rounded-[50%] bg-primary"></span>
            <span className="h-3 w-3 rounded-[50%] bg-primary"></span>
            <span className="h-3 w-3 rounded-[50%] bg-primary"></span>
            <span className="h-3 w-3 rounded-[50%] bg-primary"></span>
        </div>
    );
}
