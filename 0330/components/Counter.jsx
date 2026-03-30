import React, { useState } from 'react'

function Counter() {

    let [number, setNumber] = useState(0)

    const handleIncrease = () => {
        setNumber(number + 1)
    }
    const handleReset = () => {
        setNumber(0);
    }
    const handleDecrease = () => {
        setNumber((prev) => prev - 1)
    }

    return (
        <>
            <>카운트: {number}</>
            <br/>
            <button onClick={handleIncrease}>+1</button>
            <button onClick={handleReset}>초기화</button>
            <button onClick={handleDecrease}>-1</button>
        </>
    )
}

export default Counter
