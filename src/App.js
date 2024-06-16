import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './component/LoginPage';
import MainPage from './component/MainPage';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/' element={<MainPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
