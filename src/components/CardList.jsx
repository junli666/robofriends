import React from "react";
import Card from "./Card.jsx";

export default function CardList({ robots }) {
  return (
    <div>
      {robots.map((c) => {
        return <Card key={c.id} id={c.id} name={c.name} email={c.email}></Card>;
      })}
    </div>
  );
}
