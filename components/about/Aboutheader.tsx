import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Aboutheader = () => {
  const path = usePathname();

  const title =
    path === '/team'
      ? 'Our Team'
      : path === '/testimonials'
      ? 'Testimonials'
      : '';

  const active =
    path === '/team' ? 'active' : path === '/testimonials' ? 'active' : '';

  return (
    <div className="aboutheader">
      <div className="container flex">
        <div>
          <h1>{title}</h1>
        </div>
        <div>
          <Link href="/team" className={path === '/team' ? 'active' : ''}>
            Our Team
          </Link>{' '}
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <Link
            href="/testimonials"
            className={path === '/testimonials' ? 'active' : ''}
          >
            Testimonials
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Aboutheader;
