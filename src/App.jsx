// import { useSelector, useDispatch } from "react-redux";
import Root from "./components/Root";
import Activation from "./pages/Activation";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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

  return (
    <RouterProvider router={router} />
    // <div>
    //   <div>
    //     <div>
    //       <button
    //         className="btn btn-primary"
    //         aria-label="Increment value"
    //         onClick={() => dispatch(increment())}
    //       >
    //         Increment
    //       </button>
    //       <span>{count}</span>
    //       <button
    //         className="btn btn-primary"
    //         aria-label="Decrement value"
    //         onClick={() => dispatch(decrement())}
    //       >
    //         Decrement
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default App;
