import Link from 'next/link';

type DT = {
  data: {
    img: string;
    title: string;
    slug: string;
  }[];
};

const Multiimages = ({ data }: DT) => {
  if (!data) return null;
  const arr = data || [];

  if (data) {
    return (
      <div className="multiimage">
        {arr.map((v, k) => (
          <div
            key={k}
            style={{
              backgroundImage: `url(${v.img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <h2>
              <Link href={`blog/${v.slug}`}>{v.title.toUpperCase()}</Link>
            </h2>
          </div>
        ))}
      </div>
    );
  } else {
    return null;
  }
};

export default Multiimages;
