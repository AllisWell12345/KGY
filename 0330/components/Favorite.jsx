import React, { useState } from 'react'

function Favorite() {
    const [selected, setSelected] = useState({
        color: '',
        fruit: ''
    });


    const handleInputChange = (e) => {
        setSelected({
            ...selected,
            [e.target.name]: e.target.value
        });
    }

    return (
        <>
            <label>좋아하는 색상: </label>
            <select
                name='color'
                value={selected.color}
                onChange={handleInputChange}
            >
                <option value="blue">파란색</option>
                <option value="red">빨간색</option>
                <option value="green">초록색</option>
                <option value="yellow">노란색</option>
            </select>
            <br/>
            <label>좋아하는 과일: </label>
            <select
                name='fruit'
                value={selected.fruit}
                onChange={handleInputChange}
            >
                <option value="apple">🍎사과</option>
                <option value="banana">🍌바나나</option>
                <option value="orange">🍊오렌지</option>
                <option value="grape">🍇포도</option>
            </select>
            <br/>
            <>선택한 색상 : {selected.color} </>
            <br/>
            <>선택한 과일 : {selected.fruit} </>
        </>
    )
}

export default Favorite
