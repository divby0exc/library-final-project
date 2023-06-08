const EditModelForm = () => {
  return (
    <form className="w-full max-w-lg">
      <div className="flex flex-col -mx-3 mb-6">
        <div className="w-full px-3 mb-6 md:mb-0 mt-4">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="title"
            type="text"
            placeholder="Title"
          />
        </div>
        <div className="w-full px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="author"
          >
            Author
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="author"
            type="text"
            placeholder="Author"
          />
        </div>
        <div className="w-full px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="quantity"
          >
            Quantity
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="quantity"
            type="text"
            placeholder="Quantity"
          />
        </div>
      </div>
    </form>
  );
};

export default EditModelForm;
