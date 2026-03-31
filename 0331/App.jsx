import { useState, useEffect } from 'react'

// +prompt로 문자열을 받아
// +문자열과 텍스트 박스 띄어
// +그리고 텍스트 박스로 입력을 받아
// 입력 받은 값이 prompt로 받은 값과 같은지 확인
// 같지 않다면 아무일도 안 일어남
// 같다면 alert를 띄어
// alert에는 텍스트박스에 입력한 값이 prompt의 값과 같게 입력해 엔터를 친 시점까지의 초가 보여야 함

function App() {

    const [test] = useState(() => prompt("문자열을 입력해주세요"));

    const [answer, setAnswer] = useState("")

    const startTime = useRef(Date.now());

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            if (test === answer) {
                
                const endTime = Date.now();
                const totalSeconds = ((endTime - startTime.current) / 1000);

                alert(`${totalSeconds}초`);
            }
        }
    }

    return (
        <>
            <h2>{test}</h2>
            <input
                type='text'
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                onKeyDown={handleKeyDown}
            />

        </>
    )
}

export default App
