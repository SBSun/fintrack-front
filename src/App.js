import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './component/LoginPage';
import MainPage from './component/MainPage';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    // 서버로 인증 상태 확인 요청
    const checkAuth = async () => {
      try {
        const response = await axios.get('https://fintrack.site/auth/status', {
          withCredentials: true,
        });
        setIsAuthenticated(response.data.data.isAuthenticated);
      } catch (error) {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path='/login'
            element={isAuthenticated ? <Navigate to='/' /> : <LoginPage />}
          />
          <Route
            path='/'
            element={isAuthenticated ? <MainPage /> : <Navigate to='/login' />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
