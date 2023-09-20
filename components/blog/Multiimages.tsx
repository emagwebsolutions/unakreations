import Link from 'next/link';

type DT = {
  data: {}[];
};

const Multiimages = ({ data }: DT) => {
  return (
    <div className="multiimage">
      <div
        style={{
          backgroundImage: "url('/tshirt.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h2>
          <Link href="">THIS IS WHERE TITLE WILL APPEAR</Link>
        </h2>
      </div>

      <div
        style={{
          backgroundImage: "url('/graphics.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
       <h2>
          <Link href="">THIS IS WHERE TITLE WILL APPEAR</Link>
        </h2>
      </div>

      <div
        style={{
          backgroundImage: "url('/serv.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h2>
          <Link href="">THIS IS WHERE TITLE WILL APPEAR</Link>
        </h2>
      </div>
    </div>
  );
};

export default Multiimages;
