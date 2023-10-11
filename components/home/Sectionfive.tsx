import useGetQuery from '@/axios/useGetQuery';
import Link from 'next/link';

const Sectionfive = () => {
  type GD = {
    title: string;
    img: string;
    slug: string;
    price: string;
    stockstatus: string;
  }[];

  const { data } = useGetQuery('klodin', '/klodin');
  const getData: GD = data?.data || [];

  return (
    <div className="shop">
      <div>
        <h1>Discover Our</h1>
        <h4>Best selling</h4>
        <div className="divider"></div>
      </div>

      <div className="container">
        {getData.map((v, k) => {
          if (v?.stockstatus === 'instock') {
            return (
              <div key={k} className="store-items">
                <Link href={`/klodin/${v?.slug}`}>
                  <div
                    style={{
                      backgroundImage: `url(${v?.img})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'top',
                    }}
                  ></div>
                  <div>
                    {v?.title} GHs: {v?.price}
                  </div>
                </Link>
              </div>
            );
          }
        }).slice(0,4)}
      </div>

      <div className="blog-btn">
        <Link href="/klodin">VIEW ALL</Link>
      </div>
    </div>
  );
};

export default Sectionfive;
