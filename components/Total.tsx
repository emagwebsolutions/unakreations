import { getTotal } from '@/store/features/cart';
import { useSelector } from 'react-redux';
import format_number from '@/utils/format_number';

const Total = () => {
  const data = useSelector(getTotal);

  const tot1 = Array.isArray(data)
    ? Object.values(data).reduce((a, c) => {
        return Number(a) + Number(c);
      }, 0)
    : 0;

  const total = format_number(Number(tot1));

  return (
    <div className="items-total">
      <div>Total:</div>
      <div> {total}</div>
    </div>
  );
};

export default Total;
