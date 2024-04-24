// eslint-disable-next-line react/prop-types
const Statistic = ({icon, number, title}) => {
  return (
    <div className="flex items-center gap-3">
        <div className="text-green-600">{icon}</div>
        <div className="text-white">
            <div className="text-3xl font-bold">{number}<span className="text-orange-500">+</span></div>
            <div>{title}</div>
        </div>
    </div>
  )
}

export default Statistic