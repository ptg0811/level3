import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Detail from "../pages/Detail";
import Home from "../pages/Home";
import Edit from "../pages/Edit";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="/:id/edit" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
