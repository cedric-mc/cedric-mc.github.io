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
			'@sections': path.resolve(__dirname, 'src/sections'), // Alias '@sections' pour le répertoire src/sections
			'@styles': path.resolve(__dirname, 'src/styles'), // Alias '@styles' pour le répertoire src/styles
			'@assets': path.resolve(__dirname, 'src/assets'), // Alias '@assets' pour le répertoire src/assets
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				silenceDeprecations: [
					'import',
					'mixed-decls',
					'color-functions',
					'global-builtin',
				],
			},
		},
	},
});
