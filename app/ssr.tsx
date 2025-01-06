// app/ssr.tsx
/// <reference types="vinxi/types/server" />
import { getRouterManifest } from '@tanstack/start/router-manifest';
import {
  createStartHandler,
  defaultStreamHandler,
} from '@tanstack/start/server';

import { createRouter } from './router';
getRouterManifest;

export default createStartHandler({
  createRouter,
})(defaultStreamHandler);
