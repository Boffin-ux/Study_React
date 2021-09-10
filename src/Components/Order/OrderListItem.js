import React from 'react';
import styled from 'styled-components';
import TrashImage from '../../img/trash.svg';
import { totalPriceItems } from '../Functions/secondaryFunction';
import { formatCurrency } from '../Functions/secondaryFunction';

const OrderItemStyled = styled.li`
   display:flex;
   margin: 15px 0 0;
   flex-wrap: wrap;
`;
const TrashButton = styled.button`
   width: 24px;
   height: 24px;
   border-color: transparent;
   background-image: url(${TrashImage});
   background-position: center;
   background-size: cover;
   background-repeat: no-repeat;
   background-color: transparent;
`;
const ItemName = styled.span`
   flex-grow: 1;
`;
const ItemTotal = styled.span``;
const ItemPrice = styled.span`
   margin-left: 20px;
   margin-right: 20px;
   min-width: 65px;
   text-align: right;
`;
const ItemTopping = styled.div`
   font-size: 14px;
   color: #9A9A9A;
   width: 100%;
`;

export const OrderListItem = ({ order, index, deleteItem }) => {
   const toppings = order.topping.filter(item => item.checked).map(item => item.name).join(', ');
   return (
      <OrderItemStyled>
         <ItemName>{order.name} {order.choice}</ItemName>
         <ItemTotal>{order.count}</ItemTotal>
         <ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>
         <TrashButton onClick={() => deleteItem(index)} />
         {toppings && <ItemTopping>Допы: {toppings}</ItemTopping>}
      </OrderItemStyled>
   )
};