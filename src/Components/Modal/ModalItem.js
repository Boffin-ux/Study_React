import React, { useContext } from 'react';
import { Context } from '../Functions/context';
import { ContextItem } from '../Functions/contextItem';
import styled from 'styled-components';
import { ButtonAdd } from '../Style/ButtonAdd';
import { CountItem } from './CountItem';
import { useCount } from '../Hooks/useCount';
import { totalPriceItems, formatCurrency } from '../Functions/secondaryFunction';
import { Toppings } from './Toppings';
import { Choices } from './Choices';
import { useToppings } from '../Hooks/useToppings';
import { useChoices } from '../Hooks/useChoices';
import { useTitle } from '../Hooks/useTitle';
import { Overlay } from '../Style/OverlayStyle';


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

export const ModalItem = () => {
   const {
      orders: { orders, setOrders },
      openItem: { openItem, setOpenItem }
   } = useContext(Context);

   const counter = useCount(openItem.count);
   const toppings = useToppings(openItem);
   const choices = useChoices(openItem);
   useTitle(openItem);
   const isEdit = openItem.index > -1;

   const closeModal = (e) => {
      if (e.target.id === 'overlay') {
         setOpenItem(null);
      }
   };

   const order = {
      ...openItem,
      count: counter.count,
      topping: toppings.toppings,
      choice: choices.choice,
   };

   const editOrder = () => {
      const newOrders = [...orders];
      newOrders[openItem.index] = order;
      setOrders(newOrders);
      setOpenItem(null);
   }

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
               <ContextItem.Provider value={{
                  counter,
                  toppings,
                  choices,
                  openItem
               }}>
                  <CountItem />
                  {openItem.toppings && <Toppings />}
                  {openItem.choices && <Choices />}
               </ContextItem.Provider>
               <TotalPriceItem>
                  <span>Цена:</span>
                  <span>{formatCurrency(totalPriceItems(order))}</span>
               </TotalPriceItem>
               <ButtonAdd
                  onClick={isEdit ? editOrder : addToOrder}
                  disabled={order.choices && !order.choice}
               >{isEdit ? "Редактировать" : "Добавить"}</ButtonAdd>
            </Content>
         </Modal>
      </Overlay>
   )
};