import React from "react";

const Gridbox = () => {
  return (
    <div>
      <div className="text-center text-2xl grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 ">
        <div className="bg-slate-400 h-40 m-4 rounded-md ">1</div>
        <div className="bg-green-400 h-40 m-4 rounded-md ">2</div>
        <div className="bg-yellow-400 h-40 m-4 rounded-md ">3</div>
        <div className="bg-blue-400 h-40 m-4 rounded-md ">4</div>
        <div className="bg-pink-400 h-40 m-4 rounded-md ">5</div>
        <div className="bg-purple-400 h-40 m-4 rounded-md ">6</div>
        <div className="bg-sky-400 h-40 m-4 rounded-md ">7</div>
      </div>
    </div>
  );
};

export default Gridbox;
