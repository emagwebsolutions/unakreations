'use client';

import useGetQuery from '@/axios/useGetQuery';
import Universal from '@/components/Universal';
import Otherservices from '@/components/blog/pages/Otherservices';
import Recentposts from '@/components/blog/pages/Recentposts';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { useParams } from 'next/navigation';



type GD = {
  title: string;
  img: string;
  excerpt: string;
  slug: string;
  body: any
}[];

const Post = () => {
  const { data } = useGetQuery('printing', '/printing');
  const printing: GD = data?.data || [];

     const {slug} = useParams();

  const res = printing.filter((v) => v.slug === slug)[0]


  return (
    <Universal>
      <div className="singlepost">
        <div className="container">
          <div>


<div>
<h1>{res?.title}</h1>
<br />
<Image src={res?.img} alt="" width={2000} height={500} />

<br />

<div>
  <PortableText value={res?.body} />
</div>


</div>


            <Otherservices />
          </div>

          <div>
            <Recentposts />
          </div>
        </div>
      </div>
    </Universal>
  );
};

export default Post;
