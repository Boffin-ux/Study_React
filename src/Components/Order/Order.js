import React from 'react';
import styled from 'styled-components';
import { ButtonAdd } from '../Style/ButtonAdd';
import { OrderListItem } from './OrderListItem';
import { totalPriceItems } from '../Functions/secondaryFunction';
import { formatCurrency } from '../Functions/secondaryFunction';

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

export const Order = ({ orders, setOrders }) => {
   const deleteItem = index => {
      const newOrders = [...orders];
      newOrders.splice(index, 1);
      setOrders(newOrders);
   }

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
         <Total>
            <span>ИТОГО</span>
            <span>{totalCounter}</span>
            <TotalPrice>
               {formatCurrency(total)}
            </TotalPrice>
         </Total>
         <ButtonAdd>Оформить</ButtonAdd>
      </OrderStyled>
   )
}