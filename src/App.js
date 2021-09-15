import React from 'react';
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { NavBar } from './Components/NavBar/Navbar';
import { Menu } from './Components/Menu/Menu';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';
import { getDatabase } from "firebase/database";
import { useTitle } from './Components/Hooks/useTitle';
import { useDB } from './Components/Hooks/useDB';
import { OrderConfirm } from './Components/Order/OrderConfirm';
import { useOrderConfirm } from './Components/Hooks/useOrderConfirm';
import { Context } from './Components/Functions/context';

const firebaseConfig = {
  apiKey: "AIzaSyBzyxAnJJVA7H47LSaKQszEGMkseRXFBI4",
  authDomain: "mrdonalds-a8ead.firebaseapp.com",
  databaseURL: "https://mrdonalds-a8ead-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mrdonalds-a8ead",
  storageBucket: "mrdonalds-a8ead.appspot.com",
  messagingSenderId: "1032705847823",
  appId: "1:1032705847823:web:a4d164dbdb7a4deff1e97a"
};
initializeApp(firebaseConfig);

function App() {
  const auth = useAuth(getAuth);
  const openItem = useOpenItem();
  const orders = useOrders();
  const database = getDatabase();
  const dbMenu = useDB(database);
  const orderConfirm = useOrderConfirm();
  useTitle(openItem.openItem);

  return (
    <Context.Provider value={{
      auth,
      openItem,
      orders,
      orderConfirm,
      database,
      dbMenu
    }}>
      <GlobalStyle />
      <NavBar />
      <Order />
      <Menu />
      {openItem.openItem && <ModalItem />}
      {orderConfirm.openOrderConfirm && <OrderConfirm />}
    </Context.Provider>
  );
}

export default App;