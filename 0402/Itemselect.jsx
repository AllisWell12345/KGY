import React from 'react'
import { useState } from 'react'

function Itemselect() {

    const [selectFruit, setSelectFruit] = useState("")

    return (
        <>
            <h2>아이템 선택</h2>

            <button onClick={() => setSelectFruit("사과")}>사과</button>
            <button onClick={() => setSelectFruit("바나나")}>바나나</button>
            <button onClick={() => setSelectFruit("오렌지")}>오렌지</button>
            <button onClick={() => setSelectFruit("포도")}>포도</button>
            <button onClick={() => setSelectFruit("딸기")}>딸기</button>
            <br />
            <>선택된 과일: {selectFruit}</>
            <br />
            <span>
                {selectFruit.length > 0 ? `🎉 ${selectFruit}를 선택하셨습니다!` : ""}
            </span>
        </>
    )
}

export default Itemselect
