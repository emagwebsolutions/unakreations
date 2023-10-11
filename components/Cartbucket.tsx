import { useSelector, useDispatch } from 'react-redux';
import {
  cartList,
  deletecart,
  getTotal,
  updatetotal,
} from '@/store/features/cart';
import format_number from '@/utils/format_number';
import { useState, useEffect } from 'react';
import Link from 'next/link';

type ARR = [string, string];

const Cartbucket = () => {
  const dispatch = useDispatch();
  const [sumTotal, setTotal] = useState(0);
  const grandtotal = useSelector(getTotal);

  const [getClicked, setClicked] = useState(false);

  type TM = {
    price: string;
    title: string;
    img: string;
    _id: string;
  }[];
  const data: TM = useSelector(cartList);

  const count = Object.values(data).length;

  useEffect(() => {
    const total = Object.values(data).reduce((a: number, c: any) => {
      return Number(a) + Number(c.price);
    }, 0);
    setTotal(total);
  }, [data]);

  const deleteItem = (e: any) => {
    const { id } = e.target.dataset;


    const newArr = Object.entries(grandtotal).reduce((a: any, [k, v]: any) => {
      if(k !== id){
        a[k] = v;
      }
      return a;
    }, {});

    const flt = Object.values(data)
      .filter((v) => v._id !== id)
      .reduce((a: any, c: any) => {
        a[c.title] = c;
        return a;
      }, {});

    dispatch(deletecart(flt));

    dispatch(updatetotal(newArr));
  };

  const showBox = () => {
    if (count > 0) {
      setClicked(!getClicked);
    }
  };

  return (
    <div className="cartbucket" onClick={showBox}>
      <div>
        <i className="fa fa-shopping-cart fa-lg"></i>
        {count ? <span>{count}</span> : ''}
      </div>

      {getClicked ? (
        <div>
          {Object.values(data).map((v, k) => {
            return (
              <div key={k}>
                <div
                  style={{
                    backgroundImage: `url(${v.img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top',
                  }}
                ></div>
                <div>
                  <h2>{v.title}</h2>
                  <h4>GHs {v.price}</h4>
                </div>
                <div>
                  <span data-id={v?._id} onClick={deleteItem}>
                    X
                  </span>
                </div>
              </div>
            );
          })}

          <div className="cart-total">
            <span>Total</span> <span>GHs {format_number(sumTotal)}</span>
          </div>

          <Link href="/checkout">GO TO CHECKOUT</Link>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Cartbucket;
