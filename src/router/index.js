// @ts-nocheck
import { lazy } from "react";
const router = [
  {
    path: "/",
    auth: false,
    element: lazy(() => import("@/pages/expenses.jsx")),
  },
  {
    path: "/invoices",
    auth: true,
    element: lazy(() => import("@/pages/invoices.jsx")),
  },
  {
    path: "/login",
    auth: false,
    element: lazy(() => import("@/pages/login.jsx")),
  },
];

export { router };
