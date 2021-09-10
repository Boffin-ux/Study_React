import { useState } from "react";

export const useChoices = () => {
   const [choice, setChoice] = useState();

   const changeChoices = event => {
      setChoice(event.target.value);
   }

   return { choice, changeChoices };
}