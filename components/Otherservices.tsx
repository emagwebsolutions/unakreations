import React from 'react';
import Brands from './Brands';

type BD = {
  brandsdata: { img: string; title: string }[];
};

const brandsdata = [
  {
    img: '/branding.jpeg',
    title: 'Branding',
  },
  {
    img: '/businesscards.jpg',
    title: 'Business cards',
  },
  {
    img: '/billbioard.jpg',
    title: 'Billboards',
  },
  {
    img: '/graphics.jpg',
    title: 'Graphics Design',
  },
];

const Otherservices = () => {
  const brandsdata = [
    {
      img: '/branding.jpeg',
      title: 'Branding',
    },
    {
      img: '/businesscards.jpg',
      title: 'Business cards',
    },
    {
      img: '/billbioard.jpg',
      title: 'Billboards',
    },
    {
      img: '/graphics.jpg',
      title: 'Graphics Design',
    },
  ];

  return (
    <div className="home-flex gap-2 otherservices justify-center">
      {brandsdata.map((v, k) => (
        <Brands key={k} img={v.img} title={v.title} />
      ))}
    </div>
  );
};

export default Otherservices;
