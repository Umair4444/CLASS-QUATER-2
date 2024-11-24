import React from "react";

const Usersid = ({ params }) => {
  // console.log("params", params.id);

  const userData = [
    { id: 1, username: "ali" },
    { id: 2, username: "umair" },
    { id: 3, username: "azhar" },
  ];

  // const id = params.id;

  const findUser = userData.find((user) => {
    return user.username == params.id;
    // console.log(user.username);
  });
  console.log(findUser?.username);

  return (
    <div>
      {/* <h1>My id is ---- {id} </h1> */}
      <h1>The data i am searching is {params.id} </h1>
      <h1>
        My Data from Array is :{" "}
        {findUser?.username ? findUser.username : "Not found"}
      </h1>

      <h1>Done</h1>
    </div>
  );
};

export default Usersid;
