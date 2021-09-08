import { useState } from "react";

export function UseOrders() {
   const [orders, setOrders] = useState([]);
   return { orders, setOrders };
}