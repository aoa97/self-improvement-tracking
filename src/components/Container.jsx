const Container = ({ children, className, ...otherProps }) => {
  return (
    <div className={`ml-[50px] p-5 md:ml-[70px]  ${className ? className : ""}`}>
      {children}
    </div>
  );
};

export default Container;
