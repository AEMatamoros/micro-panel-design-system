import * as React from 'react';

import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator
} from '../ui/breadcrumb';

describe('Breadcrumb Component', () => {
    test('renders Breadcrumb with correct aria-label', () => {
        render(
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="#">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Current Page</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        );

        const breadcrumb = screen.getByLabelText('breadcrumb');
        expect(breadcrumb).toBeInTheDocument();
    });

    test('renders BreadcrumbList with correct classes', () => {
        render(
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>
            </BreadcrumbList>
        );

        const breadcrumbList = screen.getByRole('list');
        expect(breadcrumbList).toHaveClass(
            'flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5'
        );
    });

    test('renders BreadcrumbLink with correct href', () => {
        render(<BreadcrumbLink href="#">Home</BreadcrumbLink>);

        const breadcrumbLink = screen.getByRole('link');
        expect(breadcrumbLink).toHaveAttribute('href', '#');
    });

    test('renders BreadcrumbPage with aria-current set to page', () => {
        render(<BreadcrumbPage>Current Page</BreadcrumbPage>);

        const breadcrumbPage = screen.getByText('Current Page');
        expect(breadcrumbPage).toHaveAttribute('aria-current', 'page');
    });
});
