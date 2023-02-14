import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./ComponentLevel/nav/NavBar";
import { Home } from "./ComponentLevel/Pages/Home";
import { About } from "./ComponentLevel/Pages/About";
import { Blog } from "./ComponentLevel/Pages/Blog";
import { ContactUs } from "./ComponentLevel/Pages/ContactUs";
import {Detail} from "./ComponentLevel/Pages/Detail"
export const RouteData = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
