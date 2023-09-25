'use client';

import useGetQuery from '@/axios/useGetQuery';
import Universal from '@/components/Universal';
import Header from '@/components/blog/pages/Header';
import Other from '@/components/blog/pages/Other';
import Recentposts from '@/components/blog/pages/Recentposts';

const Klodin = () => {
  type GD = {
    title: string;
    img: string;
    excerpt: string;
    slug: string;
  }[];

  const { data } = useGetQuery('klodin', '/klodin');
  const getData: GD = data?.data || [];


  
  const { data: Grafix } = useGetQuery('grafix', '/grafix');
  const grafix: GD = Grafix?.data || [];

  const { data: Advertising } = useGetQuery('advertising', '/advertising');
  const advertising: GD = Advertising?.data || [];

  const { data: Printing } = useGetQuery('printing', '/printing');
  const printing: GD = Printing?.data || [];

  const { data: Administrative } = useGetQuery('grafix', '/grafix');
  const administrative: GD = Administrative?.data || [];

  const { data: Training } = useGetQuery('training', '/training');
  const training: GD = Training?.data || [];
  





  const singlepost = getData.slice(0, 1);
  const otherposts = getData;

  return (
    <Universal>
      <Header singlepost={singlepost} otherposts={otherposts} page="klodin" />

      <div className="post-wrapper">
        <div>
          { grafix ? <Other title="U & A Grafix" page="trafix" data={grafix} /> : '' }
          { advertising ? <Other title="Advertising" page="trafix" data={advertising} /> : '' }
           { printing ? <Other title="Printing" page="trafix" data={printing} /> : '' }
           { training ? <Other title="Training" page="training" data={training} /> : '' }
           { administrative ? <Other title="Administrative Services" page="administrative" data={administrative} /> : '' }

        </div>
        <div>
          <Recentposts page="klodin" />
        </div>
      </div>
    </Universal>
  );
};

export default Klodin;
