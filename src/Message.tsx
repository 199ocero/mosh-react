function Message() {
  const name = "";
  if (name)
    return <h1 className="text-red-500 text-3xl font-bold">Hello {name}</h1>;
  return <h1 className="text-red-500 text-3xl font-bold">Hello World</h1>;
}

export default Message;
