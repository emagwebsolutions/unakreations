import Link from 'next/link';

type UR = {
  url: string;
};

const Instagram = ({ url }: UR) => {
  return <Link className="iglink" href={url}>CLICK TO FOLLOW US ON IG</Link>;
};

export default Instagram;
