import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import Landing from "./component/landing";
import Books from "./component/books";
import DetailBooks from "./component/detailbooks";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout";
import NotFound from "./component/error/NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="books" element={<Books />} />
          <Route path="books/:id" element={<DetailBooks />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    {/* <Landing/> */}
    {/* <Books/>
    <DetailBooks/> */}
  </>
);
