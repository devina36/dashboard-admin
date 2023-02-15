'use client';

import Button from '@/components/Button';
import Table from '@/components/Table';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

function Carts() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [skip, setSkip] = useState(0);
  const limit = 5;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(`https://dummyjson.com/carts?limit=${limit}&skip=${skip}`);
      const result = await response.json();
      setData(result);
      setLoading(false);
    };

    fetchData();
  }, [skip]);

  const handleNext = () => {
    if (skip < data.total - limit) setSkip(skip + limit);
  };

  const handlePrev = () => {
    if (skip > 0) setSkip(skip - limit);
  };

  const header = ['No', ' UserId', 'Details'];

  return (
    <div>
      <h1 className="text-2xl text-bold mb-7">Table Carts</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Table
            head={header.map((item, i) => (
              <th key={i}>{item}</th>
            ))}
            body={data.carts.map((item, i) => (
              <tr key={i}>
                <td className="w-[10%]">{item.id}</td>
                <td className="w-[30%]">{item.userId}</td>
                <td className="w-[30%]">
                  <Link href={`/carts/${item.id}`}>
                    <Button text="Details" />
                  </Link>
                </td>
              </tr>
            ))}
          />
          <div className="flex justify-end items-center gap-5">
            <Button text="Prev" onClick={handlePrev} disabled={skip === 0 ? true : false} />
            <span className="text-semibold">
              {skip === 0 ? '1' : Math.ceil(skip / limit + 1)}/{Math.ceil(data.total / limit)}
            </span>
            <Button text="Next" disabled={skip === data.total - limit ? true : false} onClick={handleNext} />
          </div>
        </>
      )}
    </div>
  );
}

export default Carts;
