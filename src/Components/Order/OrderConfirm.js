import React, { useContext } from 'react';
import { Context } from '../Functions/context';
import styled from 'styled-components';
import { Overlay } from '../Style/OverlayStyle';
import { OrderTitle, Total, TotalPrice } from '../Style/OverlayStyle';
import { ButtonAdd } from '../Style/ButtonAdd';
import { projection } from '../Functions/secondaryFunction';
import { totalPriceItems } from '../Functions/secondaryFunction';
import { formatCurrency } from '../Functions/secondaryFunction';
import { ref, set } from "firebase/database";

const Modal = styled.div`
      background-color: white;
      width: 600px;
      padding: 30px;
`;
const Text = styled.h3`
      text-align: center;
      margin-bottom: 30px;
`;

const rulesData = {
   itemName: ['name'],
   price: ['price'],
   count: ['count'],
   toppings: ['topping', arr => arr.filter(obj => obj.checked).map(obj => obj.name),
      arr => arr.length ? arr : 'no toppings'],
   choices: ['choice', item => item ? item : 'no choices'],
};

const sendOrder = (database, orders, authentication) => {
   const newOrder = orders.map(projection(rulesData));
   set(ref(database, 'orders'), {
      nameClient: authentication.displayName,
      email: authentication.email,
      order: newOrder
   });
};

export const OrderConfirm = () => {
   const {
      orders: { orders, setOrders },
      auth: { authentication },
      orderConfirm: { setOpenOrderConfirm },
      database
   } = useContext(Context);

   const total = orders.reduce((result, order) =>
      totalPriceItems(order) + result, 0);

   const thanksForOrder = () => {
      return (
         <Modal>
            <OrderTitle>{authentication.displayName}</OrderTitle>
            <Text>Спасибо за Ваш заказ!</Text>
         </Modal>
      )
   };

   return (
      <Overlay>
         <Modal>
            <OrderTitle>{authentication.displayName}</OrderTitle>
            <Text>Осталось только подтвердить ваш заказ</Text>
            <Total>
               <span>Итого</span>
               <TotalPrice>{formatCurrency(total)}</TotalPrice>
            </Total>
            <ButtonAdd
               onClick={() => {
                  sendOrder(database, orders, authentication);
                  setOrders([]);
                  setOpenOrderConfirm(false);
                  setTimeout(() => {
                     thanksForOrder();
                  }, 2000)
               }}>
               Подтвердить
            </ButtonAdd>
         </Modal>
      </Overlay>
   )
};