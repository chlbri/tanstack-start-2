import { createRouter as createTanStackRouter } from '@tanstack/react-router';
import { rootRoute } from './routes/__root';
import { aboutRoute } from './routes/about';
import { indexRoute } from './routes/index';
import { otherRoute } from './routes/other';

export function createRouter() {
  const routeTree = rootRoute.addChildren([
    indexRoute,
    aboutRoute,
    otherRoute,
  ]);

  const router = createTanStackRouter({
    routeTree,
  });

  return router;
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof createRouter>;
  }
}
