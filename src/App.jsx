import Root from "./components/Root";
import Activation from "./pages/Activation";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./pages/Profiles";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import HomeConnected from "./components/HomeConnected";
import ProtectedRoute from "./components/ProtectedRoute";
import { set } from "./redux/reducers/userSlice";

import FirstPageResetPassword from "./pages/FirstPageResetPassword";
import SecondPageResetPassword from "./pages/SecondPageResetPassword";
import ThirdPageResetPassword from "./pages/ThirdPageResetPassword";
import Subscription from "./pages/Subscription";

const App = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/user/isconnected`, { withCredentials: true })
      .then((res) => {
        dispatch(set(res.data));
      })
      .catch(() => {
        console.log("Pas OK!");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: (
            <ProtectedRoute defaultPage={<Home />}>
              <HomeConnected />
            </ProtectedRoute>
          ),
        },
        {
          path: "signup",
          element: (
            <ProtectedRoute defaultPage={<Signup />}>
              <HomeConnected />
            </ProtectedRoute>
          ),
        },
        {
          path: "signin",
          element: (
            <ProtectedRoute defaultPage={<Signin />}>
              <HomeConnected />
            </ProtectedRoute>
          ),
        },
        {
          path: "account/activation/:token",
          element: <Activation />,
        },
        {
          path: "profile",
          element: (
            <ProtectedRoute defaultPage={<Signin />}>
              <Profile />
            </ProtectedRoute>
          ),
        },
        {
          path: "emailverified",
          element: <SecondPageResetPassword />,
        },
        { path: "newpassword", element: <ThirdPageResetPassword /> },
        {
          path: "resetpassword",
          element: <FirstPageResetPassword />,
        },
        { path: "suscribe", element: <Subscription /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
