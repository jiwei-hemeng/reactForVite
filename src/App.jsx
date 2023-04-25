// @ts-nocheck
import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { router } from "@/router";
import Index from "@/pages/index";
import Home from "@/pages/expenses";
import NotFound from "@/pages/NotFound";
import Login from "@/pages/login";
import AuthRouter from "@/components/AuthRouter/index";
import "@/App.css";
function App() {
  const [routerList, setRouterList] = useState([]);
  async function getRouter() {
    const resp = await fetch("http://localhost:3000/routerList");
    const result = await resp.json();
    const routerlist = result.map((item) => {
      return {
        ...item,
        path: item.path.replace("/index/", ""),
        element: router[item.name],
      };
    });
    setRouterList(routerlist);
  }
  useEffect(() => {
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
