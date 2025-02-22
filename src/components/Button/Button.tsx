import { cn } from "../../utils/utils";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

const Button = ({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "rounded-full font-bold transition duration-200 ease-in-out font-body",
        size === "sm" && "px-3 py-1 text-sm",
        size === "md" && "px-4 py-2 text-base",
        size === "lg" && "px-6 py-3 text-lg",
        variant === "primary" &&
          "bg-black text-white border-white border-2 hover:bg-white hover:text-black ",
        variant === "secondary" &&
          "bg-white text-black border-black border-2 hover:bg-black hover:text-white",
        variant === "outline" &&
          "border border-gray-500 text-gray-700 hover:bg-gray-100",
        className // Allow custom styles
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
