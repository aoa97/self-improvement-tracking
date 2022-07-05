const Button = ({ className, title, icon, ...otherProps }) => {
  return (
    <button
      {...otherProps}
      className={`flex items-center justify-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-orange rounded-md hover:bg-orange-400 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-80 ${className}`}
    >
      {icon}
      <span className={`mx-1 ${icon ? "relative top-0.5" : ""}`}>{title}</span>
    </button>
  );
};

export default Button;
