import React, { useState } from "react";
import { categoryItems } from "./data";
import DropDownItems from "./DropDownItems";

const DropDownMenu = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);
  const handleClick = () => setDropdown((prev) => !prev);
  return (
    <li className="dropdown-menu">
      {items.subCategory ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={handleClick}
          >
            {items.title}{" "}
          </button>
          <DropDownItems
            subCategory={items.subCategory}
            dropdown={dropdown}
            depthLevel={depthLevel}
          />
        </>
      ) : (
        <button>
          <a href="/#">{items.title}</a>
        </button>
      )}
    </li>
  );
};

export default DropDownMenu;
