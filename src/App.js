import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";
import { ProductContext } from "./contexts/ProductContext";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    // add the given item to the cart
    console.log("item ", item);
    setCart((cart) => [...cart, item]);
  };
  console.log("data ", cart);
  return (
    //  <Products products={products} addItem={addItem} />
    <div className="App">
      <Navigation cart={cart} />

      {/* Routes */}

      <Route exact path="/">
        <ProductContext.Provider value={{ prod: products, fun: addItem }}>
          <Products />
        </ProductContext.Provider>
      </Route>

      <Route path="/cart">
        <ShoppingCart cart={cart} />
      </Route>
    </div>
  );
}

export default App;
