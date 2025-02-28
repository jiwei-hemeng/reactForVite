// @ts-nocheck
import React, { useRef, useEffect } from "react";
import { db } from "@/utils/localforage";
import styles from "./indexdb.module.css";
export default function Indexdb() {
  async function getData() {
    const routers = await db.getItem("routers");
    const keys = await db.keys();
    console.log("routers", routers, keys);
  }
  async function addData() {
    await db.setItem("routerss", {
      // id: Date.now(),
      name: "name" + parseInt(Math.random() * 100),
      path: "path" + parseInt(Math.random() * 100),
      moduleType: Math.round(Math.random()),
    });
  }
  async function deleteData() {
    await db.removeItem("routerss");
  }
  return (
    <div className={styles.buttonGroup}>
      <button className={styles.buttonItem} onClick={addData}>
        添加数据
      </button>
      <button className={styles.buttonItem} onClick={getData}>
        查询数据
      </button>
      <button className={styles.buttonItem} onClick={deleteData}>
        删除数据
      </button>
    </div>
  );
}
