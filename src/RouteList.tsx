import React from "react";
import { Routes, Route } from "react-router-dom";

const RouteList = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<div>hello world</div>} />
        <Route path="/hello" element={<div>hello</div>} />
      </Route>
    </Routes>
  );
};

export default RouteList;
