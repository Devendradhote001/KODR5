import React from "react";

const Comp3 = ({ setAmountLao }) => {
  let amount = 900;
  return (
    <div>
      <h1>Comp 3</h1>
      <p>Amount is - {amount}</p>
      <button
        onClick={() => {
          setAmountLao(amount);
        }}
      >
        Bhej do
      </button>
    </div>
  );
};

export default Comp3;
