import { useState } from "react";
import { Button } from "./components/Button/Button";
interface ExpandableTextProps {
  children: string;
  maxChars?: number;
}
export const ExpandableText = ({
  children,
  maxChars = 100,
}: ExpandableTextProps) => {
  const [isExpanded, setExpand] = useState(false);

  const shouldTruncate = maxChars < children.length;

  const handleExpand = () => {
    setExpand(!isExpanded);
  };

  return (
    <div className="text-gray-700 dark:text-white">
      {isExpanded
        ? children
        : shouldTruncate
        ? children.slice(0, isExpanded ? children.length : maxChars) + "..."
        : children}
      {shouldTruncate && (
        <Button onClick={handleExpand}>
          {isExpanded ? "Show less" : "Show more"}
        </Button>
      )}
    </div>
  );
};
