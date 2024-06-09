import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './component/LoginPage';
import MainPage from './component/MainPage/MainPage';

const App = () => {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/' element={<MainPage />}></Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
