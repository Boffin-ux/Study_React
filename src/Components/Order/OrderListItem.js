import React from 'react';
import styled from 'styled-components';
import TrashImage from '../../img/trash.svg';
import { totalPriceItems } from '../Functions/secondaryFunction';
import { formatCurrency } from '../Functions/secondaryFunction';

const OrderItemStyled = styled.li`
   display:flex;
   margin: 15px 0;
`;
const TrashButton = styled.button`
   width: 24px;
   heigh: 24px;
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

export const OrderListItem = ({ order }) => (
   <OrderItemStyled>
      <ItemName>{order.name}</ItemName>
      <ItemTotal>{order.count}</ItemTotal>
      <ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>
      <TrashButton />
   </OrderItemStyled>
);