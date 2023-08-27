type PP = {
  para: string | React.ReactNode;
};
const Pagepara = ({ para }: PP) => {
  return (
    <div className="pagepara">
      <div className="container">{para}</div>
    </div>
  );
};

export default Pagepara;
