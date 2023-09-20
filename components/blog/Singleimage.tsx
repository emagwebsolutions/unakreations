const Singleimage = ({ ...rest }) => {
  return (
    <div {...rest}>
      <div className="container">
        <div
          className="simgb1"
          style={{
            backgroundImage: "url('/serv.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="simgb2">
          <h2>TITLE HERE</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
            impedit laborum quas fuga quasi, et, facilis dolore pariatur rerum
            totam eos excepturi praesentium dolores, laboriosam nobis
            voluptatibus. Deleniti, possimus est.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Singleimage;
