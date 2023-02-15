'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <aside className="lg:w-[200px] hidden lg:block text-white bg-myPurple min-h-screen">
        <ul className=" py-7 px-5">
          <li className="pb-5">
            <Link href="/">Dashboard</Link>
          </li>
          <li className="pb-5">
            <Link href="/products">Product</Link>
          </li>
          <li>
            <Link href="/carts">Cart</Link>
          </li>
        </ul>
      </aside>

      <button className="lg:hidden px-7 py-4 text-start w-full bg-myPurple text-white" onClick={() => setOpen(!open)}>
        Logo
      </button>

      <div
        className={`absolute top-0 z-10 transition-all lg:hidden duration-200 ease-in-out w-full h-screen bg-black/20 ${
          open ? 'left-0' : '-left-[1100px]'
        }`}
        onClick={() => setOpen(!open)}
      ></div>

      <aside
        className={`absolute z-20 top-0 transition-all w-[200px] duration-200 ease-in-out text-white bg-myPurple min-h-screen ${
          open ? 'left-0' : '-left-[300px]'
        }`}
      >
        <ul className=" py-7 px-5">
          <li className="pb-5">
            <Link href="/" onClick={() => setOpen(!open)}>
              Dashboard
            </Link>
          </li>
          <li className="pb-5">
            <Link href="/products" onClick={() => setOpen(!open)}>
              Product
            </Link>
          </li>
          <li>
            <Link href="/carts" onClick={() => setOpen(!open)}>
              Cart
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
