import useGetQuery from '@/axios/useGetQuery';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import Image from 'next/image';

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

type ST = {
  title: string;
  slug: string;
  excerpt: string;
}[];

type TM = {
  _id: string;
  _createdAt: Date;
  ytvideolink: string;
  img: string;
  slug: string;
  cat: string;
  excerpt: string;
  body: any;
  title: string;
  arr: [];
}[];

const Footer = () => {
  const { data: contactdata } = useGetQuery('contact', '/contact');
  const contact: CN = contactdata?.data || [];

  const { data: overviewData } = useGetQuery('overview', '/overview');
  const overview: ST = overviewData?.data || [];

  const { data: blogData } = useGetQuery('blog', '/blog');
  const blog: TM = blogData?.data || [];

  const one = blog.slice(0, 3);
  const two = blog.slice(4, 7);

  return (
    <footer>
      <div className="container">
        <div className="footer-info">
          <h4>{overview[0]?.title.toUpperCase()}</h4>
          <div>{overview[0]?.excerpt}</div>
          <div className="footer-social">
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
        </div>
        <div>
          {one.map((v, k) => {
            return (
              <div key={k} className="footer-blog">
                <div>
                  <Link href={`/blog/${v.slug}`}>
                  <Image src={v.img} alt="" width={130} height={70} />
                  </Link>
                </div>
                <div>{v.excerpt.slice(0,66)}</div>
              </div>
            );
          })}
        </div>
        <div>

        {two.map((v, k) => {
            return (
              <div key={k} className="footer-blog">
                <div>
                  <Link href={`/blog/${v.slug}`}>
                  <Image src={v.img} alt="" width={130} height={70} />
                  </Link>
                </div>
                <div>{v.excerpt.slice(0,66)}</div>
              </div>
            );
          })}


        </div>
      </div>
    </footer>
  );
};

export default Footer;
