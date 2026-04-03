import React from 'react'
import { useState } from 'react';

function Calculator() {

    const [num1, setNum1] = useState(10);
    const [num2, setNum2] = useState(5);

    return (
        <>
            <h2>간단한 계산기</h2>
            <>숫자 1: </>
            <input  
                type='number'
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
            />
            <br/>
            <>숫자 2: </>
            <input  
                type='number'
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
            />
            <br/>
            <>덧셈: {num1} + {num2} = {Number(num1)+Number(num2)}</>
            <br/>
            <>뺄셈: {num1} - {num2} = {num1-num2}</>
            <br/>
            <>곱셈: {num1} x {num2} = {(num1*num2).toFixed(2)}</>
            <br/>
            <>나눗셈: {num1} ÷ {num2} = {(num1/num2).toFixed(2)}</>
        </>
    )
}

export default Calculator
