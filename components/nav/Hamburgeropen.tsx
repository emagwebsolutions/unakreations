import Cartbucket from '../Cartbucket';

type obj = {
  opennav: (e: React.MouseEvent<HTMLDivElement>) => void;
  name: string;
};

const Hamburgeropen = ({ opennav, name }: obj) => {
  return (
    <div className="hamburgeropen" style={{ display: 'none' }}>
      <div className="hamburger-inner">
        <div className="btntimes">
          <div className="strips" onClick={opennav}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div>
          <Cartbucket />
        </div>
        <h1>{name}</h1>
      </div>
    </div>
  );
};

export default Hamburgeropen;
