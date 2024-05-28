import React from 'react';

const LoginPage = () => {
    const handleButtonClick = () => {
        window.location.href = 'http://localhost:8080/auth/login/url';
    };

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
            <button
                onClick={handleButtonClick}
                style={{padding: '10px 20px', fontSize: '18px', borderRadius: '5px', cursor: 'pointer'}}
            >
               <img src={`${process.env.PUBLIC_URL}/kakao_login.png`} />
            </button>
        </div>
    );
};

export default LoginPage;