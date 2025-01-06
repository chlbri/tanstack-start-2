import { createRoute } from '@tanstack/react-router';
import { Counter } from '../components/Counter';
import { getParentRoute } from './__root';

const component = () => {
  return (
    <div className='p-2'>
      <h3>Other</h3>
      <Counter />
    </div>
  );
};

export const otherRoute = createRoute({
  component,
  path: '/other',
  getParentRoute,
});
