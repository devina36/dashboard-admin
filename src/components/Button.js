import React from 'react';

const Button = ({ text, disabled, onClick }) => {
  return (
    <button
      className="bg-myYellow w-[100px] py-1 rounded-full font-semibold text-black text-center border-2 border-black disabled:opacity-50"
      style={{ boxShadow: 'rgb(0 0 0) 3px 4px 0px' }}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
