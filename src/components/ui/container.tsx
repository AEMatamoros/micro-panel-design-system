import React, { PropsWithChildren } from 'react';

import { cn } from '../../lib/utils';

interface ContainerProps extends PropsWithChildren {
    className?: string;
}
export function Container({
    className,
    children,
    ...rest
}: Readonly<ContainerProps>) {
    return (
        <div
            className={cn(
                `min-h-[250px] min-w-[250px] rounded-[8px] bg-white px-[24px] py-[32px] shadow-sm`,
                className
            )}
            {...rest}
        >
            {children}
        </div>
    );
}
