import Image from 'next/image';


type CH = {
  img: string;
  children: React.ReactNode
}

const Cardtwo = ({img,children}: CH) => {
  return (
    <div className="cardtwo">
      <div>
      <Image src={img} width={500} height={200} alt="" />
      </div>

      <div>{children}</div>
    </div>
  );
};

export default Cardtwo;
