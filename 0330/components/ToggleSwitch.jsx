import React, { useState } from 'react'

function ToggleSwitch() {

    const [isCheckeda, setIsCheckeda] = useState(true);
    const [isCheckedb, setIsCheckedb] = useState(false);

    return (
        <>
            <input
                type='checkbox'
                id='chka'
                checked={isCheckeda}
                onChange={(e) => setIsCheckeda(e.target.checked)}
            />
            <label htmlFor='chka'>콘텐츠 표시: {isCheckeda ? "켜짐" : "꺼짐"}</label>
            <br/>
            <input
                type='checkbox'
                id='chkb'
                checked={isCheckedb}
                onChange={(e) => setIsCheckedb(e.target.checked)}
            />
            <label htmlFor='chkb'>다크모드: {isCheckedb ? "🌙" : "☀️"}</label>
            <h4>{isCheckeda ? "🎉 이 메시지는 조건부로 표시됩니다!" : ""}</h4>
        </>
    )
}

export default ToggleSwitch
