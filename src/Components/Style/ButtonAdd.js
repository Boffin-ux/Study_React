import styled from 'styled-components';

export const ButtonAdd = styled.button`
   display: block;
   background-color: #008a77;
   border-color: transparent;
   color: white;
   width: 250px;
   height: 65px;
   margin: 0 auto;
   font-size: inherit;
   font-family: inherit;
   transition-property: color, background-color, border-color;
   transition-duration: .3s;
   &:hover {
      background-color: #fff;
      color: #008a77;
      border-color: #008a77;
   }
   &:disabled {
      color: #bbb;
      background-color: #73908c;
      border: solid 1px #aaa;
   }
`;