import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { authRoutes, protectedRoutes } from "./routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([...authRoutes, protectedRoutes]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </React.StrictMode>,
);
