import React, {
  useState
} from "react";
import {
  v4 as uuid
} from "uuid";

function ItemForm({
  addItem
}) {
  const [formData, setFormData] = useState({
    name: "",
    category: "Produce"
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    addItem({
      ...formData,
      id: uuid
    });
  }

  return ( <
    form className = "NewItem"
    onSubmit = {
      handleSubmit
    } >
    <
    label >
    Name:
    <
    input type = "text"
    name = "name"
    onChange = {
      handleChange
    }
    /> <
    /label>

    <
    label >
    Category:
    <
    select name = "category"
    onChange = {
      handleChange
    } >
    <
    option value = "Produce" > Produce < /option> <
    option value = "Dairy" > Dairy < /option> <
    option value = "Dessert" > Dessert < /option> <
    /select> <
    /label>

    <
    button type = "submit" > Add to List < /button> <
    /form>
  );
}

export default ItemForm;