import { useState } from "react";
import reactLogo from "@/assets/react.svg";
import viteLogo from "@/assets/vite.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@/App.css";
import Expenses from "@/pages/expenses.jsx";
import Invoices from "@/pages/invoices.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Expenses />} />
        <Route path="/invoices" element={<Invoices />} />
      </Routes>
    </div>
  );
}

export default App;
