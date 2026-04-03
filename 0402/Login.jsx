import React from 'react'
import { useState } from 'react';

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isRemember, setIsRemember] = useState(false);

    const isButtonDisabled = username.trim() === "" || password.trim() === "";

    const handleLogin = () => {
        alert(
            `로그인 시도!
사용자: ${username}
기억하기: ${isRemember ? "네" : "아니오"}`
        );

        setUsername("");
        setPassword("");
        setIsRemember(false); 
    };

    return (
        <>
            <h2>로그인 폼</h2>
            <>사용자명: </>
            <input
                type='text'
                placeholder='사용자명'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <>비밀번호: </>
            <input
                type='password'
                placeholder='비밀번호'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <input
                type='checkbox'
                id='chk'
                checked={isRemember}
                onChange={(e) => setIsRemember(e.target.checked)}
            />
            <label htmlFor='chk' style={{ cursor: 'pointer' }}> 로그인 상태 유지</label>
            <br />

            <button
                onClick={handleLogin}
                disabled={isButtonDisabled}
                style={{ cursor: isButtonDisabled ? 'not-allowed' : 'pointer' }}
            >
                로그인
            </button>
        </>
    )
}

export default Login
