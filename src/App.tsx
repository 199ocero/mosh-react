import ListGroup from "./components/ListGroup/ListGroup";
import { Alert } from "./components/Alert/Alert";
import { Button } from "./components/Button/Button";
import { useState } from "react";
function App() {
  let items = ["Italy", "France", "United Kingdom", "Netherlands"];
  const [showAlert, setShowAlert] = useState(false);

  const handleShowAlert = () => {
    setShowAlert(!showAlert);
  };

  return (
    <>
      <div className="px-5 space-y-5">
        <div>
          <ListGroup items={items} heading="Countries" />
        </div>
        <Button buttonType="info" onClick={handleShowAlert}>
          {showAlert ? "Hide Alert" : "Show Alert"}
        </Button>
        {showAlert && (
          <Alert alertType="info">
            <span>
              Info alert! Change a few things up and try submitting again.
            </span>
          </Alert>
        )}
      </div>
    </>
  );
}

export default App;
