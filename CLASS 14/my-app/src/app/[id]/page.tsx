import React from "react";

const DynamicBooks = (props: any) => {
  console.log(props.params.id);
  return (
    <div className="container py-60 m-auto text-5xl shadow-2xl text-center h-screen ">
      DynamicBooks
      <div>
        {props.params.id}
      </div>
    </div>
  );
};

export default DynamicBooks;
