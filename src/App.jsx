// @ts-nocheck
import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { router } from "@/router";
import Index from "@/pages/index";
import Home from "@/pages/expenses";
import NotFound from "@/pages/NotFound";
import Login from "@/pages/login";
import AuthRouter from "@/components/AuthRouter/index";
import indexdbHelper from "@/utils/Indexdb.js";
import "@/App.css";
function App() {
  const [routerList, setRouterList] = useState([]);
  function setRouter(list) {
    const routerlist = [];
    for (let i = 0; i < list.length; i++) {
      const item = list[i];
      routerlist.push({
        auth: item.auth === "1",
        title: item.title,
        path: item.path,
        element: router[item.name],
      });
    }
    setRouterList(routerlist);
  }
  async function getRouter() {
    const list = await indexdbHelper.getDataByIndex(
      "routers",
      "moduleType",
      "routersList"
    );
    setRouter(list);
  }
  async function fetchRouter() {
    try {
      const resp = await fetch("/router.json");
      const routers = await resp.json();
      await indexdbHelper.removeDataByIndex(
        "routers",
        "moduleType",
        "routersList"
      );
      routers.map((item) => {
        indexdbHelper.save({ ...item, moduleType: "routersList" }, "routers");
      });
      setRouter(routers);
    } catch (error) {
      getRouter();
    }
  }
  useEffect(() => {
    fetchRouter();
    getRouter();
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/index/home" />}></Route>
        <Route path="/index" element={<Index />}>
          <Route
            path="home"
            index
            element={<AuthRouter title="首页" auth={false} element={Home} />}
          ></Route>
          {routerList.map((item) => {
            return (
              <Route
                path={item.path}
                key={item.path}
                element={<AuthRouter {...item} />}
              />
            );
          })}
        </Route>
        <Route
          path="/login"
          element={<AuthRouter title="登录" auth={false} element={Login} />}
        ></Route>
        <Route
          path="*"
          element={<AuthRouter title="404" auth={false} element={NotFound} />}
        />
      </Routes>
    </div>
  );
}
export default App;
