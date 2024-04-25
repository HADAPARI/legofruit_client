import { Outlet } from "react-router-dom"
import ProtectedRoute from "./ProtectedRoute"

const Root = () => {
    return (
      <div className="w-screen h-screen flex">
              <Outlet/>
      </div>
    )
  }
  
  export default Root