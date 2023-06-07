import BookTitle from "../components/Shared/BookTitle";
import BookAuthor from "../components/Shared/BookAuthor";
import SearchQuery from "../components/Shared/SearchQuery";
import Availability from "../components/Shared/Availability";
import WhoAmI from "../components/Shared/WhoAmI";
import OrderColumn from "../components/Shared/OrderColumn";
import ActionColumn from "../components/AdminComponents/ActionColumn";
import AddButton from "../components/AdminComponents/AddButton";
import React, { useState } from 'react';
import DeleteConfirmation from "../components/AdminComponents/DeleteConfirmation";

const AdminHome = () => {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  return (
    <div>
      <div className="container md:mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
        <WhoAmI />
        <div className="tc">
          <h1 className="hover:rotate-180 col-start-1 row-start-2 mt-4 max-w text-4xl font-extrabold tracking-tight text-slate-900 sm:text-7xl xl:max-w">
            Library
          </h1>
        </div>
      </div>
      <div className="container mx-auto flex justify-around gap-2">
        <SearchQuery />
        <AddButton />
      </div>
      <div className="container mx-auto flex justify-end gap-2 mt-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Books
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Username
        </button>
      </div>
      <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10 flex flex-row justify-around">
        <BookTitle />
        <BookAuthor />
        <Availability />
        <OrderColumn />
        <ActionColumn />
      </div>
    </div>
  );
};

export default AdminHome;
