import React from "react";

const layout = ({ children, english, urdu }) => {
  console.log();

  const user = {
    username: "ALi",
    languagepreference: "Eng",
  };

  return (
    <>
      <div>layout Content</div>
      <div>layout Content {user.languagepreference == "Eng" && english}</div>

      {urdu}
      <div>layout Content</div>
      {english}
      <div>layout Content</div>
      {children}
    </>
  );
};

export default layout;
