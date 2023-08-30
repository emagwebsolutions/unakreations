import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { useEffect, useState } from 'react';
import { useServicesQuery } from '@/store/features/fetchData';

const Sectiontwo = () => {
  type SEV = {
    title: string;
    img: string;
    slug: string;
    body: any;
  }[];
  const [getData, setData] = useState<SEV>([]);
  
  const { data } = useServicesQuery('',{skip: false});
  const [getSkip,setSkip] = useState(true)


  useEffect(() => {
    if (data) {
      setData(data);
    }
  }, [data]);

  const arr = getData.filter((v) => {
    return (
      v.slug === 'klodin' ||
      v.slug === 'graphicsdesign' ||
      v.slug === 'tshirtprinting' ||
      v.slug === 'branding'
    );
  });

  const ourserv = getData.filter((v) => v.slug === 'serv');

  return (
    <section className="sec2 unaklodin">
      <div className="container">
        <div>
          <div>
            <h1>{ourserv[0]?.title}</h1>
            <div className="divider"></div>
            <div>
              <PortableText value={ourserv[0]?.body} />
            </div>
            <br />
          </div>
        </div>
      </div>

      <div className="container flex gap-2">
        {arr.map((v, k) => (
          <div key={k} className="unaklodinimg">
            <Image width="500" height="150" src={v.img} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sectiontwo;
