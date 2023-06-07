import BookTitle from '../components/Shared/BookTitle';
import BookAuthor from '../components/Shared/BookAuthor';
import SearchQuery from "../components/Shared/SearchQuery";
import Availability from '../components/Shared/Availability';
import WhoAmI from "../components/Shared/WhoAmI";
import OrderColumn from '../components/Shared/OrderColumn';

const UserHome = () => {
    return (
        <div>
        <div className="container md:mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
          <WhoAmI />
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
          <OrderColumn />
        </div>
      </div>
    );
};

export default UserHome;