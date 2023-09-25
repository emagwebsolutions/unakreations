import Link from 'next/link';

type OT = {
  title: string;
  data: {
    title: string;
    excerpt: string;
    img: string;
    slug: string;
  }[];
  page: string;
};

const Other = ({ title, page, data }: OT) => {



  return (
    <div className="otherposts">
      <div></div>
      <div>{title}</div>

      <div>
        {data.map((v, k) => {
          if(v.img){
          return (
            <div key={k}>
               <Link href={`/${page}/${v.slug}`}>
              <div
                style={{
                  backgroundImage: `url(${v.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '25rem'
                }}
              ></div>
              </Link>
            </div>
          );
              }
        }).slice(0,3)}
      </div>
    </div>
  );

  
};

export default Other;
