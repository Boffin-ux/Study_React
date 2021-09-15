import React, { useContext } from 'react';
import { Context } from '../Functions/context';
import styled from 'styled-components';
import { ButtonAdd } from '../Style/ButtonAdd';
import { OrderListItem } from './OrderListItem';
import { totalPriceItems, formatCurrency } from '../Functions/secondaryFunction';
import { OrderTitle, Total, TotalPrice } from '../Style/OverlayStyle';

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
const OrderContent = styled.div`
   flex-grow: 1;
   overflow-y: auto;
`;
const OrderList = styled.ul`
   padding-bottom: 20px;
`;
const EmptyList = styled.p`
   text-align: center;
`;

export const Order = () => {
   const {
      auth: { authentication, logIn },
      orders: { orders, setOrders },
      orderConfirm: { setOpenOrderConfirm }
   } = useContext(Context);

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
                  />)}
               </OrderList> :
               <EmptyList>Список заказов пуст</EmptyList>}
         </OrderContent>
         {orders.length ?
            <>
               <Total>
                  <span>ИТОГО</span>
                  <span>{totalCounter}</span>
                  <TotalPrice>
                     {formatCurrency(total)}
                  </TotalPrice>
               </Total>
               <ButtonAdd onClick={() => {
                  if (authentication) {
                     setOpenOrderConfirm(true);
                  } else {
                     logIn();
                  }
               }} disabled={orders.length === 0}>Оформить</ButtonAdd>
            </> :
            null}
      </OrderStyled >
   )
}