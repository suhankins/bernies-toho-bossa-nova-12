import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    base: 'bernies-toho-bossa-nova-12',
    plugins: [react()],
});
