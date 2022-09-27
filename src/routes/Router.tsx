import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Home from "./Home";
import Search from "./Search";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:id" element={<Search />} />
          <Route path="/photos/:photoId" element={<Home />} />
          {/* modal을 라우터로 하려면 어떻게? 위에 그대로 띄우려면 어떻게? */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
