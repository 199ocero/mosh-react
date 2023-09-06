import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import styles from "./Like.module.css";
import { useState } from "react";

interface LikeProps {
  size: number;
  likeType?: "info" | "danger" | "success" | "warning" | "dark";
}
export const Like = ({ size, likeType = "info" }: LikeProps) => {
  const [fill, setFill] = useState(false);

  let typeStyle = null;
  switch (likeType) {
    case "info":
      typeStyle = styles.likeInfo;
      break;
    case "danger":
      typeStyle = styles.likeDanger;
      break;
    case "success":
      typeStyle = styles.likeSuccess;
      break;
    case "warning":
      typeStyle = styles.likeWarning;
      break;
    default:
      typeStyle = styles.likeDark;
      break;
  }

  const handleIconClick = () => {
    setFill(!fill); // Toggle the fill state
  };

  return (
    <div>
      {fill ? (
        <AiFillLike
          className={typeStyle}
          size={size}
          onClick={handleIconClick}
        />
      ) : (
        <AiOutlineLike
          className={styles.like}
          size={size}
          onClick={handleIconClick}
        />
      )}
    </div>
  );
};
