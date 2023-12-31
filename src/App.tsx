import ListGroup from "./components/ListGroup/ListGroup";
import { Alert } from "./components/Alert/Alert";
import { Button } from "./components/Button/Button";
import { Like } from "./components/Like/Like";
import { ExpandableText } from "./components/ExpandableText";
import { Form } from "./components/Form";
import { ExpenseList } from "./expense-tracker/components/ExpenseList";
import { ExpenseFilter } from "./expense-tracker/components/ExpenseFilter";
import { ExpenseForm } from "./expense-tracker/components/ExpenseForm";
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
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "Car",
      amount: 50,
      category: "Utilities",
    },
    {
      id: 2,
      description: "Bread",
      amount: 10,
      category: "Groceries",
    },
    {
      id: 3,
      description: "Eggs",
      amount: 3,
      category: "Groceries",
    },
  ]);

  const handleSelectedCategory = (category: string) => {
    setSelectedCategory(category);
  };
  const visibleExpenses = selectedCategory
    ? expenses.filter((item) => item.category === selectedCategory)
    : expenses;
  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((item) => item.id !== id));
  };
  const handleAddCategory = (expense: any) => {
    setExpenses([...expenses, { ...expense, id: expenses.length + 1 }]);
  };
  return (
    <>
      <div className="px-5 my-10 space-y-5">
        <ExpenseForm onSubmit={(expense) => handleAddCategory(expense)} />
        <ExpenseFilter
          onSelectedCategory={(category) => handleSelectedCategory(category)}
        />
        <ExpenseList expenses={visibleExpenses} onDelete={handleDelete} />
      </div>
      {/* <div className="px-5 my-20 space-y-5">
        <Form />
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
        <ExpandableText maxChars={250}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
          obcaecati! Maxime rem consequuntur eius quam sit commodi reiciendis
          nobis quasi quos. Enim sequi hic dicta iure itaque recusandae
          repudiandae quas suscipit accusantium quidem ea debitis earum quo
          provident sed facere doloremque culpa illum ratione, obcaecati, iusto
          explicabo quibusdam incidunt? Explicabo nisi accusamus vel beatae non
          voluptatum, quam quae deleniti corrupti id a quaerat pariatur aliquam
          quasi temporibus nostrum eaque corporis officia facilis aperiam
          tempore ipsa! Delectus, repellat ad voluptas sed odit nulla omnis quo
          voluptate! Sit accusantium amet non sunt fugiat possimus libero,
          perferendis, et nam pariatur dolor voluptates doloribus.
        </ExpandableText>
      </div> */}
    </>
  );
}

export default App;
