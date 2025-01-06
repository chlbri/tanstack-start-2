import {
  createStartHandler,
  defaultStreamHandler,
} from '@tanstack/start/server';

import { createRouter } from './router';

const handler = createStartHandler({
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
});

const routing = handler(defaultStreamHandler);

export default routing;
