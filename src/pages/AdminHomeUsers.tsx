import WhoAmI from "../components/Shared/WhoAmI";
import SearchUsername from "../components/AdminComponents/UsersView/SearchUsername";
import ActionCol from "../components/AdminComponents/UsersView/ActionCol";
import PurchasesCol from "../components/AdminComponents/UsersView/PurchasesCol";
import Username from "../components/AdminComponents/UsersView/UsernameCol";
import Role from "../components/AdminComponents/UsersView/RoleCol";
import { useState } from "react";
import AdminHomeBooks from "./AdminHomeBooks";

const AdminHome = () => {
  const [view, setView] = useState(false);

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
        <SearchUsername />
      </div>
      <div className="container mx-auto flex justify-end gap-2 mt-2">
        <button
          onClick={() => setView(true)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Books
        </button>
        {view ? (
          <>
            return <AdminHomeBooks />
          </>
        ) : null}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Username
        </button>
      </div>
      <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10 flex flex-row justify-around">
        <Username />
        <Role />
        <PurchasesCol />
        <ActionCol />
      </div>
    </div>
  );
};

export default AdminHome;
