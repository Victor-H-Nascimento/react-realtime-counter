import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CounterPage from "./pages/CounterPage";
import HomePage from "./pages/HomePage";
import Kitchen from "./pages/Kitchen";
import Orders from "./pages/Orders";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/hello" element={<HomePage />} />
        <Route path="/contador" element={<CounterPage />} />
        <Route path="/" element={<Orders />} />
        <Route path="/cozinha" element={<Kitchen />} />
      </Routes>
    </Router>
  );
};

export default App;
