
import { useBrandingQuery } from '@/store/features/fetchData';
import Brands from './Brands';
import {useState,useEffect} from 'react'


const Otherservices = () => {

  type BRNDS = {
    title: string;
    img: string;
    slug: string;
  }[];


  const [getBrand, setBrand] = useState<BRNDS>([]);
  const { data: branding } = useBrandingQuery('');





  useEffect(() => {
    if (branding) {
      setBrand(branding);
    }
  }, [branding]);


  return (
    <div className="home-flex gap-2 otherservices justify-center">
      {getBrand.map((v, k) => (
        <Brands key={k} img={v.img} title={v.title} />
      )).slice(0,4)}
    </div>
  );
};

export default Otherservices;
