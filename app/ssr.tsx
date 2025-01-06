// app/ssr.tsx
/// <reference types="vinxi/types/server" />
import {
  createStartHandler,
  defaultStreamHandler,
} from '@tanstack/start/server';

import { createRouter } from './router';

export default createStartHandler({
  createRouter,
  getRouterManifest: () => ({
    routes: {
      __root__: {
        filePath: '__root.tsx',
        children: ['/', '/about', '/other'],
      },
      '/': {
        filePath: 'index.tsx',
      },

      '/about': {
        filePath: 'about.tsx',
      },
      '/other': {
        filePath: 'other.tsx',
      },
    },
  }),
})(defaultStreamHandler);
