import { visiteditemsList } from '@/store/features/visited';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Visiteditems = () => {
  const data = useSelector(visiteditemsList);

  type DT = {
    title: string;
    img: string;
    price: string;
    slug: string;
  }[];
  const [getState, setState] = useState([] as DT);

  useEffect(() => {
    if (data) {
      setState(data);
    }
  }, [data]);

  return (
    <div className="visiteditemsbx">
      <h4>Your recently viewed products</h4>

      <div>
        {Object.values(getState).map((v, k) => {
          return (
            <div key={k}>
              <Link href={`/klodin/${v.slug}`}>
                <div
                  style={{
                    backgroundImage: `url(${v.img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top',
                  }}
                ></div>
                <p>
                  {v.title} GHs {v.price}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Visiteditems;
