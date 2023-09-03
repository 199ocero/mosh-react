import { useState } from "react";

function ListGroup() {
  let items = ["Italy", "France", "United Kingdom", "Netherlands"];
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1 className="text-3xl my-2 font-bold text-gray-700 dark:text-white">
        List Group
      </h1>
      {items.length === 0 && (
        <p className="dark:text-white text-gray-700">No items found.</p>
      )}
      <ul className="w-full text-sm font-medium text-gray-900 bg-white  dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {items.map((item, index) => (
          <li
            key={item}
            onClick={() => setSelectedIndex(index)}
            className={
              selectedIndex === index
                ? "list-group-item-active"
                : "list-group-item"
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
