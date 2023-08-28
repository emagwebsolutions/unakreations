'use client';

import Headerimage from '@/components/Headerimage';
import Otherservices from '@/components/Otherservices';
import Pageheadertwo from '@/components/Pageheadertwo';
import Pagepara from '@/components/Pagepara';
import Postlist from '@/components/Postlist';
import Universal from '@/components/Universal';
import { useBlogQuery } from '@/store/features/fetchData';
import { useState, useEffect } from 'react';

const Blog = () => {
  const [getData, setData] = useState('');
  const { data } = useBlogQuery('');

  useEffect(() => {
    if (data) {
      setData(data);
    }
  }, [data]);

  const para = (
    <div>
      <h1>Message Title</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nulla
        voluptate praesentium quibusdam aliquid. Aut, pariatur rem sed omnis vel
        laborum quidem distinctio consectetur est ratione molestias et nam
        aspernatur?
      </p>
    </div>
  );

  const datax = [
    {
      img: '/serv.jpeg',
      slug: 'service/serv',
      body: para,
    },
    {
      img: '/serv.jpeg',
      slug: 'service/card',
      body: para,
    },
    {
      img: '/serv.jpeg',
      slug: 'service/comp',
      body: para,
    },
    {
      img: '/serv.jpeg',
      slug: 'service/shirt',
      body: para,
    },
  ];

  return (
    <Universal>
      <Pageheadertwo />
      <Headerimage img="tshirt.jpeg" para={para} />
      <Pagepara para={para} />
      <Postlist data={datax} />
      <Otherservices />
    </Universal>
  );
};

export default Blog;
