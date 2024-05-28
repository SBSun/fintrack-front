import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from "./LoginPage";

const App = () => {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;