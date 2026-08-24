import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    price: 20,
    image: "https://via.placeholder.com/150",
    category: "Air Purifying"
  },
  {
    id: 2,
    name: "Spider Plant",
    price: 15,
    image: "https://via.placeholder.com/150",
    category: "Air Purifying"
  },
  {
    id: 3,
    name: "Peace Lily",
    price: 18,
    image: "https://via.placeholder.com/150",
    category: "Air Purifying"
  },
  {
    id: 4,
    name: "Aloe Vera",
    price: 12,
    image: "https://via.placeholder.com/150",
    category: "Medicinal"
  },
  {
    id: 5,
    name: "Mint",
    price: 10,
    image: "https://via.placeholder.com/150",
    category: "Medicinal"
  },
  {
    id: 6,
    name: "Lavender",
    price: 14,
    image: "https://via.placeholder.com/150",
    category: "Medicinal"
  },
  {
    id: 7,
    name: "Rose",
    price: 25,
    image: "https://via.placeholder.com/150",
    category: "Flowering"
  },
  {
    id: 8,
    name: "Orchid",
    price: 30,
    image: "https://via.placeholder.com/150",
    category: "Flowering"
  },
  {
    id: 9,
    name: "Jasmine",
    price: 22,
    image: "https://via.placeholder.com/150",
    category: "Flowering"
  }
];

function ProductList() {
  const dispatch = useDispatch();
  const [addedItems, setAddedItems[ { useState } from "react";
";
"
 dToCart = plant => {
    dispatch(addToCart(plant));
    setAddedItems([...addedItems, plant.id]);
  };

  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/plants">Plants</Link> |{" "}
        <Link to="/cart">Cart</Link>
      </nav>

      <h1>Plants</h1>

      {["Air Purifying", "Medicinal", "Flowering"].map(category => (
        <div key={category}>
          <h2>{category}</h2>

          {plants
            .filter(plant => plant.category === category)
            .map(plant => (
              <div key={plant.id}>
                <img
                  src={plant.image}
                  alt={plant.name}
                  width="150"
                />

                <h3>{plant.s.includes(plant.id)}
                  onClick={() => handleAddToCart(plant)}
                >
                  {addedItems.includes(plant.id)
                    ? "Added"
                    : "Add to Cart"}
                </button>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
