import React from 'react';

type HIM = {
  img: string;
  para?: string | React.ReactNode;
};

const Headerimage = ({ img, para }: HIM) => {
  return (
    <div
      className="headerimage"
      style={{
        backgroundImage: `url(/${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundAttachment: 'fixed',
        height: '40rem',
        position: 'relative',
        padding: '5rem',
      }}
    >
      <div className="container">{para ? <div>{para}</div> : ''}</div>
    </div>
  );
};

export default Headerimage;
