import React from "react";
import { ProductList } from "../helpers/ProductList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";

function Products() {
  return (
    <div>
      <div className="menu">
        <h2 className="menuTitle">Our Products</h2>
        <div className="menuList">
          {ProductList.map((menuItem, key) => {
            return (
              <MenuItem
                key={key}
                image={menuItem.image}
                name={menuItem.name}
                price={menuItem.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Products;
