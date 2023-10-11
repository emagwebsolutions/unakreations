'use client';

import Addressinformation from '@/components/Addressinformation';
import Row from '@/components/Row';
import Total from '@/components/Total';
import Universal from '@/components/Universal';
import Visiteditems from '@/components/Visiteditems';
import { cartList } from '@/store/features/cart';
import { useSelector } from 'react-redux';

type VL = {
  title: string;
  price: number;
  _id: string;
  img: string;
}[];

const Checkout = () => {
  const cart: VL = useSelector(cartList);

  return (
    <Universal>
      <section className="checkout">
        <div>
          {Object.values(cart).map((v, k: number) => (
            <Row
              key={k}
              name={v.title}
              price={v.price}
              id={v._id}
              img={v.img}
            />
          ))}

          <Total />

          <Addressinformation />
        </div>
      </section>

      <Visiteditems />
    </Universal>
  );
};

export default Checkout;
