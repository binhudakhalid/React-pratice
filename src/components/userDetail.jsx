import React, { useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Item = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {};

  return (
    <div>
      <h1>Item</h1>
    </div>
  );
};

export default Item;
