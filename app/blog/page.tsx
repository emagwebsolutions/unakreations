'use client';

import useGetQuery from '@/axios/useGetQuery';
import Universal from '@/components/Universal';
import Entertainment from '@/components/blog/Entertainment';
import Lifestyle from '@/components/blog/Lifestyle';
import Music from '@/components/blog/Music';

type TM = {
  _createdAt: Date;
  ytvideolink: string;
  img: string;
  slug: string;
  cat: string;
  excerpt: string;
  body: any;
  title: string;
}[];

const Blog = () => {
  const { data } = useGetQuery('blog', '/blog');
  const getData: TM = data?.data || [];

  //LIFE STYLE
  const lifestyleone =
    getData.filter((v) => v.cat === 'Lifestyle').slice(0, 3) || [];
  const lifestyletwo =
    getData.filter((v) => v.cat === 'Lifestyle').slice(4, 6) || [];
  const lifestylethree =
    getData.filter((v) => v.cat === 'Lifestyle').slice(7, 9) || [];

  //ENTERTAIMNMENT
  const entertainmentone =
    getData.filter((v) => v.cat === 'Entertainment News').slice(0, 3) || [];
  const entertainmenttwo =
    getData.filter((v) => v.cat === 'Entertainment News').slice(4, 6) || [];
  const entertainmentthree =
    getData.filter((v) => v.cat === 'Entertainment News').slice(7, 9) || [];

  //MUSIC
  const musicone = getData.filter((v) => v.cat === 'Music').slice(0, 3) || [];
  const musictwo = getData.filter((v) => v.cat === 'Music').slice(4, 6) || [];
  const musicthree = getData.filter((v) => v.cat === 'Music').slice(7, 9) || [];

  return (
    <Universal>
      {/* MUSIC */}
      <Music data={musicone} />

      {/* Entertainment */}
      <Entertainment data={entertainmentone} />

      {/* Life Style */}
      <Lifestyle data={lifestyleone} />

      {/* MUSIC */}
      <Music data={musictwo} />

      {/* Entertainment */}
      <Entertainment data={entertainmenttwo} />

      {/* Life Style */}
      <Lifestyle data={lifestyletwo} />

      {/* MUSIC */}
      <Music data={musicthree} />

      {/* Entertainment */}
      <Entertainment data={entertainmentthree} />

      {/* Life Style */}
      <Lifestyle data={lifestylethree} />
    </Universal>
  );
};

export default Blog;
