// import { JSXElementConstructor, ReactElement, ReactNode, useState } from "react";
import { useState } from "react";
import "../style/Count_btn.css";

const Count = () => {
  // const [count, setCount] = useState(0);

  // const [num, setNum] = useState(0);
  // const [result, setResult] = useState("");

  // function Checkeven() {
  //   const newNum = num + 1;
  //   setNum(newNum);

  //   newNum % 2 == 0 ? setResult("Even") : setResult("Odd"); // checks even or odd

  //   // newNum % 5 === 0 ? setResult("Table of 5") : setResult("I dont't Know");
  //   // console.log(newNum);

  //   // this will increase num by 2
  //   // setNum((prev)=> prev +1) ;
  //   // setNum((prev)=> prev +1) ;
  // }

  const [text, setText] = useState("");
  const [input, setInput] = useState("");

  console.log("input", input);

  const upperCase = () => {
    let uppbtn = input.toUpperCase();
    setText(uppbtn);
    setInput(uppbtn);
  };

  function HandleChange(e) {
    let value = String(e.target.value);
    let text = value;
    console.log("text", text);
    console.log("value", value);

    setInput(value);
  }

  const Clear = () => {
    let clearbtn = "";
    setText(clearbtn);
    setText(clearbtn);
    console.log(clearbtn);
    console.log(1, text);
  };

  // function HandleChange(e) {
  //   const value = parseInt(e.target.m);

  //   value % 2 === 0 ? setResult("input-even") : setResult("input-odd");
  //   setNum(value);
  // }

  return (
    <div id="count-btn">
      <textarea
        name=""
        id=""
        rows={10}
        cols={70}
        placeholder="Enter text here"
        onChange={HandleChange}
        value={input}
      ></textarea>
      Summary
      <div>{text}</div>
      <div>
        <button onClick={upperCase}>UpperCase</button>
        <button onClick={Clear}>Clear</button>
      </div>
    </div>
  );
};

export default Count;

// Current Count is {count}
// <div id="inc-dec">
//   {/* <button id="inc-btn" onClick={() => setCount(count + 1)}>Increament {props.items} By +1</button> */}
//   {/* <button id="dec-btn" onClick={() => setCount(count - 1)}>Decreament {props.items} By -1</button> */}
// </div>
// <div className="even-odd">
//   {/* check if it is even or odd */}
//   My num is {num} and it is {result}
//   <button id="even" onClick={Checkeven}>
//     Click Here
//   </button>
// </div>

// <div className="input">
// My number is {num} and it is {result}
// <input type="text" placeholder="Your Number" onChange={HandleChange} />
// <button onClick={btn}>Click to get Result</button>
// </div>
