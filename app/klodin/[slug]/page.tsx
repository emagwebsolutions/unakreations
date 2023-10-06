'use client';

import useGetQuery from '@/axios/useGetQuery';
import Universal from '@/components/Universal';
import { useState } from 'react';

import { PortableText } from '@portabletext/react';
import Visiteditems from '@/components/Visiteditems';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getVisiteditems } from '@/store/features/visited';
import { cartList } from '@/store/features/cart';

type PR = {
  params: {
    slug: string;
  };
};

type GD = {
  gallery: { url: string }[];
  img: string;
  price: string;
  size: string;
  slug: string;
  stockstatus: string;
  title: string;
  body: any;
  excerpt: string;
}[];

// gallery
// img
// price
// size
// slug
// stockstatus
// title
// body
// excerpt

const Post = ({ params: { slug } }: PR) => {
  const [getImg, setImg] = useState('');
  const { data } = useGetQuery('klodin', '/klodin');
  const klodin: GD = data?.data || [];
  const [getBox, setBox] = useState(false);
  const res = klodin.filter((v) => v.slug === slug)[0];
  const size = res?.size.split(',');

  const dispatch = useDispatch();

  useEffect(() => {
    if (res) {
      dispatch(getVisiteditems(res));
    }
  }, [dispatch, res, slug]);

  return (
    <Universal>
      <div className="single-item">
        <div className="container">
          <div>
            <picture
              style={{
                backgroundImage: `url(${getImg ? getImg : res?.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'top',
                width: '100%',
              }}
            ></picture>

            <div>
              {res?.gallery.map((v, k) => {
                const newimg = v.url;
                return (
                  <div
                    key={k}
                    onClick={() => setImg(newimg)}
                    style={{
                      backgroundImage: `url(${v.url})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'top',
                    }}
                  ></div>
                );
              })}
            </div>
          </div>

          <div>
            <h4>{res?.title}</h4>
            <h3>GHs {res?.price}</h3>
            <select name="" id="">
              <option hidden value="">
                Choose size
              </option>
              {size?.map((v, k) => {
                return (
                  <option key={k} value={v}>
                    {v}
                  </option>
                );
              })}
            </select>
            <button onClick={() => dispatch(cartList(res))}>
              <span>ADD TO CART</span>
              <i className="fa fa-shopping-cart fa-lg"></i>
            </button>

            <span className="collapsebtn" onClick={() => setBox(!getBox)}>
              {getBox ? '-' : '+'} Description
            </span>
            {getBox ? (
              <div className="textbox">
                {<PortableText value={res?.body} />}
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
      <Visiteditems />
    </Universal>
  );
};

export default Post;
