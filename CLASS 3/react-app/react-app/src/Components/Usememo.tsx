// import { useRef, useState } from "react";

// function Usememo() {
//   const [name, setName] = useState("");
//   //   const [rendercount, setRendercount] = useState(0);
//   const renderCount = useRef(0);

//   function focus() {
//     console.log(renderCount.current);
//     renderCount.current.focus();
//   }

//   let HandleChange = (e) => {
//     let text = String(e.target.value);
//     setName(text);
//   };

//   return (
//     <>
//       <div>
//         Your input:-
//         <input
//           ref={renderCount}
//           type="text"
//           width={5}
//           height={6}
//           placeholder="enter"
//           onChange={HandleChange}
//         />
//       </div>
//       <div>
//         My name is {name} and it render {name.length} times
//       </div>
//       <div>
//         <button onClick={focus}>upperCase</button>
//       </div>
//     </>
//   );
// }

// export default Usememo;
