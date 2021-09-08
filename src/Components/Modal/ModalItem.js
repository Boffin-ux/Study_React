import React from 'react';
import styled from 'styled-components';
import { ButtonAdd } from '../Style/ButtonAdd';

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
   justify-content: space-around;
`;

export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {
   const closeModal = (e) => {
      if (e.target.id === 'overlay') {
         setOpenItem(null);
      }
   };

   const order = { ...openItem };

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
                  <div>{openItem.price.toLocaleString('ru-RU',
                     { style: 'currency', currency: 'RUB' })}</div>
               </HeaderContent>
               <ButtonAdd onClick={addToOrder}>Добавить</ButtonAdd>
            </Content>
         </Modal>
      </Overlay>
   )
};