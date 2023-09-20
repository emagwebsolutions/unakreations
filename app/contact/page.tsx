'use client';

import Universal from '@/components/Universal';
import ContactForm from '@/components/ContactForm';
import Pageheadertwo from '@/components/Pageheadertwo';
import useGetQuery from '@/axios/useGetQuery';

const Contact = () => {
  type CD = {
    googlemap: string;
  }[];

  const { data } = useGetQuery('contact', '/contact');
  const getData: CD = data?.data || [];

  const wd = `100%`;

  return (
    <Universal>
      <Pageheadertwo />

      <div className="contact">
        <section>
          <div className="container">
            <h1>Our Contact Details</h1>
            <div className="short-line"></div>
            <p>
              Locate us at our office today or use any of the contact details
              below to get in touch with us today and we will get back to you
              within 24 hours.
            </p>
          </div>
        </section>

        <section>
          <div className="container">
            <div>
              <h2>We Love To Hear From You</h2>
              <div className="short-line"></div>
              <p>
                Please call or email contact form and we will be happy to assist
                you.
              </p>

              <ContactForm />
            </div>
            <div>
              <iframe
                src={getData[0]?.googlemap}
                width={wd}
                height="450"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </Universal>
  );
};

export default Contact;
