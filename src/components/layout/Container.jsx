const Container = ({ children, className, ...otherProps }) => {
  return (
    <div
      className={`flex-1 ml-[60px] p-5 lg:ml-[240px] xs:ml-0 ${className ? className : ""}`}
      {...otherProps}
    >
      {children}
    </div>
  );
};

export default Container;
