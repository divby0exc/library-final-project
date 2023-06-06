import React from 'react';

const App = () => {
  return (
    <div>
    <div className='container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10'>
        <div className='tr'>
        <button className="py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm">Sign in</button>
        </div>
        <div className='tc'>
        <h1 className="col-start-1 row-start-2 mt-4 max-w text-4xl font-extrabold tracking-tight text-slate-900 sm:text-7xl xl:max-w">Library</h1>
        </div>
        
    </div>
    <div className=''>
            <input type="text" placeholder='Search query...' className='rounded-xl shadow border p-4'/>
        </div>
    </div>
  );
};

export default App;
