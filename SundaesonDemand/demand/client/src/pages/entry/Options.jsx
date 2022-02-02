import React, { useState, useEffect } from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import ScoopOption from "./ScoopOptions";

export default function Options(optionsType) {
  const [items, setItems] = useState([]);
  // optiosType is 'scoops' or 'toppings'

  //when you are wating for samothing to apper asynchronously on the page you must use await findBy

  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionsType}`)
      .then((response) => setItems(response.data))
      .catch((error) => {
        //TODO: handle error response
      });
  }, [optionsType]);

  //TODO: replaca 'null' with 'ToppingOption' when available
  const ItemComponent = optionsType === "scoops" ? ScoopOption : null;

  const optionsItem = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));
  return <Row>{ItemComponent}</Row>;
}
