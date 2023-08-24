import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';

const Sectionfour = () => {
  return (
    <section className="sec3 blogpostwrapper">
      <h1>Our Blog</h1>
      <div className="divider"></div>

      <div className="container gap-3">
        <div className="blog">
          <picture>
            <Image width="500" height="200" src="/serv.jpeg" alt="" />
          </picture>
          <div>
            <h3>Colour Theory</h3>
            <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusantium vero dolore perspiciatis porro ea praesentium nostrum
              earum aperiam. Error dicta voluptas vero animi velit id
              perspiciatis eius placeat ipsam cumque.
            </div>
            <div>
            
            </div>
          </div>
        </div>

        <div className="blog">
          <picture>
            <Image width="500" height="200" src="/serv.jpeg" alt="" />
          </picture>
          <div>
            <h3>Colour Theory</h3>
            <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusantium vero dolore perspiciatis porro ea praesentium nostrum
              earum aperiam. Error dicta voluptas vero animi velit id
              perspiciatis eius placeat ipsam cumque.
            </div>
            <div>
            
            </div>
          </div>
        </div>

        <div className="blog">
          <picture>
            <Image width="500" height="200" src="/serv.jpeg" alt="" />
          </picture>
          <div>
            <h3>Colour Theory</h3>
            <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusantium vero dolore perspiciatis porro ea praesentium nostrum
              earum aperiam. Error dicta voluptas vero animi velit id
              perspiciatis eius placeat ipsam cumque.
            </div>
            <div>
            
            </div>
          </div>
        </div>
      </div>

      <div className="blog-btn">
        <Link href="/">VIEW ALL</Link>
      </div>
    </section>
  );
};

export default Sectionfour;
