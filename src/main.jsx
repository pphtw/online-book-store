import React from 'react'
import ReactDOM from "react-dom/client";
import "./index.css";
import BookListing from "./components/pages/BookListing.jsx";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import NavBar from "./components/UI/organisms/NavBar.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BookListing />,
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar />
    <RouterProvider router={router} />
  </React.StrictMode>
);
