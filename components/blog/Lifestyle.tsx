import Instagram from './Instagram';
import Multiimages from './Multiimages';
import Singleimagetwo from './Singleimagetwo';
import Videocomponent from './Videocomponent';

type DT = {
  _createdAt: Date;
  ytvideolink: string;
  img: string;
  slug: string;
  cat: string;
  excerpt: string;
  body: any;
  title: string;
}[];

const Lifestyle = ({ data }: { data: DT }) => {
  const vidurl = data.map((v: any) => v?.ytvideolink)[0];
  const excerpt = data.map((v: any) => v?.excerpt)[0];
  const singleimg = data.filter((v) => v)[1];

  if (data.length > 0) {
    return (
      <>
        <Videocomponent url={vidurl}>
          <div className="videxcerpt">{excerpt}</div>
        </Videocomponent>
        <Singleimagetwo className="singleimage pink" data={singleimg} />
        <Multiimages data={data} />
        <Instagram />
      </>
    );
  } else {
    return '';
  }
};

export default Lifestyle;
