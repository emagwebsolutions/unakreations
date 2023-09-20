'use client';
import Cardtwo from '@/components/Cardtwo';
import Universal from '@/components/Universal';
import Pageheader from '@/components/Pageheader';
import useGetQuery from '@/axios/useGetQuery';

export default function Testimonials() {
  type TEST = {
    title: String;
    img: string;
    slug: string;
    body: any;
  };

  const { data } = useGetQuery('testimonials', '/testimonials');
  const getData: TEST = data?.data;

  return (
    <Universal>
      <Pageheader />
      <section className="testimonials">
        <Cardtwo img="/graphics.jpg">
          <div>
            I would like to thank you for the website design and development
            work you did for Hisel. With very little direction from us you were
            able to design the ballet placemat which is one of our most popular
            and profitable items.
          </div>

          <div>
            Michale Wang CEO - HiSEL Power Corportaion www.hiselpower.com
          </div>
        </Cardtwo>

        <Cardtwo img="/graphics.jpg">
          <div>
            I would like to thank you for the website design and development
            work you did for Hisel. With very little direction from us you were
            able to design the ballet placemat which is one of our most popular
            and profitable items.
          </div>

          <div>
            Michale Wang CEO - HiSEL Power Corportaion www.hiselpower.com
          </div>
        </Cardtwo>

        <Cardtwo img="/graphics.jpg">
          <div>
            I would like to thank you for the website design and development
            work you did for Hisel. With very little direction from us you were
            able to design the ballet placemat which is one of our most popular
            and profitable items.
          </div>

          <div>
            Michale Wang CEO - HiSEL Power Corportaion www.hiselpower.com
          </div>
        </Cardtwo>

        <Cardtwo img="/graphics.jpg">
          <div>
            I would like to thank you for the website design and development
            work you did for Hisel. With very little direction from us you were
            able to design the ballet placemat which is one of our most popular
            and profitable items.
          </div>

          <div>
            Michale Wang CEO - HiSEL Power Corportaion www.hiselpower.com
          </div>
        </Cardtwo>
      </section>
    </Universal>
  );
}
