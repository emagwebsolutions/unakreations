'use client';
import useGetQuery from '@/axios/useGetQuery';
import Universal from '@/components/Universal';
import { useState } from 'react';
import { PortableText } from '@portabletext/react';
import Visiteditems from '@/components/Visiteditems';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getVisiteditems } from '@/store/features/visited';
import { getcart, getsinglecart,singlebuyer } from '@/store/features/cart';
import { redirect } from 'next/navigation';

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

const Post = ({ params: { slug } }: PR) => {
  const [getImg, setImg] = useState('');
  const { data } = useGetQuery('klodin', '/klodin');
  const klodin: GD = data?.data || [];
  const [getBox, setBox] = useState(false);
  const res = klodin.filter((v) => v.slug === slug)[0];
  const size = res?.size?.split(',');
  const [getSize, setSize] = useState('');
  const [getError, setError] = useState(false);
  const [isRedirect,setRedirect] = useState(false)

  const dispatch = useDispatch();

  useEffect(() => {
    if (res) {
      dispatch(getVisiteditems(res));
    }
  }, [dispatch, res, slug]);

  const setsize = (e: any) => {
    setSize(e.target.value);
    setError(false);
  };

  const addsinglecart = () => {
    if (!getSize) {
      setError(true);
    } else {
      const edt = {
        ...res,
        size: getSize,
      };
      dispatch(getsinglecart(edt));
      dispatch(singlebuyer());
      setRedirect(true)
    }
  };



  if(isRedirect){
    redirect('/checkout');
  }


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

            <span className="err-danger">{getError ? 'Choose size' : ''}</span>
            <select onChange={setsize}>
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
            <button
              onClick={() => {
                if (!getSize) {
                  setError(true);
                } else {
                  const edt = {
                    ...res,
                    size: getSize,
                  };
                  dispatch(getcart(edt));
                }
              }}
            >
              <span>ADD TO CART</span>
              <i className="fa fa-shopping-cart fa-lg"></i>
            </button>

            <button onClick={addsinglecart}>
              <span>BUY IT NOW</span>
              <i className="fa fa-arrow-right fa-lg"></i>
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
