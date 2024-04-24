// eslint-disable-next-line react/prop-types
const Bull = ({ text,type, children }) => {
  return (
    <div className="relative">
      <div className="absolute -top-6 -end-4">
        <div className={`relative rounded-badge w-fit px-3 py-1 text-xs text-white bull after:absolute after:size-2.5 after:start-1 after:-bottom-1 after:bg-${type} bg-${type}`}>
          {text}
        </div>
      </div>
      {children}
    </div>
  );
};

export default Bull;
