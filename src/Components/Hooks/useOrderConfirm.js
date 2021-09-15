import { useState } from "react";

export const useOrderConfirm = (startCount) => {
   const [openOrderConfirm, setOpenOrderConfirm] = useState(false);
   return { openOrderConfirm, setOpenOrderConfirm };
}