import { useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children, defaultPage }) => {
  const user = useSelector((state) => state.user);

  return <>{user ? <div>{ children }</div> : <div>{defaultPage}</div>}</>;
};

export default ProtectedRoute;
