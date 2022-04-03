import React from "react";
import { categoryItems } from "./data";
import DropDownItems from "./DropDownItems";
import DropDownMenu from "./DropDownMenu";

const DropDown = ({ items }) => {
    const depthLevel = 0;

    return (
      <ul className="menus">
        {categoryItems.map((menu, index) => (
          <DropDownMenu items={menu} depthLevel={depthLevel} />
        ))}
      </ul>
    );
};

export default DropDown;
