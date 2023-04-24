import { useState, useImperativeHandle, forwardRef } from "react";
import React from "react";
function Child(props, ref) {
  const [num, setNum] = useState(0);
  function addNum() {
    setNum((num) => {
      return num + 1
    });
  }
  useImperativeHandle(ref, () => {
    return {
      addOne: addNum,
    };
  });
  
  return <div>{num}</div>;
}
export default forwardRef(Child);
