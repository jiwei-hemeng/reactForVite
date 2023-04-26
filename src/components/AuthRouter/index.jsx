// @ts-nocheck
import React from "react";
import { connect } from "react-redux";
import { useMemo } from "react";
import { Navigate } from "react-router-dom";
function AuthRouter(props) {
  if (props.title) {
    document.title = props.title;
  }
  const isLogin = useMemo(() => !!props.token, [props.token]);
  if (!props.auth || (props.auth && isLogin)) {
    return <props.element />;
  }
  return <Navigate to={`/login?url=/index/${props.path}`} />;
}
const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};
export default connect(mapStateToProps)(AuthRouter);
