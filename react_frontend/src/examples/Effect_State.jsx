import React, { useEffect, useState } from "react";

export default function Effect_State() {
  const [counter, setCounter] = useState(0);

  const handleCounter = () => {
    setCounter((prevState) => prevState + 1);
    console.log("counter dentro de handleCounter: ", counter);
  };

  useEffect(() => {
    console.log("counter dentro de effect: ", counter);
  }, [counter]);
  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={() => handleCounter()}>INCREMENTAR</button>
    </>
  );
}
