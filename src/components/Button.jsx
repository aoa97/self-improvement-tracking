const Button = ({ className, title, icon, ...otherProps }) => {
  return (
    <button
      {...otherProps}
      className={`rounded-md bg-orange text-white font-semibold flex justify-center p-2 ${className}`}
    >
      {icon}
      {title}
    </button>
  );
};

export default Button;
