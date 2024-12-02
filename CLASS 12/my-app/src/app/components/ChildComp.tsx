import React from "react";

// props is pre-define keyword in nextjs
const ChildComp = (props: any) => {
  console.log(props);
  return (<>
    <div className="flex flex-col justify-center space-y-2 bg-slate-500 items-center h-screen">
      <h1 className="text-3xl font-bold mb-3">Child Comp</h1>
      <h1 className="text-3xl font-bold mb-3">{props.name}</h1>
    </div>
  </>
  );
};

export default ChildComp;
