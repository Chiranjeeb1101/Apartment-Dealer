import React from "react";
import {Routes, Route } from "react-router-dom";
import Home from "../src/Screen/home";
import ApartmentsPage from "../src/Screen/apartments-page";
import ApartmentFiles from "./Screen/apartment-files";
import NewsDetails from "../src/Screen/News";
import NewsData from "../src/Screen/News-Info";



const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apartments" element={<ApartmentsPage />} />
        <Route path="/penthouses" element={<ApartmentFiles />} />
        <Route path="/apartments/details" element={<ApartmentFiles />} />
        <Route path="/news" element={<NewsDetails />} />
        <Route path="/news-details" element={<NewsData />} />
      </Routes>
  );
};
export default App;