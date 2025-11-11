import Image from 'next/image';
import React from 'react';

type BR = {
  img: string;
  title: string;
};

const Brands = ({ img, title }: BR) => {

  const imgs = img ?   <Image width="500" height="200" src={img} alt="" /> : ''
  return (
    <div className="brands">
      <picture>
      {imgs}
      </picture>
      <h4>{title}</h4>
    </div>
  );
};

export default Brands;
