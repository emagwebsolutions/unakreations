import Image from 'next/image';
import Link from 'next/link';

type CH = {
  page: string; 
  img: string;
  link: string;
  children: React.ReactNode;
};

const Cardthree = ({ page, img, link, children }: CH) => {
  return (
    <div className="cardthree">
      <Link href={`/${page}/${link}`}>
        <Image src={img} width={500} height={200} alt="" />
      </Link>
      <div>{children}</div>
    </div>
  );
};

export default Cardthree;
