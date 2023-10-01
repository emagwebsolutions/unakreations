'use client';
import useGetQuery from '@/axios/useGetQuery';
import Universal from '@/components/Universal';
import Videocomponent from '@/components/blog/Videocomponent';
import Link from 'next/link';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import Video from '@/components/blog/Video';
import Otherservices from '@/components/blog/pages/Otherservices';
import Share from '@/components/Share';

type PR = {
  params: {
    slug: string;
  };
};

type TM = {
  _id: string;
  _createdAt: Date;
  ytvideolink: string;
  img: string;
  slug: string;
  cat: string;
  excerpt: string;
  body: any;
  title: string;
  arr: [];
}[];

const Post = ({ params: { slug } }: PR) => {
  const { data } = useGetQuery('blog', '/blog');
  const getData: TM = data?.data || [];

  const post = Object.values(getData).filter((v) => v.slug === slug)[0];
  const cat = post?.cat;
  const other = Object.values(getData).filter((v) => v.cat === cat);

  const header = post?.ytvideolink ? (
    <Videocomponent url={post?.ytvideolink} />
  ) : (
    <div className="postheader">
      <Image src={post?.img} alt="" width="2000" height="700" />
    </div>
  );

  return (
    <Universal>
      {header}
      <section className="post-sec1">
        <div className="container">
          <PortableText value={post?.body} />
        </div>
      </section>
      <section className="post-sec2 orange">
        <div className="container">
          {other
            .map((v, k) => {
              return (
                <div key={k}>
                  <div>
                    <Image src={v?.img} width={300} height={170} alt="" />
                  </div>
                  <div>
                    <h4>
                      <Link href={`/blog/${v?.slug}`}>{v?.title}</Link>
                    </h4>
                    {v?.excerpt.substring(0, 100)}
                  </div>
                </div>
              );
            })
            .slice(0, 4)}
        </div>
      </section>
      <section className="post-sec3">
        <div className="container">
          {other
            .map((v, k) => {
              return <Video key={k} url={v.ytvideolink} />;
            })
            .slice(0, 4)}

          <Share />
        </div>
      </section>
      <div className="container">
        <Otherservices />
      </div>
    </Universal>
  );
};

export default Post;
