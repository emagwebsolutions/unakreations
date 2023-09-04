import Image from 'next/image';


type CH = {
  img: string;
  children: React.ReactNode
}

const Card = ({img,children}: CH) => {
  return (
    <div className="card">
      <div className="imgbx">
      <Image src={img} width={400} height={500} alt="" />
      </div>

      <div>{children}</div>
    </div>
  );
};

export default Card;
