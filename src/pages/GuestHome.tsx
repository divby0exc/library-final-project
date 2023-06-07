import React from "react";
import BookTitle from '../components/BookTitle';
import BookAuthor from '../components/BookAuthor';
import SearchQuery from "../components/SearchQuery";
import Availability from '../components/Availability';

const GuestHome = () => {
    <div>
      <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
        <div className="tr">
            <span>Browsing as guest...</span><br />
          <button className="py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm">
            Sign in
          </button>
        </div>
        <div className="tc">
          <h1 className="col-start-1 row-start-2 mt-4 max-w text-4xl font-extrabold tracking-tight text-slate-900 sm:text-7xl xl:max-w">
            Library
          </h1>
        </div>
      </div>
      <SearchQuery />
      <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10 flex flex-row justify-around">
        <BookTitle />
        <BookAuthor />
        <Availability />
      </div>
    </div>
};

export default GuestHome;