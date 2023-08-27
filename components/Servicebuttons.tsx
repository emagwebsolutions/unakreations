import Link from 'next/link';

type SB = {
  url: string;
  fa: string;
  name: string;
};

const Servicebuttons = ({ url, fa, name }: SB) => {
  return (
    <div className="servbtn">
      <Link href={url}>
        <i className={`fa fa-${fa} fa-lg`}></i> {name}
      </Link>
    </div>
  );
};

export default Servicebuttons;
