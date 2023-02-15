import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Searchbar = () => {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();

    router.push(`/search/${search}`);
  };
  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-white border-2 text-black border-black rounded-md mb-4 px-2 py-1 w-[250px] focus:outline-none focus:border-myPurple"
        placeholder="Search product"
      />
    </form>
  );
};

export default Searchbar;
