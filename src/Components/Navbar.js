import React from 'react';
import styled from 'styled-components';
import LogoImg from '../img/logo.svg';
import AvaUser from '../img/user.svg';

const NavBarStyled = styled.header`
      position: fixed;
      top: 0;
      left: 0;
      z-index: 999;
      height: 80px;
      width: 100vw;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px;
      background-color: #008a77;
      color: white;
`;

const Logo = styled.div`
      display: flex;
      align-items: center;
`;

const H1 = styled.h1`
      font-size: 24px;
      margin-left: 15px;
`;

const ImgLogo = styled.img`
      width: 50px;
`;

const Login = styled.button`
      color: #FFFFFF;
      font-size: 16px;
      background: transparent;
      border: 0;
`;

export const NavBar = () => (
      <NavBarStyled>
            <Logo>
                  <ImgLogo src={LogoImg} alt="logo" />
                  <H1>MrDonald's</H1>
            </Logo>
            <Login>
                  <img src={AvaUser} alt="Login" />
                  <p>Войти</p>
            </Login>
      </NavBarStyled>
);