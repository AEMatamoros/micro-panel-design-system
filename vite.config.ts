import typescript from '@rollup/plugin-typescript';

import react from '@vitejs/plugin-react-swc';

import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src', 'index.ts'),
            name: 'DesignSystem',
            formats: ['es', 'umd'],
            fileName: format => `db-design-system.${format}.js`
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM'
                }
            },
            plugins: [
                typescript({
                    tsconfig: './tsconfig.node.json',
                    declaration: true,
                    declarationDir: path.resolve(__dirname, 'dist'),
                    rootDir: path.resolve(__dirname, 'src')
                })
            ]
        }
    }
});
