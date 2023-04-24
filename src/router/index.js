// @ts-nocheck
import { lazy } from "react";
export const router = {
  invoices: lazy(() => import("@/pages/invoices.jsx")),
  vDom: lazy(() => import("@/pages/vDom.jsx")),
};
