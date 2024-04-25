// import { useSelector, useDispatch } from "react-redux";
import Root from "./components/Root";

import Activation from "./pages/Activation";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
// import { decrement, increment } from "./redux/reducers/counterSlice";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./pages/profile";

const App = () => {
  // const count = useSelector((state) => state.counter.value);
  // const dispatch = useDispatch();

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
