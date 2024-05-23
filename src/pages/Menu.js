import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";

function Menu() {
  return (
    <div>
      <div className="menu">
        <h1 className="menuTitle">Our Services</h1>
        <div className="menuList">
          {MenuList.map((menuItem, key) => {
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
      <div>
        <h4 className="services">
          We heal a variety of sexual and physical conditions through medicinal
          plants.
        </h4>
      </div>
    </div>
  );
}

export default Menu;
