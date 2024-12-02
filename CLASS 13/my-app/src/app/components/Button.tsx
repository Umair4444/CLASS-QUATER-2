import React from "react";

const Button = (props) => {
  //   console.log(props);
  return (
    <div className="flex items-center justify-center mb-2">
      <button
        className={` w-36 px-4 ${props.bgColor} py-2 text-lg font-medium rounded-lg`}
      >
        {props.btnText}
      </button>
    </div>
  );
};

export default Button;
