import React from "react";

const Header = () => {
  return (
    <header className="inline top-0 left-0 z-50 p-0">
      <div
        className="flex items-center justify-between px-10 py-5 w-screen"
        style={{
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(0, 0, 0, 0.25)",
        }}
      >
        <div className="flex items-center">
          <img className="h-10" src="/next.svg" alt="logo" />
          {/* <h1 className="ml-2 text-2xl font-bold text-white">
            Wireframe Header
          </h1> */}
        </div>
        <div className="flex items-center space-x-4 text-white"></div>
      </div>
    </header>
  );
};

export default Header