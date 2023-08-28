import Image from 'next/image';
import { PortableText, PortableTextBlockComponent } from '@portabletext/react';
import { useEffect, useState } from 'react';
import { useTestimonialsQuery } from '@/store/features/fetchData';


type LS = {
  _id: string;
  _createdAt: Date;
  title: string;
  body: any;
  img: string
}[]

const Sectionthree = () => {
  const [getData, setData] = useState<LS>([]);
  const { data } = useTestimonialsQuery('');

  useEffect(() => {
    if (data) {
      setData(data);
    }
  }, [data]);



  return (
    <section className="sec3 testimonials">
      <h1>Testimonials</h1>
      <div className="divider"></div>

      <div className="container blog-flex justify-center gap-2">
        {getData.map((v, k) => (


          <div className="testm-row" key={k}>
            <div className="img-test">
              <Image width="170" height="140" src={v.img} alt="" />
            </div>
            <h4>{v.title}</h4>
            <div className="quote">
              <i className="fa fa-quote-left"></i>
              <div>
              <PortableText value={v.body} />
              </div>
              <i className="fa fa-quote-right"></i>
            </div>
          </div>

          
        ))}
      </div>
    </section>
  );
};

export default Sectionthree;
