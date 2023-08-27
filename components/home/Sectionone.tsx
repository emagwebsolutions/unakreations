import Link from 'next/link';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import Servicebuttons from '../Servicebuttons';
import Brands from '../Brands';

const Sectionone = () => {
  return (
    <section>
      <div className="container">
        <div className="sec1-caption">
          <div>
            <h1>About us</h1>
            <div className="divider"></div>

            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              aspernatur nihil nulla! Saepe inventore in sapiente vel quod,
              placeat aperiam tenetur soluta officiis rerum voluptas. Aperiam
              hic enim ipsa quis.
            </div>
            <br />
          </div>
        </div>
      </div>

      <div className="container home-flex gap-2">
        <div>
          <div className="home-flex gap-2">
            <Brands img="/branding.jpeg" title="Branding" />

            <Brands img="/billbioard.jpg" title="Billboards" />
          </div>
          <div className="home-flex gap-2">
            <Brands img="/businesscards.jpg" title="Business cards" />

            <Brands img="/graphics.jpg" title="Graphics Design" />
          </div>
        </div>

        <div>
          <div className="big-ser-img">
            <Image width="1000" height="500" src="/signage.jpg" alt="" />
          </div>

          <div className="home-flex gap-2">
            <Servicebuttons name="PORTFOLIO" url="/portfolio" fa="pencil" />
            <Servicebuttons name="SERVICES" url="/services" fa="gear" />
          </div>
          <div className="home-flex gap-2">
            <Servicebuttons name="GET QUOTE" url="/contact" fa="book" />
            <Servicebuttons name="CONTACT" url="/contact" fa="envelope" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sectionone;
