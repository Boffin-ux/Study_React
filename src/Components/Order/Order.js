import React from 'react';
import styled from 'styled-components';
import { ButtonAdd } from '../Style/ButtonAdd';
import { OrderListItem } from './OrderListItem';
import { totalPriceItems } from '../Functions/secondaryFunction';
import { formatCurrency } from '../Functions/secondaryFunction';
import { projection } from '../Functions/secondaryFunction';
import { ref, set } from "firebase/database";

const OrderStyled = styled.section`
   display: flex;
   flex-direction: column;
   position:fixed;
   top: 80px;
   background: #fff;
   width: 380px;
   height: calc(100% - 80px);
   box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
   padding: 20px;
`;
const OrderTitle = styled.h2`
   text-align: center;
   margin-bottom: 30px;
`;
const OrderContent = styled.div`
   flex-grow: 1;
   overflow-y: auto;
`;
const OrderList = styled.ul`
   padding-bottom: 20px;
`;
const Total = styled.div`
   display: flex;
   margin: 30px 35px;
   & span:first-child {
      flex-grow: 1;
   }
`;
const TotalPrice = styled.span`
   margin-left: 20px;
   margin-right: 20px;
   min-width: 65px;
   text-align: right;
`;
const EmptyList = styled.p`
   text-align: center;
`;

const rulesData = {
   itemName: ['name'],
   price: ['price'],
   count: ['count'],
   toppings: ['topping', arr => arr.filter(obj => obj.checked).map(obj => obj.name),
      arr => arr.length ? arr : 'no toppings'],
   choices: ['choice', item => item ? item : 'no choices'],
};

export const Order = ({ orders, setOrders, setOpenItem, authentication, logIn, database }) => {
   const sendOrder = () => {
      const newOrder = orders.map(projection(rulesData));
      set(ref(database, 'orders'), {
         nameClient: authentication.displayName,
         email: authentication.email,
         order: newOrder,
      })
         .then(() => {
            const clearOrders = [];
            setOrders(clearOrders);
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const deleteItem = index => {
      const newOrders = [...orders];
      newOrders.splice(index, 1);
      setOrders(newOrders);
   };

   const total = orders.reduce((result, order) =>
      totalPriceItems(order) + result, 0);

   const totalCounter = orders.reduce((result, order) =>
      order.count + result, 0);

   return (
      <OrderStyled>
         <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
         <OrderContent>
            {orders.length ?
               <OrderList>
                  {orders.map((order, i) => <OrderListItem
                     order={order}
                     key={i}
                     deleteItem={deleteItem}
                     index={i}
                     setOpenItem={setOpenItem}
                  />)}
               </OrderList> :
               <EmptyList>Список заказов пуст</EmptyList>}
         </OrderContent>
         <Total>
            <span>ИТОГО</span>
            <span>{totalCounter}</span>
            <TotalPrice>
               {formatCurrency(total)}
            </TotalPrice>
         </Total>
         <ButtonAdd onClick={() => {
            if (!authentication) {
               logIn();
            } else if (orders.length !== 0) {
               sendOrder();
            }
         }} disabled={orders.length === 0}>Оформить</ButtonAdd>
      </OrderStyled >
   )
}