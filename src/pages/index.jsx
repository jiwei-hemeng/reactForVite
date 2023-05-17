// @ts-nocheck
import React from "react";
import { Link, Outlet } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import styles from "./index.module.css";
dayjs.extend(relativeTime);
export default function Index() {
  console.log("当前工作时间：", dayjs().format("YYYY-MM-DD HH:mm:ss"));
  console.log("当前工作时间2：", dayjs().from(dayjs("1996-04-22")));
  return (
    <div>
      <div>
        <Link className={styles.alink} to="/">
          首页
        </Link>
        <Link className={styles.alink} to="/index/invoices">
          Invoices
        </Link>
        <Link className={styles.alink} to="/index/vDom">
          vDom
        </Link>
        <Link className={styles.alink} to="/index/Indexdb">
          Indexdb
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
