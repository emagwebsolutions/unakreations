import useGetQuery from '@/axios/useGetQuery';
import Image from 'next/image';
import Link from 'next/link';

type DT = {
  img: string;
  title: string;
  slug: string;
  excerpt: string;
}[];

type CN = {
  email: string;
  mobile1: string;
  mobile2: string;
  gpsaddress: string;
  officelocation: string;
  googlemap: string;
  facebook: string;
  twitter: string;
  instagram: string;
}[];

const Recentposts = ({ page }: { page: string }) => {
  const { data: recentpost } = useGetQuery('blog', '/blog');

  const arrs: DT = recentpost?.data.slice(0, 6) || [];

  const { data: contactdata } = useGetQuery('contact', '/contact');
  const contact: CN = contactdata?.data || [];

  return (
    <>
      <div className="followus">
        <h2>Follow Us</h2>
        <Link href={contact[0]?.facebook || ''}>
          <i className="fa fa-facebook"></i>
        </Link>
        <Link href={contact[0]?.instagram || ''}>
          <i className="fa fa-instagram"></i>
        </Link>
        <Link href={contact[0]?.twitter || ''}>
          <i className="fa fa-twitter"></i>
        </Link>
      </div>
      <div className="recentposts">
        <h2>Recent Post</h2>
        {arrs.map((v, k) => {
          return (
            <div key={k} className="footer-blog">
              <div>
                <Link href={`/blog/${v.slug}`}>
                  <Image src={v.img} alt="" width={130} height={70} />
                </Link>
              </div>
              <div>{v.excerpt.slice(0, 50)}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Recentposts;
