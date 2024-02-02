import Layout from "./pages/layout";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Home from "./pages/dashboard/home";

const authRoutes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
];

const protectedRoutes = {
  element: <Layout />,
  children: [{ path: "/", element: <Home /> }],
};

export { authRoutes, protectedRoutes };
