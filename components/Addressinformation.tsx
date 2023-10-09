const Addressinformation = () => {
  return (
    <div className="addressinfo">
      <h4>Address Information</h4>



      <div className="form-control">
        <input type="text" id="firstname" placeholder="" />
        <label htmlFor="firstname">First Name</label>
      </div>

      <div className="form-control">
        <input type="text" id="lastname" placeholder="" />
        <label htmlFor="lastname">Last Name</label>
      </div>

      <div className="form-control">
        <input type="text" id="city" placeholder="" />
        <label htmlFor="city">City</label>
      </div>

      <div className="form-control">
        <input type="text" id="phone" placeholder="" />
        <label htmlFor="phone">Phone</label>
      </div>

      <div className="form-control">
        <input type="text" placeholder="" id="email" />
        <label htmlFor="email">Email</label>
      </div>


      <button>PLACE ORDER</button>


      
    </div>
  );
};

export default Addressinformation;
