import React from 'react';

const Table = ({ head, body }) => {
  return (
    <div className="overflow-x-auto snap-x snap-mandatory mt-7 mb-5">
      <table className="my-7 table-auto w-full">
        <thead className="bg-myPurple text-white">
          <tr>{head}</tr>
        </thead>
        <tbody className=" divide-y">{body}</tbody>
      </table>
    </div>
  );
};

export default Table;
