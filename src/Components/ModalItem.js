import React from 'react';
import styled from 'styled-components';
import { ButtonAdd } from './ButtonAdd';

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
   margin-bottom: 20px;
`;
const Item = styled.div`
   font-family: Pacifico;
   font-size: 30px;
   display: flex;
   justify-content: space-around;
`;

export const ModalItem = ({ openItem, setOpenItem }) => {
   function closeModal(e) {
      if (e.target.id === 'overlay') {
         setOpenItem(null);
      }
   }
   if (!openItem) return null;
   return (
      <Overlay id="overlay" onClick={closeModal}>
         <Modal>
            <Banner img={openItem.img} />
            <Item>
               <p>{openItem.name}</p>
               <p>{openItem.price.toLocaleString('ru-RU',
                  { style: 'currency', currency: 'RUB' })}</p>
            </Item>
            <ButtonAdd />
         </Modal>
      </Overlay>
   )
};