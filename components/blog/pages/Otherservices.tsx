import useGetQuery from '@/axios/useGetQuery';
import Other from './Other';

type GD = {
  title: string;
  img: string;
  excerpt: string;
  slug: string;
}[];

const Otherservices = () => {
  const { data: Grafix } = useGetQuery('grafix', '/grafix');
  const grafix: GD = Grafix?.data || [];

  const { data: Advertising } = useGetQuery('advertising', '/advertising');
  const advertising: GD = Advertising?.data || [];

  const { data: Printing } = useGetQuery('printing', '/printing');
  const printing: GD = Printing?.data || [];

  const { data: Administrative } = useGetQuery(
    'administrative',
    '/administrative'
  );
  const administrative: GD = Administrative?.data || [];

  const { data: Training } = useGetQuery('training', '/training');
  const training: GD = Training?.data || [];

  return (
    <>
      {grafix.length > 0 ? (
        <Other title="U & A Grafix" page="grafix" data={grafix} />
      ) : (
        ''
      )}
      {advertising.length > 0 ? (
        <Other title="Advertising" page="advertising" data={advertising} />
      ) : (
        ''
      )}
      {printing.length > 0 ? (
        <Other title="Printing" page="printing" data={printing} />
      ) : (
        ''
      )}
      {training.length > 0 ? (
        <Other title="Training" page="training" data={training} />
      ) : (
        ''
      )}
      {administrative.length > 0 ? (
        <Other
          title="Administrative Services"
          page="administrative"
          data={administrative}
        />
      ) : (
        ''
      )}
    </>
  );
};

export default Otherservices;
