import Link from 'next/link';

type OT = {
  title: string;
  data: {
    title: string;
    excerpt: string;
    img: string;
    slug: string;
  }[];
  page: string;
};

const Other = ({ title, page, data }: OT) => {
  return (
    <div>
      <div></div>
      <div>{title}</div>

      <div>
        {data.map((v, k) => {
          return (
            <div key={k}>
              <div
                style={{
                  backgroundImage: `url(${v.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              <div>
                <h3>
                  <Link href={`/${page}/${v.slug}`}>{v.title}</Link>
                </h3>
                <div>{v.excerpt}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Other;
