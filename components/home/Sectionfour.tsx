import useGetQuery from '@/axios/useGetQuery';
import Image from 'next/image';
import Link from 'next/link';


const Sectionfour = () => {
  type BL = {
    title: string;
    excerpt: any;
    img: string;
    slug: string;
  }[];

  const { data } = useGetQuery('blog', '/blog');
  const arrs: BL = data?.data || [];

  const blogs = arrs
    .filter((v) => {
      return v.slug !== 'header' && v.slug !== 'paragraph';
    })
    .map((vl, ky) => (
      <div className="blog" key={ky}>
        <picture>
          <Image width="500" height="200" src={vl.img} alt="" />
        </picture>
        <div>
          <h3>{vl.title}</h3>
          <div>{vl.excerpt}</div>
          <div></div>
        </div>
      </div>
    ));

  return (
    <section className="sec3 blogpostwrapper">
      <h1>Our Blog</h1>
      <div className="divider"></div>

      <div className="container justify-center blog-flex gap-3">
        {blogs}
      </div>

      <div className="blog-btn">
        <Link href="/">VIEW ALL</Link>
      </div>
    </section>
  );
};

export default Sectionfour;
