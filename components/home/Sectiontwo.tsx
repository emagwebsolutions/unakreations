import Image from 'next/image';
import { PortableText } from '@portabletext/react';

const Sectiontwo = () => {
  return (
    <section className="sec2 unaklodin">

      <div className="container">
        <div>
          <div>
            <h1>Our Services</h1>
            <div className="divider"></div>
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
              omnis earum assumenda aspernatur est error nostrum repellendus
              pariatur perferendis dolorum magni placeat, delectus saepe aliquid
              voluptas quidem laudantium dolorem accusamus!
            </div>
            <br />
          </div>
        </div>
      </div>


      <div className="container flex gap-2">


          <div className="unaklodinimg">
            <Image width="500" height="150" src="/serv.jpeg" alt="" />
          </div>
          <div className="unaklodinimg">
            <Image width="500" height="150" src="/serv.jpeg" alt="" />
          </div>
          <div className="unaklodinimg">
            <Image width="500" height="150" src="/serv.jpeg" alt="" />
          </div>
          <div className="unaklodinimg">
            <Image width="500" height="150" src="/serv.jpeg" alt="" />
          </div>


      </div>
    </section>
  );
};

export default Sectiontwo;
