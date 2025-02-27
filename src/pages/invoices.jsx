import React, { useEffect, useState, useRef } from "react";
export default function Invoices() {
  return (
    <main>
      <h2>Invoices</h2>
      <Timer />
    </main>
  );
}

function Timer() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    // 清理函数，用于在组件卸载时清除定时器
    return () => clearInterval(interval);
  }, []); // 空依赖数组表示这个effect只在组件挂载时运行一次

  return <div>数字: {count}</div>;
}
