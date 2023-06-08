import { useState } from "react";
import EditModelForm from "./EditModelForm";

const ActionColumn = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <div>
      <ul className="flex flex-col items-center">
        <p className="border bg-gray-200 text-4xl font-extrabold p-7 m-4">
          Action
        </p>
        <li className="flex gap-2">
          <button
            onClick={() => setShowEditModal(true)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Edit
          </button>
          {showEditModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/* Content */}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/* Header */}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-3xl font-semibold">Edit user</h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 hover:opacity-2 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowEditModal(false)}
                      >
                        <span>x</span>
                      </button>
                    </div>
                    {/* Body */}
                    <EditModelForm />
                    {/* Footer */}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        onClick={() => setShowEditModal(false)}
                      >
                        Discard
                      </button>
                      <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        onClick={() => setShowEditModal(false)}
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
          <button
            onClick={() => setShowDeleteModal(true)}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Delete
          </button>
          {showDeleteModal ? (
        <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/* Content */}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/* Header */}
              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <h3 className="text-3xl font-semibold">
                  Delete user
                </h3>
                <button className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 hover:opacity-2 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowDeleteModal(false)}>
                  <span>
                    x
                  </span>
                </button>
              </div>
              {/* Body */}
              <div className="relative p-6 flex-auto">
                <p className="my-4 text-slate-500 text-lg leading-relaxed">
                  You want to delete username
                </p>
              </div>
              {/* Footer */}
              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                <button className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                onClick={() => setShowDeleteModal(false)}>
                  Abort
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black">
        </div>
    </>
  ) : null}
        </li>
      </ul>
    </div>
  );
};

export default ActionColumn;
