import ListGroup from "./components/ListGroup/ListGroup";
import { Alert } from "./components/Alert/Alert";
import { Button } from "./components/Button/Button";
import { Like } from "./components/Like/Like";
import { useState } from "react";
function App() {
  let items = ["Italy", "France", "United Kingdom", "Netherlands"];
  const [showAlert, setShowAlert] = useState(false);
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John Doe",
    },
  });
  const [pizza, setPizza] = useState({
    name: "Spicy Margherita",
    toppings: ["Mushroom"],
  });
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      {
        id: 1,
        title: "Product 1",
        quantity: 1,
      },
      {
        id: 2,
        title: "Product 2",
        quantity: 1,
      },
    ],
  });

  const handleShowAlert = () => {
    setShowAlert(!showAlert);
  };

  const handleGame = () => {
    setGame({ ...game, player: { ...game.player, name: "Jane Doe" } });
  };

  const handlePizza = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Onion"] });
  };

  const handleCart = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) => {
        return item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item;
      }),
    });
  };

  return (
    <>
      <div className="px-5 space-y-5">
        <ListGroup items={items} heading="Countries" />
        <Like size={30} likeType="success" />
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
        <div>
          <p className="text-gray-700 dark:text-white">
            This is the original player name: {game.player.name}
          </p>
          <Button buttonType="info" onClick={handleGame}>
            Change Player Name
          </Button>

          <p className="text-gray-700 dark:text-white">
            This is the pizza toppings:{" "}
            {pizza.toppings.map((topping) => {
              return topping + " ";
            })}
          </p>
          <Button buttonType="info" onClick={handlePizza}>
            Add Toppings
          </Button>

          <p className="text-gray-700 dark:text-white">
            This is total quantity:{" "}
            {cart.items.map((item) => item.quantity).reduce((a, b) => a + b)}
          </p>
          <Button buttonType="info" onClick={handleCart}>
            Add Quantity
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;
