import useGetQuery from '@/axios/useGetQuery';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Footer = () => {
  type CN = {
    email: string;
    mobile1: string;
    mobile2: string;
    gpsaddress: string;
    officelocation: string;
    googlemap: string;
    facebook: string;
    twitter: string;
    instagram: string;
  }[];



  const { data } = useGetQuery('contact', '/contact');
  const getData: CN = data?.data || [];

  const arr = getData?.map((v) => v);

  return (
    <footer>
      <div>
        <div>
          <i className="fa fa-mobile fa-lg"></i>
          <h4>
            {arr[0]?.mobile1}/{arr[0]?.mobile2}
          </h4>
        </div>
        <div>
          <i className="fa fa-envelope fa-lg"></i> <h4>{arr[0]?.email}</h4>
        </div>
        <div>
          <i className="fa fa-map-marker fa-lg"></i>
          <h4>{arr[0]?.officelocation}</h4>
        </div>
        <div>
          <Link href="https://www.facebook.com/unaklodin">
            <i className="fa fa-facebook fa-lg"></i>
          </Link>
          <Link href="https://www.twitter.com">
            <i className="fa fa-twitter fa-lg"></i>
          </Link>
          <Link href="https://www.instagram.com">
            <i className="fa fa-instagram fa-lg"></i>
          </Link>
        </div>
        <div>© 2022 UNA KREATIONS. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
