import { items, total } from '@/store/features/cart';
import format_number from '@/utils/format_number';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

type DETAILS = {
  name: string;
  price: number;
  id: string;
  img: string;
};

const Row = ({ name, price, id, img }: DETAILS) => {
  const [getQty, setQty] = useState(1);
  const [getTotal, setTotal] = useState(0);
  const dispatch = useDispatch();
  let n = 1;
  useEffect(() => {
    const calc = Number(getQty) * Number(price);
    dispatch(total({ [id]: calc }));

    dispatch(
      items({
        [id]: {
          name,
          price,
          qty: getQty,
          amount: calc,
        },
      })
    );

    setTotal(calc);
  }, [getQty, dispatch, price, id, name]);

  const increaseCount = () => {
    setQty((prev) => {
      return prev + 1;
    });
  };

  const decreaseCount = () => {
    setQty((prev) => {
      return prev - 1;
    });
  };

  return (
    <div className="item-rows">
      <div
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
        }}
      ></div>
      <div>
        <h4>{name}</h4>
        <p>
          {getQty} x {format_number(price)} = {format_number(getTotal)}
        </p>
      </div>
      <div>

        <button onClick={decreaseCount}>-</button>
        {getQty}
        <button onClick={increaseCount}>+</button>
      </div>
    </div>
  );
};

export default Row;
