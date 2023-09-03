function ListGroup() {
  let items = ["Italy", "France", "United Kingdom", "Netherlands"];

  return (
    <>
      <h1 className="text-3xl my-2 font-bold text-gray-700 dark:text-white">
        List Group
      </h1>
      {items.length === 0 && (
        <p className="dark:text-white text-gray-700">No items found.</p>
      )}
      <ul className="w-full text-sm font-medium text-gray-900 bg-white  dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {items.map((item) => (
          <li
            key={item}
            onClick={() => console.log(item)}
            className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600"
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
