import React, { FC, ChangeEvent, FormEvent, useState } from "react";
import "./styles.css";
import Pizza from "../models/Pizza";

interface AddPizzaForm {
  addPizza: (newPizza: Pizza) => void;
}

const initState = {
  title: "",
  price: "",
  img: "",
};

export const AddPizzaForm: FC<AddPizzaForm> = ({ addPizza }) => {
  const [newPizza, setNewPizza] = useState<{
    title: string;
    price: string;
    img: string;
  }>(initState);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewPizza({
      ...newPizza,
      [name]: value,
    });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, price, img } = newPizza;
    if (title && price && img) {
      addPizza({
        title,
        price: Number(price),
        img,
        id: Date.now(),
      });
      setNewPizza(initState);
    }
  };

  console.log("newpizza>", newPizza);
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="название"
        onChange={handleChange}
        value={newPizza.title}
      />
      <input
        name="price"
        type="text"
        placeholder="стоимость"
        onChange={handleChange}
        value={newPizza.price}
      />
      <input
        name="img"
        type="text"
        placeholder="изображение"
        onChange={handleChange}
        value={newPizza.img}
      />
      <button type="submit"> + Добавить в меню</button>
    </form>
  );
};
