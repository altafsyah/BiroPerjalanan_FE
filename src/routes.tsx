import Layout from "./pages/layout";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Home from "./pages/dashboard/home";
import Tourist from "./pages/dashboard/tourist";
import { redirect, useNavigate } from "react-router-dom";
import { getUserAuth, getUserData } from "./modules/servcies/auth_service.ts";
import { IUser } from "./modules/types/user";

const authRoutes = [
  {
    path: "/login",
    element: <Login />,
    loader: async () => {
      const userAuth = await getUserAuth();
      if (userAuth) {
        return redirect("/");
      }
      return null;
    },
  },
  {
    path: "/register",
    element: <Register />,
    loader: async () => {
      const userAuth = await getUserAuth();
      if (userAuth) {
        return redirect("/");
      }
      return null;
    },
  },
];

const protectedRoutes = {
  element: <Layout />,
  loader: async () => {
    const response: IUser = await getUserData();
    if (response) return response;
    return redirect("/login");
  },
  children: [
    { path: "/", element: <Home /> },
    {
      path: "/tourist/:id",
      element: <Tourist />,
    },
  ],
};

export { authRoutes, protectedRoutes };
