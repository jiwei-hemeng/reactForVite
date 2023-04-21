// @ts-nocheck
import React from "react";
import { connect } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
function Login({ setToken }) {
  const navigate = useNavigate();
  // const { url } = useParams()
  const [ searchParams] = useSearchParams();
  const url = searchParams.get("url");
  for (var key of searchParams.keys()) {
    console.log(key, searchParams.get(key));
  }
  return (
    <main>
      <h2>Login</h2>
      <button
        onClick={() => {
          const token = Date.now();
          setToken(token);
          sessionStorage.setItem("token", token);
          setTimeout(() => {
            if (url) {
              navigate(url, {
                query: {
                  id: 333
                },
              });
            } else {
              navigate("/");
            }
          }, 200);
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
