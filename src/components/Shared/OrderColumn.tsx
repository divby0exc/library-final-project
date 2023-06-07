import React, { useState } from "react";

const OrderColumn = () => {
  const [num, setNum] = useState(0);
  const handleDecrease = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };
  const handleIncrease = () => {
    setNum(num + 1);
  };
  const orderBooks = () => {};

  return (
    <div>
      <ul className="tc">
        <p className="border bg-gray-200 text-4xl font-extrabold p-7 m-4">
          Order
        </p>
        <li>
          <span className="flex gap-2 items-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleDecrease}
            >
              -
            </button>
            <p className="numOfOrders">{num}</p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleIncrease}
            >
              +
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={orderBooks}
            >
              Order
            </button>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default OrderColumn;
