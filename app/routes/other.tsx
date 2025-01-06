import { createRoute } from '@tanstack/react-router';
import { getParentRoute } from './__root';

export const otherRoute = createRoute({
  component,
  path: '/other',
  getParentRoute,
});

function component() {
  return (
    <div className='p-2'>
      <h3>Other</h3>
    </div>
  );
}
