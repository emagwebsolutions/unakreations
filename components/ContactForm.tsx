import { useForm } from 'react-hook-form';

const ContactForm = () => {
  type formValues = {
    fullname: string;
    email: string;
    subject: string;
    emailbody: string;
  };

  const form = useForm<formValues>();
  const { register, formState, handleSubmit } = form;
  const { errors, isDirty, isValid, isSubmitting, isSubmitSuccessful } =
    formState;

  const onSubmit = (data: formValues) => {
    console.log(data);
  };

  if (isSubmitSuccessful) {
    return 'Submitting complete';
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="form-control">
        <input
          type="text"
          placeholder=" "
          id="fullname"
          {...register('fullname', {
            required: {
              value: true,
              message: 'Fullname required!',
            },
          })}
        />
        <label htmlFor="fullname">Your name</label>
        <p>{errors.fullname?.message}</p>
      </div>
      <div className="form-control">
        <input
          type="text"
          placeholder=" "
          id="email"
          {...register('email', {
            required: {
              value: true,
              message: 'Email field required!',
            },
            pattern: {
              value: /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/,
              message: 'Valid email required!',
            },
          })}
        />
        <label htmlFor="email">Your email</label>
        <p>{errors.email?.message}</p>
      </div>
      <div className="form-control">
        <input
          type="text"
          placeholder=" "
          id="subject"
          {...register('subject', {
            required: {
              value: true,
              message: 'Subject field required!',
            },
          })}
        />
        <label htmlFor="">Subject</label>
        <p>{errors.subject?.message}</p>
      </div>
      <div className="form-control">
        <textarea
          {...register('emailbody', {
            required: {
              value: true,
              message: 'Message box field required!',
            },
          })}
        ></textarea>
        <p>{errors.emailbody?.message}</p>
      </div>
      <button>Submit</button>

      {isSubmitting ? <i className="fa fa-spinner fa-spin"></i> : ''}
    </form>
  );
};

export default ContactForm;
