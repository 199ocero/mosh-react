import ListGroup from "./components/ListGroup";
function App() {
  let items = ["Italy", "France", "United Kingdom", "Netherlands"];

  return (
    <div>
      <ListGroup items={items} heading="Countries" />
    </div>
  );
}

export default App;
