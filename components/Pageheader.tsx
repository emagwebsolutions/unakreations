import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Pageheader = () => {
  const path = usePathname();

  const title =
    path === '/team'
      ? 'Our Team'
      : path === '/testimonials'
      ? 'Testimonials'
      : path === '/overview'
      ? 'Overview'
      : '';

  return (
    <div className="pageheader">
      <div className="container">
        <div>
          <h1>{title}</h1>
        </div>

        <div>
          <Link href="/team" className={path === '/team' ? 'active' : ''}>
            Our Team
          </Link>
          &nbsp;&nbsp; | &nbsp;&nbsp;
          <Link
            href="/testimonials"
            className={path === '/testimonials' ? 'active' : ''}
          >
            Testimonials
          </Link>
          &nbsp;&nbsp; | &nbsp;&nbsp;
          <Link
            href="/overview"
            className={path === '/overview' ? 'active' : ''}
          >
            Overview
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pageheader;
