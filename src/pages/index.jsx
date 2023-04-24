// @ts-nocheck
import React from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./index.module.css"
export default function Index() {
  return (
    <div>
      <div>
        <Link className={styles.alink} to="/">首页</Link>
        <Link className={styles.alink} to="/index/invoices">Invoices</Link>
        <Link className={styles.alink} to="/index/vDom">vDom</Link>
      </div>
      <Outlet />
    </div>
  );
}
