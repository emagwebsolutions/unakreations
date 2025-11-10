


type Level25CardType = React.HTMLAttributes<HTMLDivElement> & {
  img: string;
};
const Level25Card = ({img, ...props}: Level25CardType) => {
  return (
    <div className="level-25-img"
    {...props}
    style={{
      backgroundImage: `url(${img})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'top'
    }}
    >
    </div>
  )
}

export default Level25Card