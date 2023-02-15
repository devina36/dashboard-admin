import React from 'react';

import { prices } from '@/utils/filter';

const DropdownPrice = ({ onChange, value }) => {
  return (
    <>
      <select className="border-2 border-gray-400 rounded-md" onChange={onChange} value={value}>
        <option value={'all'}>all</option>
        {prices.map((item) => (
          <option key={item} value={item.title}>
            {item.title}
          </option>
        ))}
      </select>
    </>
  );
};

export default DropdownPrice;
