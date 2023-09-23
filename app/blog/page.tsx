'use client';

import useGetQuery from '@/axios/useGetQuery';
import Universal from '@/components/Universal';
import Blogs from '@/components/blog/Blogs';

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

const Blog = () => {
  const { data } = useGetQuery('blog', '/blog');
  const getData: TM = data?.data || [];


  return <Universal><Blogs  data={getData} /></Universal>;
};

export default Blog;
