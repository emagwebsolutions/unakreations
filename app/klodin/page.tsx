'use client';

import Headerimage from '@/components/Headerimage';
import Otherservices from '@/components/Otherservices';
import Pageheadertwo from '@/components/Pageheadertwo';
import Pagepara from '@/components/Pagepara';
import Postlist from '@/components/Postlist';
import Universal from '@/components/Universal';
import { useKlodinQuery } from '@/store/features/fetchData';
import { PortableText } from '@portabletext/react';
import { useState, useEffect } from 'react';

const Klodin = () => {
  type GD = {
    title: string;
    body: any;
    img: string;
    slug: string;
  }[];

  const [getData, setData] = useState<GD>([]);
  const { data } = useKlodinQuery('');

  useEffect(() => {
    if (data) {
      setData(data);
    }
  }, [data]);

  const header = getData.filter((v) => v.slug === 'header');

  const para = getData.filter((v) => v.slug === 'paragraph');

  const list = getData.filter(
    (v) => v.slug !== 'header' && v.slug !== 'paragraph'
  );

  return (
    <Universal>
      <Pageheadertwo />
      <Headerimage
        img={header[0]?.img}
        para={<PortableText value={header[0]?.body} />}
      />
      <Pagepara para={<PortableText value={para[0]?.body} />} />
      <Postlist data={list} page="klodin" />
      <Otherservices />
    </Universal>
  );
};

export default Klodin;
