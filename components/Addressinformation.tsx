import { useForm } from 'react-hook-form';
import {
  getItems,
  getTotal,
  getcart,
  items,
  total,
} from '@/store/features/cart';
import { useSelector, useDispatch } from 'react-redux';
import Script from 'next/script';
import paystack from './paystack';

type FORM = {
  firstname: string;
  lastname: string;
  email: string;
};

const Addressinformation = () => {
  const form = useForm({
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
    },
  });

  const newItems = useSelector(getItems);
  const item = Object.values(newItems);

  const dispatch = useDispatch();

  const { register, formState, handleSubmit } = form;

  const { isLoading, errors, isSubmitSuccessful } = formState;

  //TOTAL
  const data = useSelector(getTotal);
  const totl = Array.isArray(data)
    ? Object.values(data).reduce((a, c) => {
        return Number(a) + Number(c);
      }, 0)
    : 0;

  const formSubmit = (data: FORM) => {
    const amount = totl;
    const email = data.email;

    paystack(email, amount);
  };

  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  return (
    <>
      <Script src="https://js.paystack.co/v1/inline.js"></Script>

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
    </>
  );
};

export default Addressinformation;
