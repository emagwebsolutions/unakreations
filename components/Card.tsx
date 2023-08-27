import Image from 'next/image';


type CH = {
  img: string;
  children: React.ReactNode
}

const Card = ({img,children}: CH) => {
  return (
    <div className="card">
      
      <Image src={img} width={500} height={200} alt="" />
      <div>{children}</div>
    </div>
  );
};

export default Card;
