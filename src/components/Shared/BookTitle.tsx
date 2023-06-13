import React from "react";
interface IBooks {
  title: string;
  author: string;
  quantity: number;
}

const BookTitle = () => {
    return (
        <div>
        <ul className="tc">
          <p className="border bg-gray-200 text-4xl font-extrabold p-7 m-4">Book title</p>
          <li>Lorum ipsum</li>
        </ul>
        </div>
    );
}

export default BookTitle;