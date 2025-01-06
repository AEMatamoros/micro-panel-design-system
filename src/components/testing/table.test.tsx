import React from 'react';

import { render, screen } from '@testing-library/react';

import {
    Table,
    TableHeader,
    TableBody,
    TableFooter,
    TableHead,
    TableCell,
    TableRow,
    TableCaption
} from '../ui/table';

describe('Table Component', () => {
    test('renders Table component correctly', () => {
        render(<Table />);
        const tableElement = screen.getByRole('table');
        expect(tableElement).toBeInTheDocument();
    });

    test('renders TableHeader component correctly', () => {
        render(
            <Table>
                <TableHeader>
                    <tr>
                        <TableHead>Header 1</TableHead>
                        <TableHead>Header 2</TableHead>
                    </tr>
                </TableHeader>
            </Table>
        );
        const tableHeader = screen.getByRole('columnheader', {
            name: 'Header 1'
        });
        expect(tableHeader).toBeInTheDocument();
        expect(
            screen.getByRole('columnheader', { name: 'Header 2' })
        ).toBeInTheDocument();
    });

    test('renders TableBody component correctly', () => {
        render(
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell>Cell 1</TableCell>
                        <TableCell>Cell 2</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        );
        const cell1 = screen.getByText('Cell 1');
        expect(cell1).toBeInTheDocument();
        expect(screen.getByText('Cell 2')).toBeInTheDocument();
    });

    test('renders TableFooter component correctly', () => {
        render(
            <Table>
                <TableFooter>
                    <tr>
                        <TableCell>Footer 1</TableCell>
                        <TableCell>Footer 2</TableCell>
                    </tr>
                </TableFooter>
            </Table>
        );
        const footer1 = screen.getByText('Footer 1');
        expect(footer1).toBeInTheDocument();
        expect(screen.getByText('Footer 2')).toBeInTheDocument();
    });

    test('renders TableRow component correctly', () => {
        render(
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell>Row Cell 1</TableCell>
                        <TableCell>Row Cell 2</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        );
        const rowCell1 = screen.getByText('Row Cell 1');
        expect(rowCell1).toBeInTheDocument();
        expect(screen.getByText('Row Cell 2')).toBeInTheDocument();
    });

    test('renders TableHead component correctly', () => {
        render(
            <Table>
                <TableHeader>
                    <tr>
                        <TableHead>Header 1</TableHead>
                    </tr>
                </TableHeader>
            </Table>
        );
        const header1 = screen.getByText('Header 1');
        expect(header1).toBeInTheDocument();
    });

    test('renders TableCell component correctly', () => {
        render(
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell>Cell 1</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        );
        const cell1 = screen.getByText('Cell 1');
        expect(cell1).toBeInTheDocument();
    });

    test('renders TableCaption component correctly', () => {
        render(
            <Table>
                <TableCaption>Table Caption</TableCaption>
            </Table>
        );
        const caption = screen.getByText('Table Caption');
        expect(caption).toBeInTheDocument();
    });
});
