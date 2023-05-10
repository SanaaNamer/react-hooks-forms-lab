import React, {
  useState
} from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({
  items,
  addItem
}) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items
    .filter((item) => {
      if (selectedCategory === "All") return true;

      return item.category === selectedCategory;
    })
    .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

  return ( <
    div className = "ShoppingList" >
    <
    ItemForm addItem = {
      addItem
    }
    /> <
    Filter search = {
      search
    }
    onSearchChange = {
      setSearch
    }
    onCategoryChange = {
      handleCategoryChange
    }
    /> <
    ul className = "Items" > {
      itemsToDisplay.map((item) => ( <
        Item key = {
          item.id
        }
        name = {
          item.name
        }
        category = {
          item.category
        }
        />
      ))
    } <
    /ul> < /
    div >
  );
}

export default ShoppingList;