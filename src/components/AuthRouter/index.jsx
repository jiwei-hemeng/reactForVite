// @ts-nocheck
import React from "react";
import { connect } from "react-redux";
import { useMemo, Suspense } from "react";
import { Navigate } from "react-router-dom";
import Loadding from "@/components/loadding";
function AuthRouter(props) {
  if(props.title) {
    document.title = props.title
  }
  const isLogin = useMemo(() => !!props.token, [props.token]);
  return (
    <Suspense fallback={<Loadding />}>
      {!props.auth || (props.auth && isLogin) ? (
        <props.element />
      ) : (
        <Navigate to={`/login?url=/index/${props.path}`} />
      )}
    </Suspense>
  );
}
const mapStateToProps = (state, ownProps) => {
  return {
    token: state.token,
  };
};
// 操作共享的数据
const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(AuthRouter);
