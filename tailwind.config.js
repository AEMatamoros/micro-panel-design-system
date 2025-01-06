/** @type {import('tailwindcss').Config} */
import tailwindBaseConfig from './tailwind.base.config';
module.exports = {
    ...tailwindBaseConfig,
    prefix: '',
    darkMode: ['class'],
    content: [...(tailwindBaseConfig?.content || [])],
    plugins: [require('tailwindcss-animate')]
};
