// @ts-nocheck
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "@/store/index.js";
import App from "./App";
import Loadding from "@/components/loadding";
import indexdbHelper from "@/utils/indexdb";
import "./index.css";
indexdbHelper.init().then(() => {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <HashRouter>
      <Provider store={store}>
        <Suspense fallback={<Loadding />}>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </Suspense>
      </Provider>
    </HashRouter>
  );
});
