// @ts-nocheck
import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import useQuery from "@/hook/useQuery";
function Login({ setToken }) {
  const navigate = useNavigate();
  const [query] = useQuery();
  const { url } = query;
  return (
    <main>
      <h2>Login</h2>
      <button
        onClick={() => {
          const token = Date.now();
          setToken(token);
          if (url) {
            navigate(url, {
              query: {
                id: 333,
              },
            });
          } else {
            navigate("/");
          }
        }}
      >
        授权登录
      </button>
    </main>
  );
}
const mapStateToProps = (state, ownProps) => {
  return {};
};
// 操作共享的数据
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setToken: (token) => {
      dispatch({
        type: "setToken",
        value: token,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
