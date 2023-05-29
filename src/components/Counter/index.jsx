import { StyledCounter } from "./style";
//import { useState } from "react";

export const Counter = ({ counter, sum, sub }) => {
   //const [state, setState] = useState("");
   const toMoney = counter.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
   });

   console.log(toMoney);

   return (
      <StyledCounter>
         <div className="counter">{counter}</div>
         <button onClick={sum}>+</button>
         <button onClick={sub}>-</button>
      </StyledCounter>
   );
};
