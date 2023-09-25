'use client';

import useGetQuery from '@/axios/useGetQuery';
import Universal from '@/components/Universal';
import Header from '@/components/blog/pages/Header';
import Otherservices from '@/components/blog/pages/Otherservices';
import Recentposts from '@/components/blog/pages/Recentposts';

const Administrative = () => {
  type GD = {
    title: string;
    img: string;
    excerpt: string;
    slug: string;
  }[];

  const { data } = useGetQuery('administrative', '/administrative');
  const getData: GD = data?.data || [];

  const singlepost = getData.slice(0, 1);
  const otherposts = getData;

  return (
    <Universal>
      <Header singlepost={singlepost} otherposts={otherposts} page="administrative" />

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

export default Administrative;
