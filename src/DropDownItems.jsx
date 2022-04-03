import React from 'react'
import DropDownMenu from './DropDownMenu';

const DropDownItems = ({ subCategory, dropdown,depthLevel }) => {
    //  depthLevel = depthLevel + 1;
    //  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";

  return (
    <ul className={`dropdown ${dropdown ? "show" : ""}`}>
      {subCategory.map((subCategory, index) => (
          <DropDownMenu key={ index}items={subCategory} depthLevel={depthLevel} />
      ))}
    </ul>
  );
};

export default DropDownItems