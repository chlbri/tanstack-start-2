import { Link, type RouteComponent } from '@tanstack/react-router';
import '../index.css';

const Layout: RouteComponent = () => (
  <div className='p-2 flex space-x-2 text-lg'>
    <Link
      to='/'
      activeProps={{
        className: 'font-bold',
      }}
      activeOptions={{ exact: true }}
    >
      Home
    </Link>
    <Link
      to='/about'
      activeProps={{
        className: 'font-bold',
      }}
    >
      About
    </Link>
    <Link
      to='/other'
      activeProps={{
        className: 'font-bold',
      }}
    >
      Other
    </Link>
  </div>
);

export default Layout;
