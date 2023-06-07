import React from "react";

const WhoAmI = () => {
    return (
        <div className="tr">
            <span>Browsing as guest...</span><br />
          <button className="py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm">
            Sign in
          </button>
        </div>
    );
};

export default WhoAmI;