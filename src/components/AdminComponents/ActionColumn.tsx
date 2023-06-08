const ActionColumn = () => {
  return (
    <div>
      <ul className="flex flex-col items-center">
        <p className="border bg-gray-200 text-4xl font-extrabold p-7 m-4">
          Action
        </p>
        <li className="flex gap-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Edit
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Delete
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ActionColumn;
