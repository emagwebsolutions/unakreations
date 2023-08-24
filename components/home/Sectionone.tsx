import Link from 'next/link';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';

const Sectionone = () => {
  return (
    <section>
      <div className="container flex">
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

      <div className="container flex gap-2">
        <div>
          <div className="flex gap-2">
            <div className="brands">
              <picture>
                <Image width="500" height="200" src="/branding.jpeg" alt="" />
              </picture>
              <h4>Branding</h4>
            </div>

            <div className="brands">
              <picture>
                <Image width="500" height="200" src="/billbioard.jpg" alt="" />
              </picture>
              <h4>Billboards</h4>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="brands">
              <picture>
                <Image width="500" height="200" src="/businesscards.jpg" alt="" />
              </picture>
              <h4>Business cards</h4>
            </div>

            <div className="brands">
              <picture>
                <Image width="500" height="200" src="/graphics.jpg" alt="" />
              </picture>
              <h4>Graphics Design</h4>
            </div>
          </div>
        </div>

        <div>
          <div className="big-ser-img">
            <Image width="1000" height="500" src="/signage.jpg" alt="" />
          </div>

          <div className="serv-btns">
            <div>
              <Link href="/portfolio">
                <i className="fa fa-pencil fa-lg"></i> PORTFOLIO
              </Link>
            </div>
            <div>
              <Link href="/services">
                <i className="fa fa-gear fa-lg"></i>SERVICES
              </Link>
            </div>
          </div>
          <div className="serv-btns">
            <div>
              <Link href="/quote">
                <i className="fa fa-book fa-lg"></i>GET QUOTE
              </Link>
            </div>

            <div>
              <Link href="/contact">
                <i className="fa fa-envelope fa-lg"></i> CONTACT US
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sectionone;
