'use client';
import Otherservices from '@/components/Otherservices';
import Pageheadertwo from '@/components/Pageheadertwo';
import Universal from '@/components/Universal';

type PR = {
  params: {
    slug: string;
  };
};
const Post = ({ params: { slug } }: PR) => {
  return (
    <Universal>
      <Pageheadertwo />
      <div className="container">
        <div className="postcontent">{slug}</div>
      </div>
      <Otherservices />
    </Universal>
  );
};

export default Post;
