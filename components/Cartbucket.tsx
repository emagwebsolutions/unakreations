import { useSelector, useDispatch } from 'react-redux';
import { cartList, deletecart } from '@/store/features/cart';
import format_number from '@/utils/format_number';
import { useState, useEffect } from 'react';

const Cartbucket = () => {
  const dispatch = useDispatch();
  const [getTotal, setTotal] = useState(0);

  const [getHover, setHover] = useState(false);

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

    const flt = Object.values(data)
      .filter((v) => v._id !== id)
      .reduce((a: any, c: any) => {
        a[c.title] = c;
        return a;
      }, {});

    dispatch(deletecart(flt));
  };

  const showBox = ()=>{
    setHover(!getHover)
  }

  return (
    <div className="cartbucket" onClick={showBox}>
      <div>
        <i className="fa fa-shopping-cart fa-lg"></i>
        {count ? <span>{count}</span> : ''}
      </div>

      {getHover ? (
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
            <span>Total</span> <span>GHs {format_number(getTotal)}</span>
          </div>

          <button>GO TO CHECKOUT</button>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Cartbucket;
