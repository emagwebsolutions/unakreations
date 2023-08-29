import { PortableText } from '@portabletext/react';
import Cardthree from './Cardthree';

type DT = {
  page: string;
  data: {
    img: string;
    slug: string;
    body: any
  }[];
};

const Postlist = ({ page,data }: DT) => {
  return (
    <div className="postlist">
      <div className="container blog-flex gap-3 justify-center">
        {data.map((v, k) => (
          
          <Cardthree key={k} img={v?.img} page={page} link={v?.slug}>
            <PortableText value={v?.body} />
          </Cardthree>
        ))}
      </div>
    </div>
  );
};

export default Postlist;
