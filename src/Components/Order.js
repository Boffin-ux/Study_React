import React from 'react';
import styled from 'styled-components';
import { ButtonAdd } from './ButtonAdd';
import { OrderListItem } from './OrderListItem';

const OrderStyled = styled.section`
   display: flex;
   flex-direction: column;
   position:fixed;
   top: 80px;
   background: #fff;
   min-width: 380px;
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
`;
const OrderList = styled.ul``;
const Total = styled.div`
   display: flex;
   margin: 0 35px 30px;
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

export const Order = () => {
   return (
      <OrderStyled>
         <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
         <OrderContent>
            <OrderList>
               <OrderListItem />
               <OrderListItem />
               <OrderListItem />
            </OrderList>
         </OrderContent>
         <Total>
            <span>ИТОГО</span>
            <span>5</span>
            <TotalPrice>850</TotalPrice>
         </Total>
         <ButtonAdd>Оформить</ButtonAdd>
      </OrderStyled>
   )
}