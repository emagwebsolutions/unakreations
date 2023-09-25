import Link from 'next/link';
import Instagram from './Instagram';
import Multiimages from './Multiimages';
import Singleimage from './Singleimage';
import Singleimagetwo from './Singleimagetwo';
import Videocomponent from './Videocomponent';

type DT = {
  data: {}[];
};

const Blogscomponent = ({ data }: DT) => {
  let arr: any = [];

  for(let i=0; i < 1; i++){
    arr.push(data.splice(0, 3));
  }


  console.log(data.length)
  

  let newarr = [...arr, [...data]].map((v, k) => {
    const color = [
      'blue',
      'yellow',
      'pink',
      'orange',
      'darkblue',
      'lightgreen',
      'darkgreen',
      'red',
    ];
    const nums = [1, 2];

    const rnd = Math.floor(Math.random() * 8);
    const rndimg = Math.floor(Math.random() * 2);

    let singleimg =
      nums[rndimg] === 1 ? (
        <Singleimage className={`singleimage ${color[rnd]}`} data={v[0]} />
      ) : (
        <Singleimagetwo className={`singleimage ${color[rnd]}`} data={v[0]} />
      );

    if (v.length > 0) {
      return (
        <div key={k}>
          <Videocomponent url={v[0]?.ytvideolink}>
            <div className="videxcerpt">
              <Link href={`blog/${v[0]?.slug}`}>{v[0]?.title}</Link>
              </div>
          </Videocomponent>
          {singleimg}
          <Multiimages data={v} />
          <Instagram />
        </div>
      );
    }
  });

  return <>{newarr}</>;
};

export default Blogscomponent;
