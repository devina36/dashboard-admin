'use client';
import React, { useEffect, useState } from 'react';

const Dropdown = ({ onChange, category }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(`https://dummyjson.com/products/categories`);
      const result = await response.json();
      setData(result);
      setLoading(false);
    };

    fetchData();
  }, []);
  return (
    <>
      {loading ? (
        ''
      ) : (
        <select className="border-2 border-gray-400 rounded-md" onChange={onChange} value={category}>
          <option value={'all'}>all</option>
          {data.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      )}
    </>
  );
};

export default Dropdown;
