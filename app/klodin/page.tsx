'use client';

import useGetQuery from '@/axios/useGetQuery';
import Universal from '@/components/Universal';
import Link from 'next/link';

const Klodin = () => {
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
    <Universal>
      <div className="store">
        <div
          style={{
            backgroundImage: "url('/storebg.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className="store-header"
        ></div>

        <div>
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
          })}
        </div>
      </div>
    </Universal>
  );
};

export default Klodin;
