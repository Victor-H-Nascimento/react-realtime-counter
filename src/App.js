import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CounterPage from "./pages/CounterPage";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contador" element={<CounterPage />} />
      </Routes>
    </Router>
  );
};

export default App;
