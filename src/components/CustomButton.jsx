import { ArrowRight } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const CustomButton = ({text, link}) => {
  return (
    <Link to={link} className="btn bg-green-600 border-green-600 hover:bg-green-700 pe-1 text-white w-fit rounded-badge">
        <span>{text}</span>
        <span className="bg-white text-black rounded-full p-2"><ArrowRight size={20} /></span>
    </Link>
  )
}

export default CustomButton