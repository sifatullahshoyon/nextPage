import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div>
      {/* Header */}
      <Header />
      <Outlet />
      {/* Footer */}
    </div>
  );
};

export default App;
