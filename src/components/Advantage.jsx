// eslint-disable-next-line react/prop-types
const Advantage = ({icon, text}) => {
  return (
    <div className="flex items-center gap-4 w-64">
        <div className="text-green-600">{icon}</div>
        <div className="font-semibold text-2xl text-gray-400">{text}</div>
    </div>
  )
}

export default Advantage