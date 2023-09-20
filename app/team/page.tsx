'use client';

import Card from '@/components/Card';
import Universal from '@/components/Universal';
import Pageheader from '@/components/Pageheader';
import { PortableText } from '@portabletext/react';
import useGetQuery from '@/axios/useGetQuery';

export default function Team() {
  type TM = {
    title: string;
    img: string;
    slug: string;
    body: any;
  }[];

  const { data } = useGetQuery('ourteam', '/ourteam');
  const getData: TM = data?.data || [];

  const topinfo = getData.filter((v) => v.slug === 'topinfo');
  const bottominfo = getData.filter((v) => v.slug === 'bottominfo');

  const team = getData
    .filter((v) => v.slug !== 'bottominfo' && v.slug !== 'topinfo')
    .map((vl, ky) => (
      <Card key={ky} img={vl.img}>
        <h4>{vl.title}</h4>
        <div>
          <PortableText value={vl.body} />
        </div>
      </Card>
    ));

  return (
    <Universal>
      <Pageheader />
      <section className="team">
        <div>
          <div className="container">
            <h2>{topinfo[0]?.title}</h2>
            <div>
              <PortableText value={topinfo[0]?.body} />
            </div>
          </div>
        </div>

        <div className="container blog-flex card-gap justify-center">
          {team}
        </div>

        <div>
          <h2>{bottominfo[0]?.title}</h2>
          <div>
            <PortableText value={bottominfo[0]?.body} />
          </div>
        </div>
      </section>
    </Universal>
  );
}
