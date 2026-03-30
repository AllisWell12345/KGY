import React, { useState } from 'react'

function Hobby() {

    const [isChecked, setIsChecked] = useState({
        read: false,
        music: false,
        sport: false,
        coding: false
    });

    const handleCheckedChange = (e) => {
        setIsChecked({
            ...isChecked,
            [e.target.name]: e.target.checked
        });
    }

    const selectedHobbies = Object.keys(isChecked).filter(key => isChecked[key]);

    return (
        <>
            <input
                type='checkbox'
                id='read'
                name='read'
                checked={isChecked.read}
                onChange={handleCheckedChange}
            />
            <label htmlFor='read'>독서</label>
            <br />
            <input
                type='checkbox'
                id='music'
                name='music'
                checked={isChecked.music}
                onChange={handleCheckedChange}
            />
            <label htmlFor='music'>음악</label>
            <br />
            <input
                type='checkbox'
                id='sport'
                name='sport'
                checked={isChecked.sport}
                onChange={handleCheckedChange}
            />
            <label htmlFor='sport'>운동</label>
            <br />
            <input
                type='checkbox'
                id='coding'
                name='coding'
                checked={isChecked.coding}
                onChange={handleCheckedChange}
            />
            <label htmlFor='coding'>코딩</label>
            <h3>선택된 취미</h3>
            <>{selectedHobbies.length > 0
                ? selectedHobbies.join(', ') : "없음"}</>
        </>
    )
}

export default Hobby