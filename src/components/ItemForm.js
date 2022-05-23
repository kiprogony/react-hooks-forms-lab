import React, { useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSumbit }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce")

  function nameChange(event) {
    setName(event.target.value);
  }

  function categoryChange(event) {
    setCategory(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();
    onItemFormSumbit({
      id: uuid(),
      name,
      category,
    });
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
         type="text"
         name="name" 
         value={name} 
         onChange={nameChange}
        />
      </label>

      <label>
        Category:
        <select
         name="category"
         value={category}
         onChange={categoryChange}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
