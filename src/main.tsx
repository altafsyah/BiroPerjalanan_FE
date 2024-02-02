import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { authRoutes, protectedRoutes } from "./routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([...authRoutes, protectedRoutes]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
