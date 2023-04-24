import React from "react"
import { Link, Outlet } from "react-router-dom"
export default function Index () {
  return (
    <div>
      <div>
        <Link to="/">首页</Link>
        <Link to="/index/invoices">Invoices</Link>
      </div>
      <Outlet />
    </div>
      
  )
}