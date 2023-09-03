import { useState } from "react";
import styles from "./ListGroup.module.css";

interface ListGroupProps {
  items: string[];
  heading: string;
}
function ListGroup({ items, heading }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1 className="my-2 text-3xl font-bold text-gray-700 dark:text-white">
        {heading}
      </h1>
      {items.length === 0 && (
        <p className="text-gray-700 dark:text-white">No items found.</p>
      )}
      <ul className="w-full text-sm font-medium text-gray-900 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {items.map((item, index) => (
          <li
            key={item}
            onClick={() => setSelectedIndex(index)}
            className={
              selectedIndex === index
                ? styles["list-group-item-active"]
                : styles["list-group-item"]
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
