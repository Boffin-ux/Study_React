import React from "react";
import styled from "styled-components";

const ToppingWrap = styled.div`
   column-count: 2;
   column-gup: 5px;
   max-width: 90%;
   margin: 0 auto;
`;
const ToppingLabel = styled.label`
   cursor: pointer;
   display: block;
`;
const ToppingCheckbox = styled.input`
   cursor: pointer;
   margin-right: 5px;
`;

export const Toppings = ({ toppings, checkToppings }) => {
   return (
      <>
         <h3>Добавки</h3>
         <ToppingWrap>
            {toppings.map((item, i) => (
               <ToppingLabel key={i}>
                  <ToppingCheckbox
                     type="checkbox"
                     checked={item.checked}
                     onChange={() => checkToppings(i)}
                  />
                  {item.name}
               </ToppingLabel>
            ))}
         </ToppingWrap>
      </>
   )
};