import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="w-screen h-screen flex-col">
      <Outlet />
    </div>
  );
};

export default Root;
