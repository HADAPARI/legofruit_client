import Root from "./components/Root";
import Activation from "./pages/Activation";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./pages/profile";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { set } from "./redux/reducers/userSlice";

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
          element: <Home />,
        },
        {
          path: "signup",
          element: <Signup />,
        },
        {
          path: "signin",
          element: <Signin />,
        },
        {
          path: "account/activation/:token",
          element: <Activation />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
