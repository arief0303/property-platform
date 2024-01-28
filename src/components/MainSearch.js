import React from "react";

const MainSearch = ({ Component, ...props }) => {
  return (
    <div className="flex justify-center items-center w-3/4 z-10 flex-col sm:flex-row">
      <div role="tablist" className="tabs tabs-boxed m-4 max-w-xs">
        <a role="tab" className="tab">
          Buy
        </a>
        <a role="tab" className="tab tab-active">
          Sell
        </a>
        <a role="tab" className="tab">
          Rent
        </a>
      </div>
      <Component {...props} />
    </div>
  );
};

export default MainSearch;
