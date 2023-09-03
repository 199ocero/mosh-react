import ListGroup from "./components/ListGroup";
import { Alert } from "./components/Alert";
function App() {
  let items = ["Italy", "France", "United Kingdom", "Netherlands"];

  return (
    <>
      <div className="space-y-5">
        <div>
          <ListGroup items={items} heading="Countries" />
        </div>
        <div>
          <Alert />
        </div>
      </div>
    </>
  );
}

export default App;
