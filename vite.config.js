import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'build.js'),
      name: 'color-picker',
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      // Consumers bring lit + lit-movable (peers). modern-color is a dependency.
      // ESM-only: UMD + peers needs awkward lit subpath globals and isn't useful here.
      external: [/^lit(\/|$)/, 'lit-movable', 'modern-color'],
    },
  },
});
