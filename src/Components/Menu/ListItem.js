import React, { useContext } from 'react';
import { Context } from '../Functions/context';
import styled from 'styled-components';
import { formatCurrency } from '../Functions/secondaryFunction';

const List = styled.ul`
   display: flex;
   justify-content: space-around;
   flex-wrap: wrap;
`;
const Item = styled.li`
   color: #fff;
   text-shadow: 1px 1px 2px black;
   position: relative;
   width: 400px;
   height: 155px;
   background-image: ${({ img }) => `url(${img})`};
   background-position: center;
   background-size: cover;
   margin-top: 30px;
   margin-right: 30px;
   padding: 15px;
   font-size: 30px;
   z-index: 1;
   &:after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      background-color: black;
      opacity: 30%;
      z-index: -1;
   }
   &:hover {
      cursor: pointer;
      box-shadow: 0px 0px 20px 0px #008a77;
      &:after {
         opacity: 0;
      }
   }
`;

export const ListItem = ({ itemList }) => {
   const {
      openItem: { setOpenItem }
   } = useContext(Context);

   return (
      <List>
         {itemList.map(item => (
            <Item
               key={item.id}
               img={item.img}
               onClick={() => setOpenItem(item)}
            >
               <p>{item.name}</p>
               <p>{formatCurrency(item.price)}</p>
            </Item>
         ))}
      </List>
   )
};