const Container = ({ children, className, ...otherProps }) => {
  return (
    <div
      className={`ml-[60px] p-5 lg:ml-[240px] lg:px-14 xs:ml-0 ${className ? className : ""}`}
      {...otherProps}
    >
      {children}
    </div>
  );
};

export default Container;
