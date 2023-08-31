import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { useEffect, useState } from 'react';


const Sectiontwo = () => {
  type SEV = {
    title: string;
    img: string;
    slug: string;
    body: any;
  }[];
  const [getData, setData] = useState<SEV>([]);


  useEffect(() => {
    fetch(`/api/services`)
      .then((resp) => resp.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  console.log(getData)

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
