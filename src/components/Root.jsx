import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import { useSelector } from "react-redux";

const Root = () => {
  const user = useSelector((state) => state.user);

  return (
    <>
      <Header />
      <Outlet />
      {!user && <Footer />}
    </>
  );
};

export default Root;
