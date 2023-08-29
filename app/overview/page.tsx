'use client';

import Card from '@/components/Card';
import Universal from '@/components/Universal';
import Pageheader from '@/components/Pageheader';
import Icons from '@/components/Icons';
import Sectionthree from '@/components/home/Sectionthree';
import { useEffect, useState } from 'react';
import { useOverviewQuery } from '@/store/features/fetchData';
import { PortableText } from '@portabletext/react';

export default function Overview() {
  type ST = {
    title: string;
    slug: string;
    body: any;
  }[];

  const [getData, setData] = useState<ST>([]);
  const { data } = useOverviewQuery('');

  useEffect(() => {
    if (data) {
      setData(data);
    }
  }, [data]);

  const vision = getData.filter((v) => v.slug === 'vision');
  const mission = getData.filter((v) => v.slug === 'mission');
  const icons = getData
    .filter((v) => v.slug !== 'mission' && v.slug !== 'vision')
    .map((vl, ky) => <Icons key={ky} fa={vl.slug} title={vl.title} />);

  return (
    <Universal>
      <Pageheader />
      <section className="overview">
        <div>
          <div className="container">
            <div>
              <h2>{vision[0]?.title}</h2>
              <div>
                <PortableText value={vision[0]?.body} />
              </div>
            </div>
            <div>
              <h2>{mission[0]?.title}</h2>
              <div >
                <PortableText value={mission[0]?.body} />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="container">
            <h2>Why choose UNA KREATIONS?</h2>
            <div className="home-flex">{icons}</div>
          </div>
        </div>

        <Sectionthree />
      </section>
    </Universal>
  );
}
