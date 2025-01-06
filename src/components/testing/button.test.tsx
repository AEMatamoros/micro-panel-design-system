import * as React from 'react';

import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import { Button } from '../ui/button';

describe('Button Component', () => {
    test('renders default Button with correct class', () => {
        render(<Button>Click Me</Button>);

        const button = screen.getByRole('button', { name: /click me/i });
        expect(button).toHaveClass(
            'inline-flex items-center justify-center whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 fill-white disabled:fill-secondary-500 bg-primary text-white hover:bg-primary-500 active:bg-primary-700 font-semibold border-0 focus:border-[2px] focus:border-secondary-400 disabled:bg-secondary-200 disabled:text-secondary-600 gap-[8px] h-[48px] p-[12px] text-[16px]'
        );
    });

    test('renders Button with primary variant', () => {
        render(<Button variant="primary">Primary Button</Button>);

        const button = screen.getByRole('button', { name: /primary button/i });
        expect(button).toHaveClass(
            'inline-flex items-center justify-center whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 fill-white disabled:fill-secondary-500 bg-primary text-white hover:bg-primary-500 active:bg-primary-700 font-semibold border-0 focus:border-[2px] focus:border-secondary-400 disabled:bg-secondary-200 disabled:text-secondary-600 gap-[8px] h-[48px] p-[12px] text-[16px]'
        );
    });

    test('renders Button with different sizes', () => {
        render(
            <>
                <Button size="md">md</Button>
                <Button size="sm">sm</Button>
                <Button size="icon">icon</Button>
                <Button size="iconRounded">rounded</Button>
                <Button size="quickAction">quickAction</Button>
            </>
        );

        const smallButton = screen.getByRole('button', { name: /sm/i });
        const mediumButton = screen.getByRole('button', { name: /md/i });
        const iconButton = screen.getByRole('button', { name: /icon/i });
        const iconRounded = screen.getByRole('button', { name: /rounded/i });
        const iconquickAction = screen.getByRole('button', {
            name: /quickAction/i
        });

        expect(smallButton).toHaveClass(
            'gap-[6px] h-[34px] p-[8px] text-[14px]'
        );
        expect(mediumButton).toHaveClass(
            'gap-[8px] h-[48px] p-[12px] text-[16px]'
        );
        expect(iconButton).toHaveClass('h-[48px] w-[48px]');
        expect(iconRounded).toHaveClass('h-[48px] w-[48px] rounded-full');
        expect(iconquickAction).toHaveClass(
            'gap-[8px] font-bold h-[102px] w-[126px] flex justify-center items-center flex-col'
        );
    });

    test('renders Button with asChild prop', () => {
        render(
            <Button asChild>
                <a href="#">Link Button</a>
            </Button>
        );

        const linkButton = screen.getByRole('link', { name: /link button/i });
        expect(linkButton).toBeInTheDocument();
        expect(linkButton).toHaveClass(
            'inline-flex items-center justify-center whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 fill-white disabled:fill-secondary-500 bg-primary text-white hover:bg-primary-500 active:bg-primary-700 font-semibold border-0 focus:border-[2px] focus:border-secondary-400 disabled:bg-secondary-200 disabled:text-secondary-600 gap-[8px] h-[48px] p-[12px] text-[16px]'
        );
    });

    test('renders disabled Button', () => {
        render(<Button disabled>Disabled Button</Button>);

        const button = screen.getByRole('button', { name: /disabled button/i });
        expect(button).toBeDisabled();
        expect(button).toHaveClass(
            'disabled:pointer-events-none disabled:opacity-50'
        );
    });
});
