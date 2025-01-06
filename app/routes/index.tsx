import { createRoute } from '@tanstack/react-router';
import { getParentRoute } from './__root';

const component = () => (
  <div className='p-2'>
    <h3>Welcome Home!</h3>
  </div>
);

export const indexRoute = createRoute({
  getParentRoute,
  path: '/',
  component,
});
