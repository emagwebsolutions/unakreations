'use client';

import useGetQuery from '@/axios/useGetQuery';
import Universal from '@/components/Universal';
import Header from '@/components/blog/pages/Header';
import Otherservices from '@/components/blog/pages/Otherservices';
import Recentposts from '@/components/blog/pages/Recentposts';

const Grafix = () => {
  type GD = {
    title: string;
    img: string;
    excerpt: string;
    slug: string;
  }[];

  const { data } = useGetQuery('grafix', '/grafix');
  const getData: GD = data?.data || [];

  const singlepost = getData.slice(0, 1);
  const otherposts = getData;

  return (
    <Universal>
      <Header singlepost={singlepost} otherposts={otherposts} page="grafix" />

      <div className="post-wrapper">
        <div>
          <Otherservices />
        </div>
        <div>
          <Recentposts />
        </div>
      </div>
    </Universal>
  );
};

export default Grafix;
