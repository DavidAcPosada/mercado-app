import { FC } from 'react';

const Price: FC<{ value: number }> = ({ value }) => {
  return (
    <>
      <span className='mr-1'>$</span>
      {Intl.NumberFormat('de', {
        minimumFractionDigits: 2,
      }).format(value)}
    </>
  );
};

export default Price;
