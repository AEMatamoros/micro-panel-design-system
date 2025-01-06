import React from 'react';

import { render, screen } from '@testing-library/react';

import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/tabs';

describe('Tabs Component', () => {
    test('renders Tabs component correctly', () => {
        render(
            <Tabs defaultValue="tab1">
                <TabsList>
                    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1">Content 1</TabsContent>
                <TabsContent value="tab2">Content 2</TabsContent>
            </Tabs>
        );
        expect(screen.getByText('Tab 1')).toBeInTheDocument();
        expect(screen.getByText('Tab 2')).toBeInTheDocument();
        expect(screen.getByText('Content 1')).toBeInTheDocument();
        expect(screen.queryByText('Content 2')).not.toBeInTheDocument();
    });
});
