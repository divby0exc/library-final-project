// Reuse from UserView?
const OrderColumn = () => {
  const decBtn = () => {};
  const incBtn = () => {};
  const orderBooks = () => {};

  return (
    <div>
      <ul className="tc">
        <p className="border bg-gray-200 text-4xl font-extrabold p-7 m-4">
          Availability
        </p>
        <div className="flex justify-center flex-column">
          <span>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={decBtn}
            >
              -
            </button>
            <p className="numOfOrders"></p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={incBtn}>
              +
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={orderBooks}>
              Order
            </button>
          </span>
        </div>
      </ul>
    </div>
  );
};

export default OrderColumn;
