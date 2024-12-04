import React, { FC, useState } from "react";
import { AddPizzaForm } from "./components/AddPizzaForm";
import { DisplayPizza } from "./components/DisplayPizza";
import Pizza from "./models/Pizza";
import "./App.css";

type Order = {
  title: string;
  quantity?: number;
};

const App: FC = () => {
  const [pizzasList, setPizzasList] = useState<Pizza[]>([]);
  const addPizza = (newPizza: Pizza) => {
    setPizzasList([...pizzasList, newPizza]);
  };
  const updatePizza = (newPizza: Pizza) => {
    setPizzasList(
      pizzasList.map((pizza) => (pizza.id === newPizza.id ? newPizza : pizza))
    );
  };
  console.log("pizzaslist>", pizzasList);
  return (
    <div className="App">
      <div className="wrap">
        <span className="heading">Наша пицерия</span>
        <AddPizzaForm addPizza={addPizza} />
        <DisplayPizza pizzasList={pizzasList} />
      </div>
    </div>
  );
};

export default App;
