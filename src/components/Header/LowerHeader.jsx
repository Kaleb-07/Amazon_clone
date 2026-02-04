import React from "react";
import Classes from "./Header.module.css"; // Make sure this path is correct
import { AiOutlineMenu } from "react-icons/ai"

function LowerHeader() {
  return (
    <div className={Classes.lower_header}>
      <ul className={Classes.nav_list}>
        <li className={Classes.nav_item}>
          <AiOutlineMenu />
          All</li>
        <li className={Classes.nav_item}>Best Sellers</li>
        <li className={Classes.nav_item}>Customer Service</li>
        <li className={Classes.nav_item}>Today's Deals</li>
        <li className={Classes.nav_item}>Registry</li>
        <li className={Classes.nav_item}>Gift Cards</li>
        <li className={Classes.nav_item}>Sell</li>
      </ul>
    </div>
  );
}

export default LowerHeader;
