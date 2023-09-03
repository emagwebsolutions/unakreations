import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Image from 'next/image';
import useGetQuery from '@/axios/useGetQuery';

const Slider = () => {
  type GRC = {
    img: string;
  }[];

  const { data } = useGetQuery('slider', '/slider');
  const arrs: GRC = data?.data || [];



  const url = arrs.map((v, k) => v.img);


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
