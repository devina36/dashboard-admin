import Table from '@/components/Table';
import React from 'react';

async function getDetailCart(id) {
  const detailCart = await fetch(`https://dummyjson.com/carts/${id}`);
  return detailCart.json();
}

async function getDetailUser(id) {
  const detailCart = await fetch(`https://dummyjson.com/users/${id}`);
  return detailCart.json();
}

export default async function Page({ params }) {
  const detail = await getDetailCart(params.id);
  const user = await getDetailUser(detail.userId);

  const header = ['Product Name', 'Price', 'Quantity', 'Discount', 'Total'];

  return (
    <div>
      <h1 className="text-2xl">
        Cart <span>{detail.id}</span>
      </h1>
      <h3 className="text-xl mt-5">Details</h3>
      <div
        className="w-full p-7 mt-2 mb-5 border-2 border-black rounded-lg grid grid-cols-1 sm:grid-cols-2 gap-y-7"
        style={{ boxShadow: 'rgb(0 0 0) 3px 4px 0px' }}
      >
        <p>
          User: {user.firstName} {user.maidenName} {user.lastName}
        </p>
        <p># of Items: {detail.totalProducts}</p>
        <p>Added on: 20 Jan 2022</p>
        <p>Total Amount: ${detail.total}</p>
      </div>
      <Table
        head={header.map((item, i) => (
          <th key={i}>{item}</th>
        ))}
        body={detail.products.map((item, i) => (
          <tr key={i}>
            <td className="w-[30%] min-w-[300px]">{item.title}</td>
            <td className="w-[15%]">${item.price}</td>
            <td className="w-[15%]">{item.quantity}</td>
            <td className="w-[20%]">{item.discountPercentage}%</td>
            <td className="w-[20%]">${item.total}</td>
          </tr>
        ))}
      />
    </div>
  );
}
