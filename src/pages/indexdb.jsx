// @ts-nocheck
import React, { useRef, useEffect } from "react";
import IndexDb from "@/utils/indexdb";
export default function Indexdb() {
  async function getData () {
    const users = await IndexDb.readAll("global");
    const routers = await IndexDb.readAll("routers");
    console.log(users, routers)
  }
  async function addData() {
    await IndexDb.save({id: Date.now(), name: "name" + parseInt(Math.random() * 100), path: "path"}, "routers")
  }
  return (
    <div>
      <button onClick={addData}>添加数据</button>
      <button onClick={getData}>查询数据</button>
    </div>
  );
}
