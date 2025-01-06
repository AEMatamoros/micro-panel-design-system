import React from 'react';

import { render, screen } from '@testing-library/react';

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious
} from '../ui/pagination';

describe('Pagination Component', () => {
    test('renders Pagination component correctly', () => {
        render(
            <Pagination>
                <PaginationContent>
                    <PaginationPrevious>Previous</PaginationPrevious>
                    <PaginationItem>
                        <PaginationLink isActive>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink>2</PaginationLink>
                    </PaginationItem>
                    <PaginationEllipsis />
                    <PaginationNext>Next</PaginationNext>
                </PaginationContent>
            </Pagination>
        );

        expect(screen.getByLabelText('pagination')).toBeInTheDocument();
        expect(
            screen.getByLabelText('Go to previous page')
        ).toBeInTheDocument();
        expect(screen.getByText('1')).toHaveAttribute('aria-current', 'page');
        expect(screen.getByLabelText('Go to next page')).toBeInTheDocument();
    });

    test('renders active and inactive pagination links', () => {
        render(
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationLink isActive>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink>2</PaginationLink>
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        );

        expect(screen.getByText('1')).toHaveAttribute('aria-current', 'page');
        expect(screen.getByText('2')).not.toHaveAttribute('aria-current');
    });

    test('renders next and previous buttons', () => {
        render(
            <Pagination>
                <PaginationContent>
                    <PaginationPrevious>Previous</PaginationPrevious>
                    <PaginationNext>Next</PaginationNext>
                </PaginationContent>
            </Pagination>
        );

        expect(
            screen.getByLabelText('Go to previous page')
        ).toBeInTheDocument();
        expect(screen.getByLabelText('Go to next page')).toBeInTheDocument();
    });
});
