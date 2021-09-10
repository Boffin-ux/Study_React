import React from 'react';
import styled from 'styled-components';
import { ButtonAdd } from '../Style/ButtonAdd';
import { CountItem } from './CountItem';
import { useCount } from '../Hooks/useCount';
import { totalPriceItems } from '../Functions/secondaryFunction';
import { formatCurrency } from '../Functions/secondaryFunction';
import { Toppings } from './Toppings';
import { useToppings } from '../Hooks/useToppings';

const Overlay = styled.div`
   position: fixed;
   display: flex;
   justify-content: center;
   align-items: center;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background-color: rgba(0, 0, 0, .5);
   z-index: 20;
`;
const Modal = styled.div`
   position: relative;
   width: 600px;
   height: 600px;
   background-color: #fff;
`;
const Banner = styled.div`
   width: 100%;
   height: 200px;
   background-image: url(${({ img }) => img});
   background-size: cover;
   background-position: center;
`;
const Content = styled.section`
   padding: 30px;
   display: flex;
   justify-content: space-between;
   flex-direction: column;
   height: calc(100% - 200px);
`;
const HeaderContent = styled.div`
   font-family: 'Pacifico', cursive;
   font-size: 30px;
   display: flex;
   justify-content: space-between;
`;
const TotalPriceItem = styled.div`
   display: flex;
   justify-content: space-between;
`;

export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {
   const counter = useCount();
   const toppings = useToppings(openItem);

   const closeModal = (e) => {
      if (e.target.id === 'overlay') {
         setOpenItem(null);
      }
   };

   const order = {
      ...openItem,
      count: counter.count,
      topping: toppings.toppings
   };

   const addToOrder = () => {
      setOrders([...orders, order]);
      setOpenItem(null);
   };

   return (
      <Overlay id="overlay" onClick={closeModal}>
         <Modal>
            <Banner img={openItem.img} />
            <Content>
               <HeaderContent>
                  <div>{openItem.name}</div>
                  <div>{formatCurrency(openItem.price)}</div>
               </HeaderContent>
               <CountItem {...counter} />
               {openItem.toppings && <Toppings {...toppings} />}
               <TotalPriceItem>
                  <span>Цена:</span>
                  <span>{formatCurrency(totalPriceItems(order))}</span>
               </TotalPriceItem>
               <ButtonAdd onClick={addToOrder}>Добавить</ButtonAdd>
            </Content>
         </Modal>
      </Overlay>
   )
};