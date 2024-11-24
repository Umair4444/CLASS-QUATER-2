import { useState, useEffect } from "react";

export default function Timer() {
  //   const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     let interval = setInterval(() => {
  //       setCount(count + 1);
  //     }, 1000);
  //     console.log("mounting", count);

  //     return () => {
  //       clearInterval(interval);
  //       console.log("unmounting", count);
  //     };
  //   }, [count]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${ref}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  });

  const [ref, setRef] = useState("posts");
  const [items, setItems] = useState([]);

  return (
    <>
      {/* <div>current count is {count}</div> */}

      <div className="btn">
        <button
          onClick={() => {
            setRef("posts");
          }}
        >
          Posts
        </button>
      </div>

      <div className="btn">
        <button
          onClick={() => {
            setRef("users");
          }}
        >
          Users
        </button>
      </div>

      <div className="btn">
        <button
          onClick={() => {
            setRef("comments");
          }}
        >
          Comments
        </button>
      </div>

      <h1>{ref}</h1>

      {items.map((items) => {
        return <pre>{JSON.stringify(items)}</pre>;
      })}
    </>
  );
}
