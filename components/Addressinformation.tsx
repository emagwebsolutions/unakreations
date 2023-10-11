import { useForm } from 'react-hook-form';
import { getItems, getcart, items, total } from '@/store/features/cart';
import { useSelector, useDispatch } from 'react-redux';
import { request } from '@/axios/axios.config';

type FORM = {
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  city: string;
};

const Addressinformation = () => {
  const form = useForm({
    defaultValues: {
      firstname: '',
      lastname: '',
      phone: '',
      email: '',
      city: '',
    },
  });

  const newItems = useSelector(getItems);
  const item = Object.values(newItems);

  const dispatch = useDispatch();

  const { register, formState, handleSubmit } = form;

  const { isLoading, errors, isSubmitSuccessful } = formState;

  const formSubmit = (data: FORM) => {
    const obj = {
      data,
      item,
    };

    console.log(obj)
    //const res = request({ url: '/sendorder', method: 'POST', obj });
  };

  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (isSubmitSuccessful) {
    dispatch(getcart([]));
    dispatch(total([]));
    dispatch(items([]));

    return (
      <div className="feedbackbx">
        <h1>Your Order has been submitted successfull</h1>
        <p>one of our sales rep wil attend to you shortly</p>
      </div>
    );
  } else {
    return (
      <div className="addressinfo">
        <form onSubmit={handleSubmit(formSubmit)}>
          <h4>Address Information</h4>

          <div className="form-control">
            <input
              type="text"
              id="firstname"
              {...register('firstname', {
                required: {
                  value: true,
                  message: 'First Name field required!',
                },
              })}
              placeholder=""
            />
            <label htmlFor="firstname">First Name</label>
            <p className="err-danger">{errors.firstname?.message}</p>
          </div>

          <div className="form-control">
            <input
              type="text"
              id="lastname"
              placeholder=""
              {...register('lastname', {
                required: {
                  value: true,
                  message: 'Lastname field required!',
                },
              })}
            />
            <label htmlFor="lastname">Last Name</label>
            <p className="err-danger">{errors.lastname?.message}</p>
          </div>

          <div className="form-control">
            <input
              type="text"
              id="city"
              placeholder=""
              {...register('city', {
                required: {
                  value: true,
                  message: 'City firld required!',
                },
              })}
            />
            <label htmlFor="city">City</label>
            <p className="err-danger">{errors.city?.message}</p>
          </div>

          <div className="form-control">
            <input
              type="text"
              id="phone"
              {...register('phone', {
                required: {
                  value: true,
                  message: 'Phone field required!',
                },
              })}
              placeholder=""
            />
            <label htmlFor="phone">Phone</label>
            <p className="err-danger">{errors.phone?.message}</p>
          </div>

          <div className="form-control">
            <input
              type="text"
              placeholder=""
              {...register('email', {
                required: {
                  value: true,
                  message: 'Email field required!',
                },
                pattern: {
                  value: mailformat,
                  message: 'Valid email required!',
                },
              })}
              id="email"
            />
            <label htmlFor="email">Email</label>
            <p className="err-danger">{errors.email?.message}</p>
          </div>

          <button>PLACE ORDER</button>
        </form>
      </div>
    );
  }
};

export default Addressinformation;
