// devsnest lecs.
// revised 1,

import React, { useState, useEffect } from "react";

function ProductApi() {
  console.log("products component called");
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  function getAllCategories() {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())

      .then((json) => {
        console.log(json);
        setCategories(json);
      });
  }

  function getProductByCategory() {
    fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
      .then((res) => res.json())
      .then((prods) => {
        console.log("products fetched", prods);
        setItems(prods);
      });
  }
  //   console.log(categories);

  useEffect(() => {
    console.log("useEffect without dependency called.");
    getAllCategories();
  }, []);

  useEffect(() => {
    console.log(
      "useEffect with dependency will be called when the category is modified.",
      selectedCategory
    );
    if (selectedCategory) {
      getProductByCategory();
    }
  }, [selectedCategory]);

  function handleChange(e) {
    setSelectedCategory(e.target.value);
  }

  return (
    <div>
      {/* creating a dropdown menu. */}
      <select name="categories" id="categories" onChange={handleChange}>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category.toUpperCase()}
          </option>
        ))}
      </select>

      <section className="product">
        <h1>{selectedCategory}</h1>
        {items.map((prod) => {
          return (
            <section className="product-item" key={prod.id}>
              <img
                style={{ height: 200, width: 200, objectFit: "contain" }}
                src={prod.image}
                alt={prod.title}
              />
              <section>
                <h2>{prod.title}</h2>
                {/* <h3>{prod.description}</h3> */}
              </section>
            </section>
          );
        })}
      </section>
    </div>
  );
}

export default ProductApi;
