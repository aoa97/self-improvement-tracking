import React from "react";

function ErrorMessage({ children, className, ...props }) {
  return (
    <div {...props} className={`text-error text-sm ${className}`}>
      {children}
    </div>
  );
}

export default ErrorMessage;
