import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "/1.jpg" },
  { url: "/2.jpg" },
  { url: "/3.jpg" }
];

const Slider = () => {
  const num = `100%`;
  return (
    <div className="sliderbx">
      <SimpleImageSlider
        width={num}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
      />
    </div>
  );
}

export default Slider