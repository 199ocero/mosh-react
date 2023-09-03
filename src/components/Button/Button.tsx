import { ReactNode } from "react";
import styles from "./Button.module.css";
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
    <button
      type="button"
      onClick={onClick}
      className={styles["btn-" + buttonType]}
    >
      {children}
    </button>
  );
};
