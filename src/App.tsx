import ListGroup from "./components/ListGroup";
import { Alert } from "./components/Alert";
function App() {
  let items = ["Italy", "France", "United Kingdom", "Netherlands"];

  return (
    <>
      <div className="space-y-5 px-5">
        <div>
          <ListGroup items={items} heading="Countries" />
        </div>
        <div>
          <Alert alertType="info">
            <span>
              Info alert! Change a few things up and try submitting again.
            </span>
          </Alert>
        </div>
      </div>
    </>
  );
}

export default App;
