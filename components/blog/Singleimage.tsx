import Link from 'next/link';

type DT = {
  data: {
    _createdAt: Date;
    ytvideolink: string;
    img: string;
    slug: string;
    cat: string;
    excerpt: string;
    body: any;
    title: string;
  };
} & React.ComponentProps<'div'>;

const Singleimage = ({ data, ...rest }: DT) => {
  if (data) {
    return (
      <div {...rest}>
        <div className="container">
          <div
            className="simgb1"
            style={{
              backgroundImage: `url(${data?.img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
          <div className="simgb2">
            <h3>
              <Link href={`blog/${data?.slug}`}>{data?.title}</Link>
            </h3>
            <div>{data?.excerpt}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return '';
  }
};

export default Singleimage;
