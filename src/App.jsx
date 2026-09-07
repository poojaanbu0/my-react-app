// 

import { Routes, Route } from "react-router-dom";
import Login from "./Route.jsx";

function Dashboard() {
  return <h1>Dashboard Page</h1>;
}

function Ap() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default Ap;