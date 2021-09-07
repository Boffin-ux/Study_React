import React from 'react';
import styled from 'styled-components';
import DbMenu from './DBMenu';
import { ListItem } from './ListItem';
import { Banner } from './Banner';

const MenuStyled = styled.main`
   background-color: #ccc;
   margin-top: 80px;
   margin-left: 380px;
`;

const SectionMenu = styled.section`
   padding: 30px;
`;

export const Menu = ({ setOpenItem }) => (
   <MenuStyled>
      <Banner />
      <SectionMenu>
         <h2>Бургеры</h2>
         <ListItem
            itemList={DbMenu.burger}
            setOpenItem={setOpenItem}
         />
      </SectionMenu>
      <SectionMenu>
         <h2>Закуски / Напитки</h2>
         <ListItem
            itemList={DbMenu.other}
            setOpenItem={setOpenItem}
         />
      </SectionMenu>
   </MenuStyled>
);