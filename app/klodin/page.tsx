'use client';

import useGetQuery from '@/axios/useGetQuery';
import Headerimage from '@/components/Headerimage';
import Otherservices from '@/components/Otherservices';
import Pageheadertwo from '@/components/Pageheadertwo';
import Pagepara from '@/components/Pagepara';
import Postlist from '@/components/Postlist';
import Universal from '@/components/Universal';
import Header from '@/components/blog/pages/Header';
import Recentposts from '@/components/blog/pages/Recentposts';
import { PortableText } from '@portabletext/react';

const Klodin = () => {
  type GD = {
    title: string;
    img: string;
    excerpt: string;
    slug: string;
  }[];

  const { data } = useGetQuery('klodin', '/klodin');
  const getData: GD = data?.data || [];

  const singlepost = getData.slice(0, 1);
  const otherposts = getData;

  return (
    <Universal>
      <Header singlepost={singlepost} otherposts={otherposts} page="klodin" />

      <div className="post-wrapper">
        <div>LEFT</div>
        <div>
          <Recentposts page="klodin" />
        </div>
      </div>
    </Universal>
  );
};

export default Klodin;
