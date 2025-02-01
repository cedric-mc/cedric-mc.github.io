import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'), // Alias '@' pour le répertoire src
			'@components': path.resolve(__dirname, 'src/components'), // Alias '@components' pour le répertoire src/components
			'@pages': path.resolve(__dirname, 'src/pages'), // Alias '@pages' pour le répertoire src/pages
			'@styles': path.resolve(__dirname, 'src/styles'), // Alias '@styles' pour le répertoire src/styles
			'@assets': path.resolve(__dirname, 'src/assets'), // Alias '@assets' pour le répertoire src/assets
		},
	},
});
