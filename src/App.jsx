import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Update from "./pages/Update";
import Create from "./pages/Create";
import Read from "./pages/Read";

const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/update/:id" element={<Update />} />
            <Route path="/read/:id" element={<Read />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
