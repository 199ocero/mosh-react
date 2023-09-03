import { ReactNode, useState } from "react";
import styles from "./Alert.module.css";

interface AlertProps {
  children: ReactNode;
  alertType?: "info" | "danger" | "success" | "warning" | "dark";
  dismissible?: boolean;
}
export const Alert = ({
  children,
  alertType = "info",
  dismissible = false,
}: AlertProps) => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissible && dismissed) {
    return null;
  }

  return (
    <>
      <div
        className={`flex items-center p-4 mb-4 rounded-lg ${
          styles["alert-" + alertType]
        }`}
      >
        {children}
        {dismissible && (
          <button
            onClick={() => setDismissed(true)}
            type="button"
            className={`ml-auto ${styles["alert-" + alertType + "-close"]}`}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        )}
      </div>
    </>
  );
};
