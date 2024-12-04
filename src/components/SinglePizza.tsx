import React, { FC, useState } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import Pizza from "../models/Pizza";
import { EditPizzaForm } from "./EditPizzaForm";

interface SinglePizzaProps {
  pizza: Pizza;
}

export const SinglePizza: FC<SinglePizzaProps> = ({ pizza }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const handleToggleEdit = () => {
    setEdit(!edit);
  };
  return (
    <div className="pizza">
      <img src={`/images/${pizza.img}`} alt={pizza.title}></img>
      <h2>{pizza.title}</h2>
      <span>{pizza.price} P</span>
      <div className="pizza-controls">
        <AiFillEdit />
        <AiFillDelete />
      </div>
      {edit ? <EditPizzaForm data={pizza} /> : null}
    </div>
  );
};
