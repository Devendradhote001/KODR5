import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../../features/auth/ui/pages/Login";
import Register from "../../features/auth/ui/pages/Register";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../../features/home/ui/pages/HomePage";
import SongList from "../../features/home/ui/pages/SongList";
import ProtectedRoutes from "./ProtectedRoutes";
import { api } from "../../config/api";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../features/auth/state/authSlice";
import PublicRoute from "./PublicRoute";
import { hydrateUserAction } from "../../features/auth/state/authAction";

const AppRoutes = () => {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(hydrateUserAction());
  }, []);

  let router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoute />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              index: true,
              element: <Login />,
            },
            {
              path: "register",
              element: <Register />,
            },
          ],
        },
      ],
    },

    {
      path: "/main",
      element: <ProtectedRoutes />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              index: true,
              element: <HomePage />,
            },
            {
              path: "songs/:name",
              element: <SongList />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
