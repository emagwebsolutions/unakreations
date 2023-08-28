import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useSliderQuery } from '@/store/features/fetchData';

const Slider = () => {
  type GRC = {
    img: string;
  }[];

  const [getData, setData] = useState<GRC>([]);
  const { data } = useSliderQuery('');

  useEffect(() => {
    if (data) {
      setData(data);
    }
  }, [data]);

  const url = getData.map((v, k) => v.img);


  const images = [
    {
      url: url[0]
    },
    {
      url: url[1]
    },
    {
      url: url[2]
    },
  ]


  return (
    <div className="slide-container">
      <Slide>
        {images.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            <Image
              priority
              width={3000}
              height={400}
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
