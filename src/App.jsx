// @ts-nocheck
import React, { Suspense } from "react";
import { useMemo } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { router } from "@/router";
import Loadding from "@/components/loadding";
import "@/App.css";
function App({ token }) {
  const isLogin = useMemo(() => !!token, [token]);
  return (
    <div className="App">
      <Routes>
        {router.map((item) => {
          return (
            <Route
              key={item.path}
              path={item.path}
              element={
                !item.auth || (item.auth && isLogin) ? (
                  <Suspense fallback={<Loadding />}>
                    <item.element />
                  </Suspense>
                ) : (
                  <Suspense fallback={<Loadding />}>
                    <Navigate to={`/login?url=${item.path}`} />
                  </Suspense>
                )
              }
            />
          );
        })}
      </Routes>
    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
  return {
    token: state.token,
  };
};
// 操作共享的数据
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    add: () => {
      dispatch({
        type: "add",
        value: 1,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
