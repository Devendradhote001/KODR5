import { use, useState } from "react";
import Comp1 from "./components/Comp1";

const App = () => {
  const [amountLao, setAmountLao] = useState(0);

  return (
    <div className="text-red-600">
      <h1>Hello - {amountLao}</h1>
      <Comp1 setAmountLao={setAmountLao} />
    </div>
  );
};

export default App;
