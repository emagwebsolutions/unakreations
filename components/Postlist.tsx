import Cardthree from './Cardthree';

type DT = {
  data: {
    img: string;
    slug: string;
    body: string | React.ReactNode;
  }[];
};

const Postlist = ({ data }: DT) => {
  return (
    <div className="postlist">
      <div className="container blog-flex gap-3 justify-center">
        {data.map((v, k) => (
          <Cardthree key={k} img={v?.img} link={v?.slug}>
            {v?.body}
          </Cardthree>
        ))}
      </div>
    </div>
  );
};

export default Postlist;
