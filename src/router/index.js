// @ts-nocheck
import { lazy } from "react";
export const router = [
  {
    path: "home",
    auth: false,
    element: lazy(() => import("@/pages/expenses.jsx")),
  },
  {
    path: "invoices",
    auth: true,
    element: lazy(() => import("@/pages/invoices.jsx")),
  },
];
