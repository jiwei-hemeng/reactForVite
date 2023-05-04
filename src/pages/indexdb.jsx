// @ts-nocheck
import React, { useRef, useEffect } from "react";
import IndexDb from "@/utils/indexdb";
export default function Indexdb() {
  async function getData () {
    const users = await IndexDb.readAll("global");
    console.log(users)
  }
  async function addData() {
    await IndexDb.save({id: Date.now(), name: "name", path: "path"})
  }
  return (
    <div>
      <button onClick={addData}>添加数据</button>
      <button onClick={getData}>查询数据</button>
    </div>
  );
}
