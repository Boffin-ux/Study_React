import React from 'react';
import { NavBar } from './Components/NavBar/Navbar';
import { Menu } from './Components/Menu/Menu';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { UseOpenItem } from './Components/Hooks/UseOpenItem';
import { UseOrders } from './Components/Hooks/UseOrders';

function App() {
  const openItem = UseOpenItem();
  const orders = UseOrders();

  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Order {...orders} />
      <Menu {...openItem} />
      {openItem.openItem && <ModalItem {...openItem} {...orders} />}
    </>
  );
}

export default App;
