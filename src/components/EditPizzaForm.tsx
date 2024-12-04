import React, { FC, ChangeEvent, FormEvent, useState } from "react";
import "./styles.css";
import Pizza from "../models/Pizza";

interface EditPizzaForm {
  data: Pizza;
}

export const EditPizzaForm: FC<EditPizzaForm> = ({ data }) => {
  const [editPizza, setEditPizza] = useState<Pizza>(data);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditPizza({
      ...editPizza,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, price, img } = editPizza;
    if (title && price && img) {
      console.log("editPizza>", editPizza);
    }
  };

  console.log("editpizza>", editPizza);
  return (
    <form className="edit-form" onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="название"
        onChange={handleChange}
        value={editPizza.title}
      />
      <input
        name="price"
        type="text"
        placeholder="стоимость"
        onChange={handleChange}
        value={editPizza.price}
      />
      <input
        name="img"
        type="text"
        placeholder="изображение"
        onChange={handleChange}
        value={editPizza.img}
      />
      <button type="submit"> Подтвердить</button>
    </form>
  );
};
