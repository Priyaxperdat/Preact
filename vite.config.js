import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import VitePluginStyleInject from 'vite-plugin-style-inject';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact(), VitePluginStyleInject()]
})
