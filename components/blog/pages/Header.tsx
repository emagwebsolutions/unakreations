import Image from 'next/image';
import Link from 'next/link';

type POSTS = {
  singlepost: {
    img: string;
    title: string;
    slug: string;
  }[];
  otherposts: {
    title: string;
    img: string;
    slug: string;
    excerpt: string;
  }[];
  page: string;
};

const Header = ({ singlepost, otherposts, page }: POSTS) => {



  return (

    <div className="blog-header">
      <div
        style={{
          backgroundImage: `url(${singlepost[0]?.img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div>
          <Link href={`${page}/${singlepost[0]?.slug}`}>
            {singlepost[0]?.title || 'UNA KLODIN'}
          </Link>
        </div>
      </div>

      <div>
        {otherposts.map((v, k) => {
          return (
            <Link href={`${page}/${v.slug}`} key={k}>
              <Image src={v.img || ''} alt="" width={170} height={170} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
