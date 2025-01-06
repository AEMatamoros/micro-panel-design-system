import React from 'react';

import { createRoot } from 'react-dom/client';

import './index.css';
import NextThemesProvider from '@/components/theme/ThemeProvider.tsx';

const theme = import.meta.env.VITE_APP_THEME;

createRoot(document.getElementById('root')!).render(
    <NextThemesProvider
        attribute="class"
        disableTransitionOnChange
        defaultTheme={theme || 'default-theme'}
        themes={['default-theme']}
    >
        <h1 className="bg-primary">App Works Fine!</h1>
    </NextThemesProvider>
);
