export default function Button({
  className,
  title,
  icon,
  color,
  mode,
  ...otherProps
}) {
  let style = "bg-orange hover:bg-orange-400 text-white focus:ring-orange-300";

  if (color === "secondary") {
    style = "bg-gray-200 hover:bg-gray-100 text-black focus:ring-gray-300";
  }

  if (mode === "link") {
    return (
      <button {...otherProps} className="text-md text-orange font-medium">
        {icon}
        <span className={`mx-1 ${icon ? "relative top-0.5" : ""}`}>
          {title}
        </span>
      </button>
    );
  }

  return (
    <button
      {...otherProps}
      className={`flex items-center justify-center px-2 py-2 font-medium tracking-wide capitalize transition-colors duration-200 transform rounded-md focus:outline-none focus:ring focus:ring-opacity-80 ${style} ${className}`}
    >
      {icon}
      <span className={`mx-1 ${icon ? "relative top-0.5" : ""}`}>{title}</span>
    </button>
  );
}
