'use client';

import { useState } from 'react';

const Add = () => {
  const [quantity, setQuantity] = useState(1);

  const stock = 3;

  const handleQuantity = (type: 'd' | 'i') => {
    if (type === 'd' && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (type === 'i' && quantity < 3) {
      setQuantity((prev) => prev + 1);
    }
  };
  return (
    <div className="flex-col gap-4">
      <h4 className="font-medium">Choose quantity</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className=" bg-gray-100 py-2 px-4 rounded-2xl w-32 flex items-center justify-between">
            <button
              className="cursor-pointer text-xl"
              onClick={() => handleQuantity('d')}
            >
              -
            </button>
            {quantity}
            <button
              className="cursor-pointer text-xl"
              onClick={() => handleQuantity('i')}
            >
              +
            </button>
          </div>
          <div className=""></div>
          <div className="text-sm">
            {' '}
            Only <span className="text-orange-500">4 items</span> left! <br />{' '}
            {"Don't"} miss it!
          </div>
        </div>
        <button className="w-36 text-sm rounded-2xl ring-1 ring-[#F35C7A] text-[#F35C7A] py-2 px-2 hover:bg-[#F35C7A] hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-white disabled:ring-none">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Add;
