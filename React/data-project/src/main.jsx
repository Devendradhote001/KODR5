import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "./pages/layouts/AuthLayout.jsx";
import Login from "./pages/AuthPages/Login.jsx";
import Register from "./pages/AuthPages/Register.jsx";
import MainLayout from "./pages/layouts/MainLayout.jsx";
import HomePage from "./pages/MainPages/HomePage.jsx";
import ProductPage from "./pages/MainPages/ProductPage.jsx";
import UserPage from "./pages/MainPages/UserPage.jsx";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./context/AuthContext.jsx";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";
import UserLayout from "./pages/layouts/UserLayout.jsx";
import CreateUser from "./pages/UserPages/CreateUser.jsx";
import History from "./pages/UserPages/History.jsx";
import AllUser from "./pages/UserPages/AllUser.jsx";

let router = createBrowserRouter([
  {
    path: "/",
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

  {
    path: "/main",
    element: <ProtectedRoute />,
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
            path: "products",
            element: <ProductPage />,
          },
          {
            path: "users",
            element: <UserLayout />,
            children: [
              {
                index: true,
                element: <AllUser />,
              },
              {
                path: "create",
                element: <CreateUser />,
              },
              {
                path: "history",
                element: <History />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />,
    <ToastContainer />
  </AuthProvider>,
);
