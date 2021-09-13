import React from 'react';
import styled from 'styled-components';
import LogoImg from '../../img/logo.svg';
import AvaUser from '../../img/user.svg';

const NavBarStyled = styled.header`
      position: fixed;
      top: 0;
      left: 0;
      z-index: 999;
      height: 80px;
      width: 100%;
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
const User = styled.div`
      display: flex;
      align-items: center;
      text-align: center;
`;
const LogOut = styled.span`
      font-size: 25px;
      cursor: pointer;
      margin-right: 30px;
`;
const Figure = styled.figure`
      margin: 0 30px;
`;

export const NavBar = ({ authentication, logIn, logOut }) => (
      <NavBarStyled>
            <Logo>
                  <ImgLogo src={LogoImg} alt="logo" />
                  <H1>MrDonald's</H1>
            </Logo>
            {authentication ?
                  <User>
                        <Figure>
                              <img src={AvaUser} alt={authentication.displayName} />
                              <figcaption>{authentication.displayName}</figcaption>
                        </Figure>
                        <LogOut title="Выйти" onClick={logOut}>X</LogOut>
                  </User> :
                  <Login onClick={logIn}>
                        <Figure>
                              <img src={AvaUser} alt="Login" />
                              <p>Войти</p>
                        </Figure>
                  </Login>}
      </NavBarStyled>
);