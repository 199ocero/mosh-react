import { ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
  alertType?: "info" | "danger" | "success" | "warning" | "dark";
}
export const Alert = ({ children, alertType = "info" }: AlertProps) => {
  return (
    <div className={"items-center p-4 mb-4 rounded-lg alert-" + alertType}>
      {children}
    </div>
  );
};
