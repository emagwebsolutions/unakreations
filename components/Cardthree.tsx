import Image from 'next/image';
import Link from 'next/link';

type CH = {
  img: string;
  link: string;
  children: React.ReactNode;
};

const Cardthree = ({ img, link, children }: CH) => {
  return (
    <div className="cardthree">
      <Link href={link}>
        <Image src={img} width={500} height={200} alt="" />
      </Link>
      <div>{children}</div>
    </div>
  );
};

export default Cardthree;
