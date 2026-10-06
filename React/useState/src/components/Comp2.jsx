import React from "react";
import Comp3 from "./Comp3";

const Comp2 = ({ setAmountLao }) => {
  return (
    <div>
      <h1>Comp 2</h1>

      <Comp3 setAmountLao={setAmountLao} />
    </div>
  );
};

export default Comp2;
