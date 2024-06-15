import React from 'react';
import PaymentHistory from '../PaymentHistory/PaymentHistory';
import Sidebar from '../Sidebar/Sidebar';
import { useState } from 'react';
import './MainPage.css';

const MainPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sidebarMenus = ['결제 내역'];

  const handleMenuClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div id='app'>
      <Sidebar
        menus={sidebarMenus}
        activeIndex={activeIndex}
        onMenuClick={handleMenuClick}
      />
      <PaymentHistory />
    </div>
  );
};

export default MainPage;
