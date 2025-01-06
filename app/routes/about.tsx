import { createRoute } from '@tanstack/react-router';
import { getParentRoute } from './__root';

const component = () => (
  <div className='p-2'>
    <h3>Hello from About!</h3>
  </div>
);

export const aboutRoute = createRoute({
  getParentRoute,
  path: '/about',
  component,
});
