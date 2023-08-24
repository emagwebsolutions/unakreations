import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Image from 'next/image';


const Slider = () => {


  const images = [
    {
      url: '/1.jpg',
    },
    {
      url: '/2.jpg',
    },
    {
      url: '/3.jpg',
    },
  ];



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
