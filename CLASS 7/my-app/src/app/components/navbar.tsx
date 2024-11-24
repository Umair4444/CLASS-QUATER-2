import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-row items-start justify-between">
        <div>Logo</div>
        <div>
          <ul className="flex gap-3 items-center justify-between ">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
          </ul>
        </div>
        <div>
          <button>Get Hired</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
