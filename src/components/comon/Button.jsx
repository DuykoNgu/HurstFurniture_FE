import React from "react";

const Button = ({
  children,
  onClick,
  variant = "primary",
  size = "medium",
  className = "",
  type = "button",
}) => {
  const baseClasses =
    "font-medium rounded transition-all duration-300 inline-flex items-center justify-center";

  const variantClasses = {
    primary: "bg-black text-white hover:bg-gray-800",
    secondary: "bg-white text-black border border-black hover:bg-gray-100",
    outline:
      "bg-transparent text-black border border-black hover:bg-black hover:text-white",
  };

  const sizeClasses = {
    small: "text-xs px-3 py-1",
    medium: "text-sm px-4 py-2",
    large: "text-base px-6 py-3",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
