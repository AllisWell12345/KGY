import React from 'react'

function Login() {
    return (
        <>
            <h2>로그인 폼</h2>
            <>사용자명: </>
            <input
                type='text'
                placeholder='사용자명'
            />
            <br/>
            <>비밀번호: </>
            <input
                type='text'
                placeholder='비밀번호'
            />
            <br/>
            <input
                type='checkbox'
                id='chk'
            />
            <label>로그인 상태 유지</label>
            <br/>
            <button>로그인</button>
        </>
    )
}

export default Login
