import React, { createContext, useState } from "react";

import bags from "../assets/bags.jpg";
import bangles from "../assets/bangles.jpg";
import bracelets from "../assets/bracelets.jpg";
import earring from "../assets/earring.jpg";
import rings from "../assets/rings.jpg";
import shades from "../assets/shades.jpg";
import shoes from "../assets/shoes.jpg";
import watch from "../assets/watch.jpg";
import dress from "../assets/dress.jpg";
import jeans from "../assets/jeans.jpg";
import necklace from "../assets/necklace.jpg";
import skirt from "../assets/skirt.jpg";

export const ProductContext = createContext();

const ProductsContextProvider = (props) => {
  const [products] = useState([
    { id: 1, name: "Bag", price: 500, image: bags, status: "hot" },
    { id: 2, name: "Bangles", price: 180, image: bangles, status: "new" },
    { id: 3, name: "Bracelet", price: 350, image: bracelets, status: "new" },
    { id: 4, name: "Earrings", price: 200, image: earring, status: "new" },
    { id: 5, name: "Ring", price: 750, image: rings, status: "hot" },
    { id: 6, name: "Shades", price: 500, image: shades, status: "new" },
    { id: 7, name: "Shoe", price: 1000, image: shoes, status: "hot" },
    { id: 8, name: "Watch", price: 1500, image: watch, status: "new" },
    { id: 9, name: "Dress", price: 2000, image: dress, status: "new" },
    { id: 10, name: "Ripped Jeans", price: 1750, image: jeans, status: "hot" },
    { id: 11, name: "Necklace", price: 850, image: necklace, status: "hot" },
    { id: 12, name: "Skirt", price: 475, image: skirt, status: "new" },
  ]);
  return (
    <ProductContext.Provider value={{ products }}>
      {props.children}
    </ProductContext.Provider>
  );
};
export default ProductsContextProvider;
