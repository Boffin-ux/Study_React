import React, { useContext } from 'react';
import { Context } from '../Functions/context';
import styled from 'styled-components';
import { ListItem } from './ListItem';
import { Banner } from './Banner';
//import { useFetch } from '../Hooks/useFetch';
import { PreLoader } from '../Style/PreLoader';

const MenuStyled = styled.main`
   margin-top: 80px;
   margin-left: 380px;
   background: #fff;
`;
const SectionMenu = styled.section`
   padding: 30px;
`;

export const Menu = () => {
   // const res = useFetch();
   // const dbMenu = res.response;
   const { dbMenu } = useContext(Context);

   return (
      <MenuStyled>
         <Banner />
         {dbMenu ?
            <>
               <SectionMenu>
                  <h2>Бургеры</h2>
                  <ListItem
                     itemList={dbMenu.burger}
                  />
               </SectionMenu>
               <SectionMenu>
                  <h2>Закуски / Напитки</h2>
                  <ListItem
                     itemList={dbMenu.other}
                  />
               </SectionMenu>
            </> : <PreLoader />
         }
      </MenuStyled>
   )
};