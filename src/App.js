import React, { useState, createContext } from "react";
import { Route } from "react-router-dom";
import data from "./data";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

export const componentContext = createContext();

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    // add the given item to the cart
    console.log("item ", item);
	setCart(cart => [...cart, item]);
  };
  console.log("data ", cart);
  return (
    <div className="App">
      <Navigation cart={cart} />

      {/* Routes */}

      <Route exact path="/">
        <Products products={products} addItem={addItem} />
      </Route>

      <Route path="/cart">
        <ShoppingCart cart={cart} />
      </Route>
    </div>
  );
}

export default App;
