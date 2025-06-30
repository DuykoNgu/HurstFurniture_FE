import React from "react";
import { CircleUser } from "lucide-react";
const LoginIcon = ({ onClick }) => {
  return (
    <button
      className="relative p-2 rounded-full group transition-colors duration-200"
      aria-label="Open cart"
      onClick={onClick}
    >
      <CircleUser
        size={24}
        className="transition-colors duration-200 group-hover:text-amber-500"
      />
    </button>
  );
};

export default LoginIcon;
