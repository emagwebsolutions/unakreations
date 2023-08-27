import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Pageheadertwo = () => {
  const path = usePathname();

 const title = path.split('/')[1]

  return (
    <div className="pageheader">
      <div className="container">
        <div>
          <h1>{title? title.toUpperCase() : path.toUpperCase()}</h1>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Pageheadertwo;
