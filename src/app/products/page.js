'use client';

import Button from '@/components/Button';
import DropdownCategory from '@/components/DropdownCategory';
import Searchbar from '@/components/Searchbar';
import Table from '@/components/Table';

import React, { useState, useEffect } from 'react';

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [skip, setSkip] = useState(0);
  const [category, setCategory] = useState('all');
  // const [price, setPrice] = useState('all');
  const limit = 5;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
      const result = await response.json();
      setData(result);
      setLoading(false);
    };

    const fetchCategory = async () => {
      setLoading(true);
      const response = await fetch(`https://dummyjson.com/products/category/${category}`);
      const result = await response.json();
      setData(result);
      setLoading(false);
    };

    if (category === 'all') {
      fetchData();
    } else {
      fetchCategory();
    }
  }, [skip, category]);

  const handleNext = () => {
    if (skip < data.total - limit) setSkip(skip + limit);
  };

  const handlePrev = () => {
    if (skip > 0) setSkip(skip - limit);
  };

  // const handlePriceRange = async (e) => {
  //   setPrice(e.target.value);

  //   const range = price.filter((item) => item.title === price);

  //   console.log(range);

  // };

  const header = ['Product Name', 'Brand', 'Price', 'Stock', 'Category'];

  return (
    <>
      <div className="flex justify-end">
        <Searchbar />
      </div>
      <h1 className="text-2xl text-bold mb-3">Products List</h1>
      <div className="flex gap-x-4">
        <div>
          <h3 className="text-gray-500 mb-2">by Category</h3>
          <DropdownCategory onChange={(e) => setCategory(e.target.value)} category={category} />
        </div>
        {/* <div>
          <h3 className="text-gray-500 mb-2">by PriceRange</h3>
          <DropdownPrice onChange={handlePriceRange} value={price} />
        </div> */}
      </div>
      <div>
        {loading ? (
          <p className="mt-5">Loading...</p>
        ) : (
          <>
            <Table
              head={header.map((item, i) => (
                <th key={i}>{item}</th>
              ))}
              body={data.products.map((item, i) => (
                <tr key={i}>
                  <td className="w-[30%] min-w-[300px]">{item.title}</td>
                  <td className="w-[20%] min-w-[200px]">{item.brand}</td>
                  <td className="w-[15%]">${item.price}</td>
                  <td className="w-[15%]">{item.stock}</td>
                  <td className="w-[20%] min-w-[150px]">{item.category}</td>
                </tr>
              ))}
            />
            <div className="flex justify-end items-center gap-5">
              <Button text="Prev" onClick={handlePrev} disabled={skip === 0 ? true : false} />
              <span className="text-semibold">
                {skip === 0 ? '1' : Math.ceil(skip / limit + 1)}/{Math.ceil(data.total / limit)}
              </span>
              <Button text="Next" disabled={0 >= data.total - limit ? true : false} onClick={handleNext} />
            </div>
          </>
        )}
      </div>
    </>
  );
}
