'use client';

import Universal from '@/components/Universal';
import Instagram from '@/components/blog/Instagram';
import Multiimages from '@/components/blog/Multiimages';
import Singleimage from '@/components/blog/Singleimage';
import Singleimagetwo from '@/components/blog/Singleimagetwo';
import Videocomponent from '@/components/blog/Videocomponent';

const Blog = () => {
  return (
    <Universal>
      <Videocomponent url="https://www.youtube.com/watch?v=7a34tgFDonI">
        THIS IS A VIDEOS BOX
      </Videocomponent>

      <Multiimages data={[]} />

      <Singleimage className="singleimage blue" />

      <Instagram url="http://www.instagram.com" />

      <Videocomponent url="https://www.youtube.com/watch?v=ZsH1_xMwQrI">
        THIS IS A VIDEOS BOX
      </Videocomponent>
      <Singleimagetwo className="singleimage pink" />
      <Multiimages data={[]} />
      <Instagram url="http://www.instagram.com" />
    </Universal>
  );
};

export default Blog;
