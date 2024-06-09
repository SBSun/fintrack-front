import React from 'react';
import HistoryList from '../HistoryList/HistoryList';
import Sidebar from '../Sidebar/Sidebar';
import { useState } from 'react';
import './MainPage.css';

const MainPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sidebarMenus = ['Home'];

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
      <HistoryList />;
    </div>
  );
};

export default MainPage;
