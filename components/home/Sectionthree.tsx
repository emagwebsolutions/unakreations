import Image from 'next/image';
import { PortableText } from '@portabletext/react';

const Sectionthree = () => {
  return (
    <section className="sec3 testimonials">
      <h1>Testimonials</h1>
      <div className="divider"></div>

      <div className="container flex gap-2">
        <div className="testm-row">
          <div className="img-test">
            <Image width="4" height="4" src="/serv.jpeg" alt="" />
          </div>
          <h4>Title</h4>
          <div className="quote">
            <i className="fa fa-quote-left"></i>
            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus, optio. Modi fugiat reiciendis quos quasi velit illo
              obcaecati consectetur blanditiis ipsum, sit est repellendus
              perspiciatis aliquid, consequuntur amet rem. Nobis!
            </div>
            <i className="fa fa-quote-right"></i>
          </div>
        </div>

        <div className="testm-row">
          <div className="img-test">
            <Image width="4" height="4" src="/serv.jpeg" alt="" />
          </div>
          <h4>Title</h4>
          <div className="quote">
            <i className="fa fa-quote-left"></i>
            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus, optio. Modi fugiat reiciendis quos quasi velit illo
              obcaecati consectetur blanditiis ipsum, sit est repellendus
              perspiciatis aliquid, consequuntur amet rem. Nobis!
            </div>
            <i className="fa fa-quote-right"></i>
          </div>
        </div>

        <div className="testm-row">
          <div className="img-test">
            <Image width="4" height="4" src="/serv.jpeg" alt="" />
          </div>
          <h4>Title</h4>
          <div className="quote">
            <i className="fa fa-quote-left"></i>
            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus, optio. Modi fugiat reiciendis quos quasi velit illo
              obcaecati consectetur blanditiis ipsum, sit est repellendus
              perspiciatis aliquid, consequuntur amet rem. Nobis!
            </div>
            <i className="fa fa-quote-right"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sectionthree;
