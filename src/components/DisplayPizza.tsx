import React, { FC } from "react";
import Pizza from "../models/Pizza";
import { SinglePizza } from "./SinglePizza";

interface DisplayPizzaProps {
  pizzasList: Pizza[];
}

export const DisplayPizza: FC<DisplayPizzaProps> = ({ pizzasList }) => {
  return (
    <div className="container">
      {pizzasList.map((pizza) => {
        return <SinglePizza key={pizza.id} pizza={pizza} />;
      })}
    </div>
  );
};
