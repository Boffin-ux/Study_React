import React from 'react';
import styled from 'styled-components';
import DbMenu from './DBMenu';
import { ListItem } from './ListItem';
import Banner from '../img/banner.png';

const MenuStyled = styled.main`
   background-color: #ccc;
   margin-top: 80px;
`;

const SectionMenu = styled.section`
   padding: 30px;
`;

const BannerHeader = styled.div`
      width: 1060px;
      height: 210px;
      background-image: url(${Banner});
      margin: 0 auto;
`;

export const Menu = () => (
   <MenuStyled>
      <BannerHeader />
      <SectionMenu>
         <h2>Бургеры</h2>
         <ListItem itemList={DbMenu.burger} />
      </SectionMenu>
      <SectionMenu>
         <h2>Закуски / Напитки</h2>
         <ListItem itemList={DbMenu.other} />
      </SectionMenu>
   </MenuStyled>
);