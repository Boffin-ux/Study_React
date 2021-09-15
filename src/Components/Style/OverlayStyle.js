import styled from 'styled-components';

export const Overlay = styled.div`
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
export const OrderTitle = styled.h2`
   text-align: center;
   margin-bottom: 30px;
`;
export const Total = styled.div`
   display: flex;
   margin: 30px 35px;
   & span:first-child {
      flex-grow: 1;
   }
`;
export const TotalPrice = styled.span`
   margin-left: 20px;
   margin-right: 20px;
   min-width: 65px;
   text-align: right;
`;
