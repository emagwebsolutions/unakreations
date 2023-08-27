type IC = {
  fa: string;
  title: string;
};

const Icons = ({ fa, title }: IC) => {
  return (
    <div className="fa-icons">
      <i className={`fa fa-lg fa-${fa}`}></i>
      <h4>{title}</h4>
    </div>
  );
};

export default Icons;
