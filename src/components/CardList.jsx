import React from "react";
import Card from "./Card";

const CardList = ({ recipes }) => {
  return (
    <div>
      <section className="grid  grid-cols-2 px-40 gap-10 pb-10">
        {recipes.map((recipe) => (
          <Card key={recipe.id} cardInfo={recipe} />
        ))}
      </section>
    </div>
  );
};

export default CardList;
