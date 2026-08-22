import { execSync } from 'node:child_process';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// Date of the last commit, shown as "last updated" in the footer.
// Falls back to build time when git is unavailable (e.g. a build from a tarball).
const lastUpdated = (() => {
  try {
    return execSync('git log -1 --format=%cI', { encoding: 'utf8' }).trim();
  } catch {
    return new Date().toISOString();
  }
})();

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    __LAST_UPDATED__: JSON.stringify(lastUpdated),
  },
  plugins: [
    svgr({
      svgrOptions: {
        icon: true,
      },
    }),
    react(),
  ],
  resolve: {
    alias: {
      src: '/src',
    },
  },
});
