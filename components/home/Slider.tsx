import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Image from 'next/image';
import useGetQuery from '@/axios/useGetQuery';
import { useState, useEffect } from 'react';

const Slider = () => {
  type GRC = {
    img: string;
  }[];

  const { data } = useGetQuery('slider', '/slider');
  const arrs: GRC = data?.data || [];

  const url = arrs.map((v, k) => v.img);

  const images = [
    {
      url: url[0],
    },
    {
      url: url[1],
    },
    {
      url: url[2],
    },
  ];

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const SLIDER_WIDTH = `3000`;
  const SLIDER_HEIGHT = windowDimensions?.width < 500 ? '200' : '500';

  return (
    <div className="slide-container">
      <Slide>
        {images.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            <Image
              priority
              width={SLIDER_WIDTH}
              height={SLIDER_HEIGHT}
              className="slider"
              alt=""
              src={fadeImage.url}
            />
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slider;
