import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  buttonType?: "info" | "danger" | "success" | "warning" | "dark";
  onClick?: () => void;
}
export const Button = ({
  children,
  buttonType = "info",
  onClick,
}: ButtonProps) => {
  return (
    <button onClick={onClick} type="button" className={`btn-${buttonType}`}>
      {children}
    </button>
  );
};
