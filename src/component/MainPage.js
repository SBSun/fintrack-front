import React from 'react';
import PaymentHistory from './PaymentHistory/PaymentHistory';
import Sidebar from './Sidebar/Sidebar';
import { useState } from 'react';

const MainPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sidebarMenus = ['결제 내역'];

  const handleMenuClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className='flex h-screen w-full overflow-hidden'>
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
