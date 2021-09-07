import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
   background-color: #008a77;
   border: 0;
   color: white;
   width: 250px;
   height: 65px;
   position: absolute;
   bottom: 40px;
   left: 175px;
`;

export const ButtonAdd = () => (
   <ButtonStyled>
      Добавить
   </ButtonStyled>
);