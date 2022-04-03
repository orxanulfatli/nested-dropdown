import { useState } from "react";
import { categoryItems } from "./data";
import DropDown from "./DropDown";


function App() {

  return (
    <div className="app">
      <DropDown items={categoryItems} />
    </div>
  );
}

export default App;
