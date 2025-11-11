import Blogscomponent from './Blogscomponent';

type DT = {
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

const Blogs = ({ data }: { data: DT }) => {



  const red: DT = data && data.reduce((a: any, c: any) => {
    if (a[c.cat]) {
      a[c.cat].arr.push(c);
    } else {
      a[c.cat] = c;
    }
    return a;
  }, {});


  const group = Object.values(red).map((v, k) => {
    const arr = [
      {
        _id: v._id,
        _createdAt: v._createdAt,
        ytvideolink: v.ytvideolink,
        img: v.img,
        slug: v.slug,
        cat: v.cat,
        excerpt: v.excerpt,
        body: v.body,
        title: v.title,
        arr: [],
      },
      ...v.arr,
    ];
    if (arr) {
      return <Blogscomponent key={k} data={arr} />;
    } else {
      return null;
    }
  });

  return <>{group}</>;
};

export default Blogs;
