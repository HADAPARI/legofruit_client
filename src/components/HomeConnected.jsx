import Middle from "./Middle";
import SideBar from "./SideBar";

const HomeConnected = () => {
  return (
    <div className="px-2 py-10 bg-gray-100 flex">
      <SideBar/>
      <Middle/>
    </div>
  );
};

export default HomeConnected;
