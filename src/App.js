import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CounterPage from "./pages/CounterPage";
import HomePage from "./pages/HomePage";
import Orders from "./pages/Orders";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contador" element={<CounterPage />} />
        <Route path="/pedido" element={<Orders />} />
      </Routes>
    </Router>
  );
};

export default App;
