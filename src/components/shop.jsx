import React, { useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Shop = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch("https://api.github.com/users");
    const Item = await data.json();

    console.log(Item);
    setItems(Item);
  };

  return (
    <div>
      <span>Shop Page</span>
      {items.map(item => (
        <h1 key={item.id}>
          <Link to={`/shop/${item.id}`}> {item.login}</Link>
        </h1>
      ))}
    </div>
  );
};

export default Shop;
