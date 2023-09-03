import useGetQuery from '@/axios/useGetQuery';
import Brands from './Brands';
import { useState, useEffect } from 'react';

const Otherservices = () => {
  type POST = {
    title: string;
    img: string;
    slug: string;
  }[];

  const { data } = useGetQuery('branding', '/branding');

  const getBrand: POST = data?.data || [];

  return (
    <div className="home-flex gap-2 otherservices justify-center">
      {getBrand
        .map((v, k) => <Brands key={k} img={v.img} title={v.title} />)
        .slice(0, 4)}
    </div>
  );
};

export default Otherservices;
